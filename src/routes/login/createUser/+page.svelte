<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<div class="container">
	<div class="card">
		<h1>Create Account</h1>
		<p class="subtitle">Join Vim Trainer</p>

		{#if page.form?.error}
			<div class="error-message">{page.form.error}</div>
		{/if}

		<form method="POST" use:enhance action="?/createUser">
			<label>
				<span>Username</span>
				<input type="text" name="username" placeholder="Enter username" required />
			</label>
			<label>
				<span>Password</span>
				<input type="password" name="password" placeholder="Enter password" required />
			</label>
			<button type="submit">Create Account</button>
		</form>

		<div class="footer-link">
			Already have an account? <a href={resolve('/login')}>Sign in</a>
		</div>
	</div>
</div>

<style>
	.container {
		width: 100%;
		max-width: 420px;
		padding: 20px;
		margin: auto;
		margin-top: 50px;
	}

	.card {
		background: #1e1e1e;
		padding: 40px;
		border-radius: 12px;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
	}

	h1 {
		font-size: 28px;
		font-weight: 600;
		margin-bottom: 8px;
		text-align: center;
	}

	.subtitle {
		font-size: 14px;
		text-align: center;
		margin-bottom: 32px;
		opacity: 0.7;
	}

	.error-message {
		background: rgba(255, 80, 80, 0.1);
		color: #ff6b6b;
		padding: 12px 16px;
		border-radius: 6px;
		border: 1px solid #ff6b6b;
		margin-bottom: 20px;
		font-size: 14px;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 8px;
		font-size: 14px;
		font-weight: 500;
	}

	input {
		padding: 12px 16px;
		border: 1px solid #3a3a3a;
		border-radius: 6px;
		font-size: 15px;
		background: #2a2a2a;
		color: #f2f3f5;
	}

	input:focus {
		outline: none;
		border-color: #438fff;
	}

	button {
		padding: 12px;
		border: none;
		border-radius: 6px;
		background: #438fff;
		color: white;
		font-size: 15px;
		font-weight: 600;
		cursor: pointer;
	}

	button:hover {
		opacity: 0.9;
	}

	.footer-link {
		margin-top: 24px;
		text-align: center;
		font-size: 14px;
		opacity: 0.7;
	}

	.footer-link a {
		color: #438fff;
		text-decoration: none;
	}
</style>
