<script lang="ts">
	import { resolve } from '$app/paths';

	const { type, amount, difficulty } = $props();

	// svelte-ignore state_referenced_locally
	const url = `${type}-${amount}-${difficulty}`;
</script>

<div class="playlist-container">
	<h2>Task: {type}</h2>
	amount: {amount} tasks

	<a href={resolve(`/tasks/${url}`)}>GO!</a>
</div>
