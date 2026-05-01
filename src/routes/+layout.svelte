<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/app.css';
	import { resolve } from '$app/paths';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app-wrapper">
	<header class="app-header">
		<div class="header-container">
			<a href={resolve('/')} class="logo">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<polyline points="4 17 10 11 4 5"></polyline>
					<line x1="12" y1="19" x2="20" y2="19"></line>
				</svg>
				<span>VIM-Trainer</span>
			</a>

			<nav class="nav">
				{#if data.user}
					<span class="username">Hi, {data.user.username}</span>
					<form method="POST" action="/?/logout">
						<button type="submit" class="nav-btn logout">Logout</button>
					</form>
				{:else}
					<a href={resolve('/login')} class="nav-btn">Login</a>
				{/if}
			</nav>
		</div>
	</header>

	<main class="app-main">
		{@render children()}
	</main>

	<footer class="app-footer">
		<div class="footer-container">
			<p class="footer-text">Master Vim motions through practice</p>
			<div class="footer-links">
				<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
				<span class="separator">•</span>
				<span class="footer-year">2026</span>
			</div>
		</div>
	</footer>
</div>

<style>
	.app-wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.app-header {
		background: #1a1b1e;
		border-bottom: 1px solid #2d2e32;
		padding: 1rem 0;
		position: sticky;
		top: 0;
		z-index: 100;
		backdrop-filter: blur(10px);
		background: rgba(26, 27, 30, 0.95);
	}

	.header-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		color: #fff;
		font-size: 1.25rem;
		font-weight: 700;
		transition: opacity 0.2s ease;
	}

	.logo:hover {
		opacity: 0.8;
	}

	.logo svg {
		color: #667eea;
	}

	.nav {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.username {
		color: #9ca3af;
		font-size: 0.875rem;
	}

	.nav-btn {
		padding: 0.5rem 1.25rem;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: #fff;
		border: none;
		border-radius: 6px;
		font-size: 0.875rem;
		font-weight: 600;
		text-decoration: none;
		cursor: pointer;
		transition:
			transform 0.2s ease,
			opacity 0.2s ease;
		display: inline-block;
	}

	.nav-btn:hover {
		transform: translateY(-1px);
		opacity: 0.9;
	}

	.nav-btn.logout {
		background: #2d2e32;
	}

	.nav-btn.logout:hover {
		background: #3a3b40;
	}

	.app-main {
		flex: 1;
	}

	.app-footer {
		background: #1a1b1e;
		border-top: 1px solid #2d2e32;
		padding: 2rem 0;
		margin-top: 4rem;
	}

	.footer-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
	}

	.footer-text {
		color: #6b7280;
		font-size: 0.875rem;
		margin: 0;
	}

	.footer-links {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.875rem;
	}

	.footer-links a {
		color: #9ca3af;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.footer-links a:hover {
		color: #667eea;
	}

	.separator {
		color: #4b5563;
	}

	.footer-year {
		color: #6b7280;
	}

	@media (max-width: 768px) {
		.header-container,
		.footer-container {
			padding: 0 1rem;
		}

		.username {
			display: none;
		}

		.footer-container {
			gap: 1rem;
		}

		.footer-links {
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
