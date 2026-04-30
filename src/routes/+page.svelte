<script lang="ts">
	import Playlist from '$lib/components/Playlist.svelte';
</script>

<div class="container">
	<h1>Vim Motion Trainer</h1>
	<p class="subtitle">Practice your Vim skills</p>

	<div class="content">
		<p>Welcome to Vim Motion Trainer!</p>
	</div>

	<Playlist amount="10" type="typos" difficulty="Easy" />
</div>

<style>
	.container {
		max-width: 900px;
		margin: 2rem auto;
		padding: 0 1rem;
	}

	h1 {
		text-align: center;
		color: var(--app-fg);
		margin-bottom: 0.5rem;
	}

	.subtitle {
		text-align: center;
		color: rgba(242, 243, 245, 0.7);
		margin-bottom: 2rem;
	}

	.content {
		text-align: center;
		padding: 2rem;
	}
</style>
