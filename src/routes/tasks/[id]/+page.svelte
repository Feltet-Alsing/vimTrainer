<script lang="ts">
	import { page } from '$app/state';
	import VimView from '$lib/components/VimView.svelte';
</script>

<VimView tasks={page.data.tasks} taskType={page.data.taskType} user={page.data.user} />
