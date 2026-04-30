<script lang="ts">
	import { resolve } from '$app/paths';

	const { type, amount, difficulty = undefined } = $props();

	const url = $derived(difficulty ? `${type}-${amount}-${difficulty}` : `${type}-${amount}`);
</script>

<div class="playlist-container">
	<h2>Task: {type}</h2>
	amount: {amount} tasks

	<a href={resolve(`/tasks/${url}`)}>GO!</a>
</div>
