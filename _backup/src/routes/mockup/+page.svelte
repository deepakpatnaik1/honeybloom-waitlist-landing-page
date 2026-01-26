<script lang="ts">
	let showOverlay = true;
</script>

<div class="min-h-screen bg-neutral-900 flex items-center justify-center p-8">
	<div class="relative">

		<!-- AFTER: Lowered + 1.5x size (behind, semi-transparent) -->
		{#if showOverlay}
		<div class="absolute phone-after opacity-40 border-2 border-green-500"
			 style="transform: translateY(80px) scale(1.5); transform-origin: center center;">
			<div class="w-[280px] h-[560px] bg-black rounded-[2.5rem] border-4 border-neutral-700 overflow-hidden">
				<!-- Status bar -->
				<div class="h-8 flex justify-between items-center px-5 pt-2 text-[10px] text-white/50">
					<span>9:41</span>
					<div class="flex gap-1">
						<div class="w-2.5 h-2.5 bg-white/30 rounded-sm"></div>
						<div class="w-2.5 h-2.5 bg-white/30 rounded-sm"></div>
					</div>
				</div>
				<!-- Header -->
				<div class="flex items-center gap-3 px-4 py-3 border-b border-white/10">
					<div class="w-8 h-8 rounded-full bg-magenta/30"></div>
					<div>
						<div class="text-xs text-white font-medium">Sophie</div>
						<div class="text-[10px] text-white/40">Online</div>
					</div>
				</div>
				<!-- Chat area placeholder -->
				<div class="p-4 space-y-3">
					<div class="text-[9px] text-white/20 text-center">TODAY 5:23 PM</div>
					<div class="bg-neutral-800 rounded-xl px-3 py-2 text-xs text-white/70 max-w-[80%]">Message 1</div>
					<div class="bg-magenta rounded-xl px-3 py-2 text-xs text-white max-w-[80%] ml-auto">Message 2</div>
					<div class="bg-neutral-800 rounded-xl px-3 py-2 text-xs text-white/70 max-w-[80%]">Message 3</div>
				</div>
			</div>
		</div>
		{/if}

		<!-- BEFORE: Original position + size (front, solid) -->
		<div class="relative phone-before border-2 border-magenta z-10">
			<div class="w-[280px] h-[560px] bg-black rounded-[2.5rem] border-4 border-neutral-700 overflow-hidden">
				<!-- Status bar -->
				<div class="h-8 flex justify-between items-center px-5 pt-2 text-[10px] text-white/50">
					<span>9:41</span>
					<div class="flex gap-1">
						<div class="w-2.5 h-2.5 bg-white/30 rounded-sm"></div>
						<div class="w-2.5 h-2.5 bg-white/30 rounded-sm"></div>
					</div>
				</div>
				<!-- Header -->
				<div class="flex items-center gap-3 px-4 py-3 border-b border-white/10">
					<div class="w-8 h-8 rounded-full bg-magenta/30"></div>
					<div>
						<div class="text-xs text-white font-medium">Sophie</div>
						<div class="text-[10px] text-white/40">Online</div>
					</div>
				</div>
				<!-- Chat area placeholder -->
				<div class="p-4 space-y-3">
					<div class="text-[9px] text-white/20 text-center">TODAY 5:23 PM</div>
					<div class="bg-neutral-800 rounded-xl px-3 py-2 text-xs text-white/70 max-w-[80%]">Message 1</div>
					<div class="bg-magenta rounded-xl px-3 py-2 text-xs text-white max-w-[80%] ml-auto">Message 2</div>
					<div class="bg-neutral-800 rounded-xl px-3 py-2 text-xs text-white/70 max-w-[80%]">Message 3</div>
				</div>
			</div>
		</div>

		<!-- Legend -->
		<div class="absolute -bottom-20 left-0 right-0 flex justify-center gap-8 text-sm">
			<div class="flex items-center gap-2">
				<div class="w-4 h-4 border-2 border-magenta"></div>
				<span class="text-white">Before (original)</span>
			</div>
			<div class="flex items-center gap-2">
				<div class="w-4 h-4 border-2 border-green-500 opacity-40"></div>
				<span class="text-white/60">After (1.5x, lowered 80px)</span>
			</div>
		</div>
	</div>

	<!-- Toggle -->
	<button
		on:click={() => showOverlay = !showOverlay}
		class="fixed top-4 right-4 bg-magenta text-white px-4 py-2 rounded-lg text-sm font-medium"
	>
		{showOverlay ? 'Hide' : 'Show'} Overlay
	</button>

	<!-- Controls info -->
	<div class="fixed bottom-4 left-4 text-white/50 text-xs space-y-1">
		<div><span class="text-magenta">Magenta border:</span> Original position (scale 1.0)</div>
		<div><span class="text-green-500">Green border:</span> After scroll (scale 1.5, +80px down)</div>
	</div>
</div>
