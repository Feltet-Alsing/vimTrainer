<script lang="ts">
	import { resolve } from '$app/paths';

	const { tasks } = $props();
</script>

<div class="playlist-container">
	<h2>Task: {tasks.info.title}</h2>
	amount: {tasks.tasks.length} tasks

	<a href={resolve(`/tasks/${tasks.info.id}`)}>GO!</a>
</div>
