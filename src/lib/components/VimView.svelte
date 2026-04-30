<script lang="ts">
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import { EditorView, basicSetup } from 'codemirror';
	import { javascript } from '@codemirror/lang-javascript';
	import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
	import { tags } from '@lezer/highlight';
	import { getCM, Vim, vim } from '@replit/codemirror-vim';

	const { tasks } = $props();

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

	onMount(() => {
		editor = new EditorView({
			extensions: [
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

	function check() {
		if (normalizeForCompare(editorContent) === normalizeForCompare(tasks[currentId].facit)) {
			if (currentId === tasks.length - 1) {
				startTime = false;
				if (timerId) clearInterval(timerId);
				writeToEditor(`Task Completed! \nYou completed this task in ${counter} seconds`);
				taskCompleted = true;
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
