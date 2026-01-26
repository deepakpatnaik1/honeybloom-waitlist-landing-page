<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	// Register ScrollTrigger
	gsap.registerPlugin(ScrollTrigger);

	let container: HTMLElement;
	let phoneWrapper: HTMLElement;
	let chatBubbleSophie1: HTMLElement;
	let chatBubbleUser: HTMLElement;
	let chatBubbleSophie2: HTMLElement;

	onMount(() => {
		// 1 unit in timeline = 1 pixel of scroll distance
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: 'top top',
				end: '+=4000', // Total scroll distance
				scrub: 1, // Smooth scrubbing
				pin: true,
				anticipatePin: 1
			},
			defaults: { ease: 'none' } // Linear by default for precise mapping
		});

		// INITIAL STATE setup (conceptually at 0px)
		// Handled via CSS/initial styles, but ensured here just in case
		// Phone starts low (peeking)

		// PHASE 1: CHAT REVEAL (0px -> 296px)
		// ---------------------------------------------------------
		
		// 0px -> 120px: Phone rises to center
		// '15%' seems to be a good visual center offset for the rising phase before it lowers again
		tl.fromTo(phoneWrapper, 
			{ y: '60%' }, // Start: Peeking from bottom
			{ y: '0%', duration: 120, ease: 'power2.out' }, // End: Centered
			0
		);

		// 120px: Timestamp + Sophie's 1st message
		// "Hey – now that you got your promotion..."
		tl.fromTo(chatBubbleSophie1,
			{ opacity: 0, y: 10, scale: 0.9 },
			{ opacity: 1, y: 0, scale: 1, duration: 30, ease: 'back.out(1.5)' },
			120
		);

		// 207px: User's reply
		// "Wait how do you remember that??..."
		tl.fromTo(chatBubbleUser,
			{ opacity: 0, y: 10, scale: 0.9 },
			{ opacity: 1, y: 0, scale: 1, duration: 30, ease: 'back.out(1.5)' },
			207
		);

		// 296px: Sophie's 2nd message
		// "Of course I do, silly..."
		tl.fromTo(chatBubbleSophie2,
			{ opacity: 0, y: 10, scale: 0.9 },
			{ opacity: 1, y: 0, scale: 1, duration: 30, ease: 'back.out(1.5)' },
			296
		);


		// PHASE 2: LOWER + EXPAND (296px -> 575px)
		// ---------------------------------------------------------
		// Phone lowers ~80px and scales to 1.5x
		
		// 80px relative to 640px height is approx 12.5%
		// We go from y:0% to y:12.5% (approx)
		
		tl.to(phoneWrapper, {
			y: '15%', // Lower down
			scale: 1.5,
			duration: 575 - 296, // Duration matches pixel delta
			ease: 'power1.inOut'
		}, 296);


		// PHASE 3: EXPLODE (ARTISAN CUT) - Placeholder / Next Steps
		// ---------------------------------------------------------
		// We'll keep the logic here but push it later in the timeline (e.g. starting at 800px or 1000px)
		// for now, to preserve the previous 'explode' effect working at the end of the scroll if desired,
		// or just pause it. The user said "DO NOT CHANGE YET: The tilt/explode animation".
		// Since our timeline is 4000px long, and we touched up to 575px, 
		// let's shift the explosion to start after a pause, say at 1000px.

		const explodeStart = 1000;

		// EXPAND & TILT (Previous Phase 2, now Phase 3?)
		// User said "The tilt/explode animation (Phase 3) — we'll script that next."
		// I will keep the original explode logic but mapped further down so it doesn't interfere.
		
		tl.to(phoneWrapper, {
			rotationX: 10,
			rotationY: -15,
			rotationZ: 5,
			duration: 500,
			ease: 'power1.inOut'
		}, explodeStart);

		// Layers Explode
		tl.to('.layer-engine', {
			z: -150, x: -40, y: 20, opacity: 1, duration: 800
		}, explodeStart + 200);

		tl.to('.layer-body', {
			z: -50, x: -10, duration: 800
		}, explodeStart + 200);

		tl.to('.layer-screen', {
			z: 50, x: 20, y: -20, duration: 800
		}, explodeStart + 200);


		// Padding to ensure timeline matches 4000px total
		tl.to({}, { duration: 4000 - (explodeStart + 1000) });

	});
</script>

