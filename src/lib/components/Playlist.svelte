<script lang="ts">
	import { resolve } from '$app/paths';

	const { type, amount, difficulty = undefined, records = {} } = $props();

	const url = $derived(difficulty ? `${type}-${amount}-${difficulty}` : `${type}-${amount}`);

	console.log(records);

	// Get the best time for this task type
	const bestTime = $derived(() => {
		if (Array.isArray(type)) {
			// For multiple types, show the combined best or skip
			return null;
		}
		return records[type]?.record_time || null;
	});

	function formatTime(seconds: number | null) {
		if (!seconds) return 'No record';
		if (seconds < 60) return `${seconds}s`;
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins}m ${secs}s`;
	}
</script>

<div class="playlist-container">
	<h2>Task: {type}</h2>
	amount: {amount} tasks
	<br /> PR: {formatTime(records.time)}
	{#if bestTime()}
		<div class="record">Best time: {formatTime(bestTime())}</div>
	{/if}

	<a href={resolve(`/tasks/${url}`)}>GO!</a>
</div>
