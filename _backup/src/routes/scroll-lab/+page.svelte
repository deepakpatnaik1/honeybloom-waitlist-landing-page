<script lang="ts">
	import { onMount } from 'svelte';

	let ratchetClicks: number[] = []; // Store the total px for each "click"
	let currentClickTotal = 0;
	let clickTimeout: ReturnType<typeof setTimeout> | null = null;
	let totalScrolled = 0;
	let avgPixelsPerClick = 0;

	const CLICK_WINDOW_MS = 150; // Events within 150ms = one physical click

	onMount(() => {
		window.scrollTo(0, 0);

		const handleScroll = (e: WheelEvent) => {
			const delta = Math.abs(e.deltaY);
			currentClickTotal += delta;
			totalScrolled += delta;

			// Reset the timeout - we're still in the same "click"
			if (clickTimeout) clearTimeout(clickTimeout);

			clickTimeout = setTimeout(() => {
				// Click finished - record the total
				if (currentClickTotal > 0) {
					ratchetClicks = [Math.round(currentClickTotal), ...ratchetClicks.slice(0, 19)];
					avgPixelsPerClick = Math.round(
						ratchetClicks.reduce((a, b) => a + b, 0) / ratchetClicks.length
					);
					currentClickTotal = 0;
				}
			}, CLICK_WINDOW_MS);
		};

		window.addEventListener('wheel', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('wheel', handleScroll);
			if (clickTimeout) clearTimeout(clickTimeout);
		};
	});

	function reset() {
		ratchetClicks = [];
		currentClickTotal = 0;
		totalScrolled = 0;
		avgPixelsPerClick = 0;
		if (clickTimeout) clearTimeout(clickTimeout);
	}

	$: clickCount = ratchetClicks.length;
</script>

<div class="min-h-[400vh] bg-neutral-900 text-white p-8">
	<!-- Fixed measurement panel -->
	<div class="fixed top-4 left-4 right-4 bg-black/90 border border-magenta/50 rounded-xl p-6 z-50 max-w-xl">
		<h1 class="text-2xl font-bold text-magenta mb-4">🔬 Scroll Lab v2</h1>
		<p class="text-xs text-neutral-400 mb-4">Aggregates macOS smooth scroll events into physical clicks (150ms window)</p>

		<!-- Big numbers -->
		<div class="grid grid-cols-3 gap-4 mb-6">
			<div class="bg-neutral-800 rounded-lg p-4 text-center">
				<div class="text-4xl font-mono text-magenta">{clickCount}</div>
				<div class="text-xs text-neutral-400 mt-1">Ratchet Clicks</div>
			</div>
			<div class="bg-neutral-800 rounded-lg p-4 text-center">
				<div class="text-4xl font-mono text-white">{Math.round(totalScrolled)}</div>
				<div class="text-xs text-neutral-400 mt-1">Total Pixels</div>
			</div>
			<div class="bg-neutral-800 rounded-lg p-4 text-center">
				<div class="text-4xl font-mono text-green-400">{avgPixelsPerClick}</div>
				<div class="text-xs text-neutral-400 mt-1">Avg px/click</div>
			</div>
		</div>

		<!-- Per-click breakdown -->
		<div class="mb-4">
			<div class="text-xs text-neutral-500 mb-2">Pixels per click (most recent first):</div>
			<div class="flex flex-wrap gap-2">
				{#each ratchetClicks as px, i}
					<span class="px-3 py-1.5 rounded text-sm font-mono {i === 0 ? 'bg-magenta text-white' : 'bg-neutral-700 text-neutral-300'}">{px}px</span>
				{/each}
				{#if ratchetClicks.length === 0}
					<span class="text-neutral-600 text-sm">Scroll to measure...</span>
				{/if}
			</div>
		</div>

		<!-- Reset button -->
		<button
			on:click={reset}
			class="bg-magenta hover:bg-magenta/80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
		>
			Reset Measurements
		</button>

		<p class="text-xs text-neutral-500 mt-4">
			💡 One slow, deliberate scroll click should now show as a single entry (~40-120px depending on settings)
		</p>
	</div>

	<!-- Scroll distance markers -->
	<div class="pt-[300px]">
		{#each Array(40) as _, i}
			<div class="h-[100px] border-t border-neutral-700 flex items-center px-4">
				<span class="text-neutral-600 font-mono text-sm">{(i + 1) * 100}px</span>
			</div>
		{/each}
	</div>
</div>

<style>
	:global(body) {
		overflow-x: hidden;
	}
</style>
