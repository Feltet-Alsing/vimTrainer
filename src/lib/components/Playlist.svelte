<script lang="ts">
	import { resolve } from '$app/paths';

	const { type, amount, difficulty = undefined, records = {} } = $props();

	const url = $derived(difficulty ? `${type}-${amount}-${difficulty}` : `${type}-${amount}`);

	// Get the best time for this task type
	const bestTime = $derived(() => {
		if (Array.isArray(type)) {
			// For multiple types, show the combined best or skip
			return null;
		}
		return records[type]?.record_time || null;
	});

	function formatTime(seconds: number | null) {
		if (!seconds) return 'No record';
		if (seconds < 60) return `${seconds}s`;
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins}m ${secs}s`;
	}

	function getTitle() {
		if (Array.isArray(type)) {
			return 'Mixed Practice';
		}
		const titles: Record<string, string> = {
			typos: 'Fix Typos',
			move: 'Move Code',
			surround: 'Surround'
		};
		return titles[type] || type;
	}

	function getDifficultyBadge() {
		if (!difficulty) return null;
		return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
	}
</script>

<a href={resolve(`/tasks/${url}`)} class="playlist-card">
	<div class="card-header">
		<h3 class="title">{getTitle()}</h3>
		{#if getDifficultyBadge()}
			<span class="difficulty-badge">{getDifficultyBadge()}</span>
		{/if}
	</div>

	<div class="card-body">
		<div class="stat">
			<span class="stat-label">Tasks</span>
			<span class="stat-value">{amount}</span>
		</div>

		{#if bestTime()}
			<div class="stat">
				<span class="stat-label">Best Time</span>
				<span class="stat-value record">{formatTime(bestTime())}</span>
			</div>
		{:else}
			<div class="stat">
				<span class="stat-label">Best Time</span>
				<span class="stat-value no-record">—</span>
			</div>
		{/if}
	</div>

	<div class="card-footer">
		<span class="start-text">Start Practice</span>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="arrow"
		>
			<line x1="5" y1="12" x2="19" y2="12"></line>
			<polyline points="12 5 19 12 12 19"></polyline>
		</svg>
	</div>
</a>

<style>
	.playlist-card {
		display: flex;
		flex-direction: column;
		background: #1a1b1e;
		border: 1px solid #2d2e32;
		border-radius: 12px;
		padding: 1.5rem;
		text-decoration: none;
		color: inherit;
		transition: all 0.2s ease;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.playlist-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	.playlist-card:hover {
		border-color: #667eea;
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(102, 126, 234, 0.15);
	}

	.playlist-card:hover::before {
		opacity: 1;
	}

	.card-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1.25rem;
	}

	.title {
		font-size: 1.25rem;
		font-weight: 600;
		color: #fff;
		margin: 0;
	}

	.difficulty-badge {
		font-size: 0.75rem;
		font-weight: 500;
		padding: 0.25rem 0.5rem;
		background: rgba(102, 126, 234, 0.15);
		color: #a5b4fc;
		border-radius: 4px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.card-body {
		display: flex;
		gap: 2rem;
		margin-bottom: 1.5rem;
	}

	.stat {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.stat-label {
		font-size: 0.875rem;
		color: #6b7280;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		font-weight: 500;
	}

	.stat-value {
		font-size: 1.5rem;
		font-weight: 600;
		color: #fff;
		font-variant-numeric: tabular-nums;
	}

	.stat-value.record {
		color: #a5b4fc;
	}

	.stat-value.no-record {
		color: #4b5563;
	}

	.card-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 1rem;
		border-top: 1px solid #2d2e32;
		margin-top: auto;
	}

	.start-text {
		font-size: 0.875rem;
		font-weight: 500;
		color: #9ca3af;
		transition: color 0.2s ease;
	}

	.playlist-card:hover .start-text {
		color: #667eea;
	}

	.arrow {
		transition: transform 0.2s ease;
		color: #6b7280;
	}

	.playlist-card:hover .arrow {
		transform: translateX(4px);
		color: #667eea;
	}
</style>
