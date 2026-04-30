<script lang="ts">
	import { page } from '$app/state';
	import VimView from '$lib/components/VimView.svelte';
	import { tasks } from '../../../db/tasks/tasks';

	const id = $derived(page.data.id.toString() as keyof typeof tasks);
	console.log(page);
</script>

<VimView tasks={tasks[id]?.tasks ?? []} />
