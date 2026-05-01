<script lang="ts">
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import { EditorView, basicSetup } from 'codemirror';
	import { keymap } from '@codemirror/view';
	import { Prec } from '@codemirror/state';
	import { javascript } from '@codemirror/lang-javascript';
	import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
	import { tags } from '@lezer/highlight';
	import { getCM, Vim, vim } from '@replit/codemirror-vim';

	const { tasks, taskType = '', user = null } = $props();

	let editor: EditorView;
	let editorDiv: HTMLElement;
	let currentId = $state(0);
	let editorContent = $state('');
	let counter = $state(1);
	let startTime = $state(true);
	let timerId: ReturnType<typeof setInterval> | null = null;
	let taskCompleted = $state(false);

	const currentTask = $derived(tasks[currentId].content);

	const vimTrainerTheme = EditorView.theme({
		'&': {
			color: '#d4d4d4',
			backgroundColor: '#1e1e1e'
		},
		'.cm-content': {
			caretColor: '#ffffff'
		},
		'.cm-cursor, .cm-dropCursor': {
			borderLeftColor: '#ffffff'
		},
		'&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
			backgroundColor: '#264f78'
		},
		'.cm-gutters': {
			color: '#858585',
			backgroundColor: '#1e1e1e',
			border: 'none'
		},
		'.cm-activeLine': {
			backgroundColor: '#2a2d2e'
		},
		'.cm-activeLineGutter': {
			backgroundColor: '#2a2d2e'
		}
	});

	const jsHighlightStyle = HighlightStyle.define([
		{ tag: [tags.keyword, tags.modifier], color: '#569cd6' },
		{ tag: [tags.string, tags.special(tags.string)], color: '#ce9178' },
		{ tag: [tags.number, tags.bool, tags.null], color: '#b5cea8' },
		{ tag: [tags.comment], color: '#6a9955', fontStyle: 'italic' },
		{ tag: [tags.function(tags.variableName), tags.function(tags.propertyName)], color: '#dcdcaa' },
		{ tag: [tags.variableName], color: '#9cdcfe' },
		{ tag: [tags.propertyName], color: '#9cdcfe' },
		{ tag: [tags.operator, tags.punctuation], color: '#d4d4d4' },
		{ tag: [tags.className, tags.typeName], color: '#4ec9b0' }
	]);

	function startTimer() {
		if (timerId) clearInterval(timerId);
		timerId = setInterval(() => {
			if (startTime) counter++;
		}, 1000);
	}

	// Helper function to get closing character
	const getClosingChar = (char: string) => {
		const pairs: Record<string, string> = {
			'(': ')',
			')': ')',
			'[': ']',
			']': ']',
			'{': '}',
			'}': '}',
			'<': '>',
			'>': '>'
		};
		return pairs[char] || char;
	};

	// State for surround mode
	let waitingForSurroundChar = false;
	let savedSelection = '';

	// State for change surround (cs) mode
	let justPressedC = false;
	let waitingForFromChar = false;
	let waitingForToChar = false;
	let fromChar = '';

	// Helper to find surrounding characters around cursor
	const findSurroundingChars = (cm: any, targetChar: string) => {
		const cursor = cm.getCursor();
		const line = cm.getLine(cursor.line);
		const pos = cursor.ch;

		// Map of opening to closing chars
		const pairs: Record<string, string> = {
			'"': '"',
			"'": "'",
			'`': '`',
			'(': ')',
			'[': ']',
			'{': '}'
		};

		const openChar = targetChar;
		const closeChar = pairs[targetChar] || targetChar;

		// Search backwards for opening char
		let startPos = -1;
		for (let i = pos - 1; i >= 0; i--) {
			if (line[i] === openChar) {
				startPos = i;
				break;
			}
		}

		// Search forwards for closing char
		let endPos = -1;
		for (let i = pos; i < line.length; i++) {
			if (line[i] === closeChar) {
				endPos = i;
				break;
			}
		}

		if (startPos !== -1 && endPos !== -1) {
			return {
				start: { line: cursor.line, ch: startPos },
				end: { line: cursor.line, ch: endPos },
				content: line.substring(startPos + 1, endPos)
			};
		}

		return null;
	};

	// Create surround keymap with highest precedence
	const surroundKeymap = Prec.highest(
		keymap.of([
			{
				key: 'S',
				run: (view) => {
					const cm = getCM(view);
					if (cm && cm.state.vim && cm.state.vim.visualMode) {
						// Just save the selected text
						savedSelection = cm.getSelection();
						waitingForSurroundChar = true;
						return true; // Prevent default S behavior
					}
					return false;
				}
			},
			{
				key: 'c',
				run: (view) => {
					const cm = getCM(view);
					if (cm && cm.state.vim && !cm.state.vim.visualMode && cm.state.vim.mode === 'normal') {
						// Set temporary flag to detect 'cs' sequence
						justPressedC = true;
						setTimeout(() => {
							justPressedC = false;
						}, 100);
						return false; // Let Vim see the 'c'
					}
					return false;
				}
			},
			{
				key: 's',
				run: (view) => {
					if (justPressedC) {
						// This is 'cs' - enter change surround mode
						justPressedC = false;
						waitingForFromChar = true;
						return true; // Consume the 's'
					}
					return false;
				}
			},
			{
				any: (view, event) => {
					// Handle S surround character input
					if (waitingForSurroundChar && event.key.length === 1) {
						const cm = getCM(view);
						if (cm) {
							const openChar = event.key;
							const closeChar = getClosingChar(event.key);

							// Simply replace selection with surrounded text
							cm.replaceSelection(openChar + savedSelection + closeChar);
							Vim.exitVisualMode(cm, false);

							waitingForSurroundChar = false;
							return true;
						}
					}

					// Handle cs "from" character
					if (waitingForFromChar && event.key.length === 1) {
						fromChar = event.key;
						waitingForFromChar = false;
						waitingForToChar = true;
						return true;
					}

					// Handle cs "to" character
					if (waitingForToChar && event.key.length === 1) {
						const cm = getCM(view);
						if (cm) {
							const toChar = event.key;
							const result = findSurroundingChars(cm, fromChar);

							if (result) {
								const openChar = toChar;
								const closeChar = getClosingChar(toChar);

								// Replace opening char
								cm.replaceRange(openChar, result.start, {
									line: result.start.line,
									ch: result.start.ch + 1
								});

								// Replace closing char (adjust for changed position)
								cm.replaceRange(closeChar, result.end, {
									line: result.end.line,
									ch: result.end.ch + 1
								});
							}

							waitingForToChar = false;
							fromChar = '';
							return true;
						}
					}

					if (waitingForSurroundChar && event.key === 'Escape') {
						waitingForSurroundChar = false;
						return true;
					}

					if ((waitingForFromChar || waitingForToChar) && event.key === 'Escape') {
						waitingForFromChar = false;
						waitingForToChar = false;
						fromChar = '';
						return true;
					}

					return false;
				}
			}
		])
	);

	onMount(() => {
		editor = new EditorView({
			extensions: [
				surroundKeymap,
				vim(),
				basicSetup,
				javascript(),
				vimTrainerTheme,
				syntaxHighlighting(jsHighlightStyle),
				EditorView.updateListener.of((update) => {
					if (!update.docChanged) return;
					editorContent = update.state.doc.toString();
				})
			],
			parent: editorDiv,
			doc: currentTask
		});

		editorContent = editor.state.doc.toString();
		startTimer();

		return () => {
			if (timerId) clearInterval(timerId);
		};
	});

	function writeToEditor(content: string) {
		if (!editor) return;

		editor.dispatch({
			changes: { from: 0, to: editor.state.doc.length, insert: content }
		});
	}

	function normalizeForCompare(code: string) {
		return code.replace(/\s+/g, '');
	}

	async function saveRecord(recordTime: number) {
		if (!user) return;

		try {
			const formData = new FormData();
			formData.append('taskType', taskType);
			formData.append('recordTime', recordTime.toString());

			await fetch('?/saveRecord', {
				method: 'POST',
				body: formData
			});
		} catch (error) {
			console.error('Failed to save record:', error);
		}
	}

	function check() {
		if (normalizeForCompare(editorContent) === normalizeForCompare(tasks[currentId].facit)) {
			if (currentId === tasks.length - 1) {
				startTime = false;
				if (timerId) clearInterval(timerId);
				writeToEditor(`Task Completed! \nYou completed this task in ${counter} seconds`);
				taskCompleted = true;
				// Save the record
				saveRecord(counter);
			} else {
				currentId++;
				const cm = getCM(editor);
				if (cm) {
					Vim.handleKey(cm, '<Esc>', 'user');
				}
				writeToEditor(tasks[currentId].content);
			}
		}
	}

	function reset() {
		currentId = 0;
		counter = 1;
		startTime = true;
		taskCompleted = false;
		startTimer();
		writeToEditor(tasks[currentId].content);
	}

	function resetCurrentTask() {
		writeToEditor(tasks[currentId].content);
	}

	function goBack() {
		window.location.href = resolve('/');
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="editor-wrap">
	<div onkeyup={() => check()} bind:this={editorDiv} class="editor"></div>
	<div class="timer-overlay">
		<span class="timer-value">{counter}</span>
		<span class="timer-label">Sekunder</span>
	</div>
</div>

{#if taskCompleted}
	<div class="actions">
		<button class="actionBtn retryBtn" onclick={() => reset()}>Retry</button>
		<button class="actionBtn backBtn" onclick={() => goBack()}>Go Back</button>
	</div>
{:else}
	<div class="actions">
		<button class="actionBtn backBtn" onclick={() => resetCurrentTask()}>Reset</button>
		<button class="actionBtn backBtn" onclick={() => goBack()}>Go Back</button>
	</div>
{/if}

<style>
	.editor-wrap {
		position: relative;
	}

	.editor {
		height: 500px;
		border: 1px solid #ccc;
		font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
	}

	:global(.cm-editor) {
		height: 100%;
	}

	.actions {
		margin-top: 14px;
		display: flex;
		gap: 10px;
	}

	.actionBtn {
		border: none;
		padding: 10px 14px;
		border-radius: 10px;
		font-weight: 600;
		cursor: pointer;
		transition:
			transform 120ms ease,
			opacity 120ms ease;
	}

	.actionBtn:hover {
		transform: translateY(-1px);
		opacity: 0.95;
	}

	.retryBtn {
		background: #2e7d32;
		color: #ffffff;
	}

	.backBtn {
		background: #eceff1;
		color: #1f2933;
	}

	.timer-overlay {
		position: absolute;
		top: 12px;
		right: 12px;
		display: flex;
		gap: 8px;
		align-items: center;
		padding: 6px 10px;
		border-radius: 8px;
		color: #f5f5f5;
		backdrop-filter: blur(2px);
		pointer-events: none;
		z-index: 2;
	}

	.timer-value {
		font-weight: 700;
		font-variant-numeric: tabular-nums;
	}

	.timer-label {
		font-size: 0.8rem;
		opacity: 0.85;
	}
</style>