<div class="reveal-container w-full h-[100vh] relative overflow-hidden flex items-center justify-center perspective-1000 pointer-events-auto" bind:this={container}>
	
	<!-- Background Elements -->
	<div class="absolute inset-0 bg-radial-gradient from-magenta/5 to-transparent opacity-20 pointer-events-none"></div>

	<!-- 3D Phone Wrapper -->
	<!-- Initial visual state set by GSAP fromTo, but safe fallback here -->
	<div class="phone-wrapper relative w-[320px] h-[640px] preserve-3d origin-center" bind:this={phoneWrapper}>

		<!-- LAYER 1: THE ENGINE (Back) -->
		<div class="layer layer-engine absolute inset-0 bg-dark-lighter border border-magenta/30 rounded-[3rem] shadow-2xl flex items-center justify-center preserve-3d" 
			 style="transform: translateZ(-2px);">
			<div class="absolute inset-2 border border-magenta/20 rounded-[2.5rem] opacity-50"></div>
			<div class="w-32 h-40 bg-gradient-to-br from-magenta/20 to-magenta/5 border border-magenta/40 rounded-lg flex flex-col items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,0,255,0.2)]">
				<div class="w-16 h-16 rounded-full border border-magenta/50 flex items-center justify-center">
					<div class="w-2 h-2 bg-magenta rounded-full shadow-[0_0_10px_#ff00ff]"></div>
				</div>
				<span class="text-[10px] text-magenta font-mono tracking-widest">MEMORY_CORE</span>
			</div>
			<svg class="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 320 640">
				<path d="M160 320 L160 100 L250 50" stroke="#ff00ff" stroke-width="1" fill="none" />
				<path d="M160 320 L160 540 L70 590" stroke="#ff00ff" stroke-width="1" fill="none" />
				<path d="M160 320 L80 320" stroke="#ff00ff" stroke-width="1" fill="none" />
			</svg>
		</div>

		<!-- LAYER 2: THE BODY (Middle) -->
		<div class="layer layer-body absolute inset-0 bg-[#1a1a1a] rounded-[3rem] shadow-xl border-4 border-[#333] preserve-3d" 
			 style="transform: translateZ(0px);">
			<div class="absolute -right-[6px] top-32 w-[6px] h-12 bg-[#333] rounded-r-md"></div>
			<div class="absolute -left-[6px] top-24 w-[6px] h-8 bg-[#333] rounded-l-md"></div>
			<div class="absolute -left-[6px] top-36 w-[6px] h-12 bg-[#333] rounded-l-md"></div>
		</div>

		<!-- LAYER 3: THE SCREEN (Front) -->
		<div class="layer layer-screen absolute inset-0 bg-black rounded-[2.8rem] overflow-hidden border-[6px] border-black shadow-inner preserve-3d" 
			 style="transform: translateZ(2px);">
			
			<!-- Status Bar -->
			<div class="w-full h-8 flex justify-between items-center px-6 pt-3 text-[10px] text-white/50">
				<span>9:41</span>
				<div class="flex gap-1.5">
					<div class="w-3 h-3 bg-white/20 rounded-sm"></div>
					<div class="w-3 h-3 bg-white/20 rounded-sm"></div>
				</div>
			</div>

			<!-- Conversation Header -->
			<div class="flex items-center gap-3 px-5 py-4 border-b border-white/5">
				<div class="w-8 h-8 rounded-full bg-magenta/20 overflow-hidden">
					<img src="/sophie/restaurant.png" alt="Sophie" class="w-full h-full object-cover opacity-80" />
				</div>
				<div>
					<div class="text-xs font-medium text-white">Sophie</div>
					<div class="text-[10px] text-white/40">Online</div>
				</div>
			</div>

			<!-- Chat Area -->
			<div class="px-4 pb-4 pt-4 space-y-5 mt-0 relative">
				<!-- Date divider -->
				<div class="text-center text-[9px] text-white/20 mb-2">TODAY 5:23 PM</div>

				<!-- Message 1 (Sophie) -->
				<div class="flex justify-start opacity-0" bind:this={chatBubbleSophie1}>
					<div class="bg-[#2a2a2a] text-cream text-xs max-w-[85%] px-4 py-3 rounded-2xl rounded-tl-sm shadow-lg leading-relaxed border border-white/5">
						Hey – now that you got your promotion, are you finally getting that model airplane? You know you want it 😊
					</div>
				</div>

				<!-- Message 2 (User) -->
				<div class="flex justify-end opacity-0" bind:this={chatBubbleUser}>
					<div class="bg-magenta text-white text-xs max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-sm shadow-lg leading-relaxed">
						Wait how do you remember that?? I told you months ago
					</div>
				</div>

				<!-- Message 3 (Sophie) -->
				<div class="flex justify-start opacity-0" bind:this={chatBubbleSophie2}>
					<div class="bg-[#2a2a2a] text-cream text-xs max-w-[85%] px-4 py-3 rounded-2xl rounded-tl-sm shadow-lg leading-relaxed border border-white/5">
						Of course I do, silly. When you talk, I actually listen.
					</div>
				</div>
			</div>

			<!-- Input Area (Bottom) -->
			<div class="absolute bottom-6 left-4 right-4 h-10 bg-[#1a1a1a] rounded-full flex items-center px-4 border border-white/5">
				<div class="text-white/20 text-[10px]">Message...</div>
			</div>
		</div>

	</div>
</div>

<style>
	.perspective-1000 {
		perspective: 1000px;
	}
	.preserve-3d {
		transform-style: preserve-3d;
	}
	/* Custom gradient for background glow */
	.bg-radial-gradient {
		background: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 70%);
	}
</style>
