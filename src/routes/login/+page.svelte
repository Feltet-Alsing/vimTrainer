<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<div class="container">
	<div class="card">
		<h1>VIM-Trainer</h1>
		<p class="subtitle">Sign in to continue your practice</p>

		{#if page.form?.error}
			<div class="error-message">{page.form.error}</div>
		{/if}

		<form method="POST" use:enhance action="?/login">
			<label>
				<span>Username</span>
				<input type="text" name="username" placeholder="Enter username" required />
			</label>
			<label>
				<span>Password</span>
				<input type="password" name="password" placeholder="Enter password" required />
			</label>
			<button type="submit">Sign In</button>
		</form>

		<div class="footer-link">
			Don't have an account? <a href={resolve('/login/createUser')}>Create one</a>
		</div>
	</div>
</div>

<style>
	.container {
		width: 100%;
		max-width: 440px;
		padding: 2rem;
		margin: 0 auto;
		display: flex;
		align-items: center;
		min-height: calc(100vh - 200px);
	}

	.card {
		width: 100%;
		background: #1a1b1e;
		border: 1px solid #2d2e32;
		padding: 3rem;
		border-radius: 12px;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
	}

	h1 {
		font-size: 2rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		text-align: center;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.subtitle {
		font-size: 0.875rem;
		text-align: center;
		margin-bottom: 2rem;
		color: #9ca3af;
	}

	.error-message {
		background: rgba(239, 68, 68, 0.1);
		color: #f87171;
		padding: 0.75rem 1rem;
		border-radius: 8px;
		border: 1px solid rgba(239, 68, 68, 0.3);
		margin-bottom: 1.5rem;
		font-size: 0.875rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label span {
		font-size: 0.875rem;
		font-weight: 500;
		color: #d1d5db;
	}

	input {
		padding: 0.75rem 1rem;
		border: 1px solid #2d2e32;
		border-radius: 8px;
		font-size: 0.9375rem;
		background: #0f1012;
		color: #f2f3f5;
		transition: all 0.2s ease;
	}

	input:focus {
		outline: none;
		border-color: #667eea;
		box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
	}

	button {
		margin-top: 0.5rem;
		padding: 0.75rem 1.5rem;
		border: none;
		border-radius: 8px;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		font-size: 0.9375rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	button:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
	}

	.footer-link {
		margin-top: 1.5rem;
		text-align: center;
		font-size: 0.875rem;
		color: #6b7280;
	}

	.footer-link a {
		color: #a5b4fc;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.footer-link a:hover {
		color: #667eea;
	}
</style>
