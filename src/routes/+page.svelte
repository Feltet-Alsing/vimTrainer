<script lang="ts">
	import Playlist from '$lib/components/Playlist.svelte';

	const { data } = $props();
</script>

<div class="container">
	<header class="header">
		<h1>Vim Motion Trainer</h1>
		<p class="subtitle">Fordi Filip er for langsom...</p>
	</header>

	<div class="playlists">
		<Playlist amount="10" type={['typos', 'move', 'surround']} records={data.records} />
		<Playlist amount="10" type="move" records={data.records} />
		<Playlist amount="10" type="surround" difficulty="Easy" records={data.records} />
		<Playlist amount="10" type="typos" records={data.records} />
	</div>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 3rem 2rem;
		min-height: 100vh;
	}

	.header {
		text-align: center;
		margin-bottom: 4rem;
	}

	h1 {
		font-size: 3rem;
		font-weight: 700;
		color: #fff;
		margin: 0 0 1rem 0;
		letter-spacing: -0.02em;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.subtitle {
		font-size: 1.125rem;
		color: #9ca3af;
		margin: 0;
		font-weight: 400;
	}

	.playlists {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 1.5rem;
	}

	@media (max-width: 768px) {
		.container {
			padding: 2rem 1rem;
		}

		h1 {
			font-size: 2rem;
		}

		.subtitle {
			font-size: 1rem;
		}

		.playlists {
			grid-template-columns: 1fr;
		}
	}
</style>
