<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	// Register ScrollTrigger
	gsap.registerPlugin(ScrollTrigger);

	let container: HTMLElement;
	let phoneWrapper: HTMLElement;
	let chatBubble1: HTMLElement;
	let chatBubble2: HTMLElement;
	let chatBubble2Text: HTMLElement;
	let layers: HTMLElement[] = [];

	onMount(() => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: 'top top',
				end: '+=4000', // Long scroll distance for multi-phase animation
				scrub: 1,
				pin: true,
				anticipatePin: 1
			}
		});

		// PHASE 1: RISE & CHAT
		// ---------------------------------------------------------
		// Phone rises from bottom
		timeline.to(phoneWrapper, {
			y: '-40%', // Move up to center
			duration: 2,
			ease: 'power2.out'
		});

		// Chat 1: User says "My God, you remembered..."
		timeline.fromTo(chatBubble1, 
			{ opacity: 0, y: 20, scale: 0.9 },
			{ opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)' }
		);

		// Wait a beat
		timeline.to({}, { duration: 0.5 });

		// Chat 2: Sophie replies (Typing...)
		// For now just pop it in, could add typing dot animation later
		timeline.fromTo(chatBubble2,
			{ opacity: 0, y: 20, scale: 0.9 },
			{ opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)' }
		);


		// PHASE 2: EXPAND & TILT
		// ---------------------------------------------------------
		// Expand slightly
		timeline.to(phoneWrapper, {
			scale: 1.1,
			duration: 1.5,
			ease: 'power1.inOut'
		}, 'tilt');

		// Tilt 3D
		timeline.to(phoneWrapper, {
			rotationX: 10,
			rotationY: -15,
			rotationZ: 5,
			duration: 2,
			ease: 'power1.inOut'
		}, 'tilt');


		// PHASE 3: EXPLODE (ARTISAN CUT)
		// ---------------------------------------------------------
		// Separate layers
		// Layer 0 is back (Engine), Layer 1 is Body, Layer 2 is Screen
		
		// Back layer (Engine) goes back
		timeline.to('.layer-engine', {
			z: -150,
			x: -40,
			y: 20,
			opacity: 1, // Ensure visibility
			duration: 2
		}, 'explode');

		// Middle layer (Body) stays roughly central but shifts
		timeline.to('.layer-body', {
			z: -50,
			x: -10,
			duration: 2
		}, 'explode');

		// Front layer (Screen) comes forward
		timeline.to('.layer-screen', {
			z: 50,
			x: 20,
			y: -20,
			duration: 2
		}, 'explode');

	});
</script>

<div class="reveal-container w-full h-[100vh] relative overflow-hidden flex items-center justify-center perspective-1000 pointer-events-auto" bind:this={container}>
	
	<!-- Background Elements (optional, e.g. glow) -->
	<div class="absolute inset-0 bg-radial-gradient from-magenta/5 to-transparent opacity-20 pointer-events-none"></div>

	<!-- 3D Phone Wrapper -->
	<div class="phone-wrapper relative w-[320px] h-[640px] preserve-3d" bind:this={phoneWrapper} style="transform: translateY(30%);">

		<!-- LAYER 1: THE ENGINE (Back) -->
		<!-- Abstract cool tech visualization -->
		<div class="layer layer-engine absolute inset-0 bg-dark-lighter border border-magenta/30 rounded-[3rem] shadow-2xl flex items-center justify-center preserve-3d" 
			 style="transform: translateZ(-2px);">
			
			<div class="absolute inset-2 border border-magenta/20 rounded-[2.5rem] opacity-50"></div>
			
			<!-- "Chip" representation -->
			<div class="w-32 h-40 bg-gradient-to-br from-magenta/20 to-magenta/5 border border-magenta/40 rounded-lg flex flex-col items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,0,255,0.2)]">
				<div class="w-16 h-16 rounded-full border border-magenta/50 flex items-center justify-center">
					<div class="w-2 h-2 bg-magenta rounded-full shadow-[0_0_10px_#ff00ff]"></div>
				</div>
				<span class="text-[10px] text-magenta font-mono tracking-widest">MEMORY_CORE</span>
			</div>

			<!-- Circuit lines -->
			<svg class="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 320 640">
				<path d="M160 320 L160 100 L250 50" stroke="#ff00ff" stroke-width="1" fill="none" />
				<path d="M160 320 L160 540 L70 590" stroke="#ff00ff" stroke-width="1" fill="none" />
				<path d="M160 320 L80 320" stroke="#ff00ff" stroke-width="1" fill="none" />
			</svg>
		</div>


		<!-- LAYER 2: THE BODY (Middle) -->
		<!-- Solid phone frame -->
		<div class="layer layer-body absolute inset-0 bg-[#1a1a1a] rounded-[3rem] shadow-xl border-4 border-[#333] preserve-3d" 
			 style="transform: translateZ(0px);">
			<!-- Side buttons -->
			<div class="absolute -right-[6px] top-32 w-[6px] h-12 bg-[#333] rounded-r-md"></div>
			<div class="absolute -left-[6px] top-24 w-[6px] h-8 bg-[#333] rounded-l-md"></div>
			<div class="absolute -left-[6px] top-36 w-[6px] h-12 bg-[#333] rounded-l-md"></div>
		</div>


		<!-- LAYER 3: THE SCREEN (Front) -->
		<!-- The UI Content -->
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
			<div class="p-4 space-y-6 mt-12 relative">
				<!-- Date divider -->
				<div class="text-center text-[9px] text-white/20 mb-6">TODAY 5:23 PM</div>

				<!-- Message 1 (User) -->
				<div class="flex justify-end" bind:this={chatBubble1}>
					<div class="bg-magenta text-white text-xs max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-sm shadow-lg leading-relaxed">
						My God, you remembered! I didn't think you would – I told you this three months ago!
					</div>
				</div>

				<!-- Message 2 (Sophie) -->
				<div class="flex justify-start" bind:this={chatBubble2}>
					<div class="bg-[#2a2a2a] text-cream text-xs max-w-[85%] px-4 py-3 rounded-2xl rounded-tl-sm shadow-lg leading-relaxed border border-white/5">
						<span bind:this={chatBubble2Text}>Of course I do, silly. I told you, when you talk, I really do listen to you.</span>
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
