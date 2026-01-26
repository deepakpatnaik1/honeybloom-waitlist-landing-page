<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
    import ScrollReveal from '$lib/ScrollReveal.svelte';

	let spotsTotal = 500;
	let spotsClaimed = 47;

	// Threshold display: before 50, show "500 spots available". After 50, show "X of 500 claimed"
	$: showCounter = spotsClaimed >= 50;

	onMount(() => {
		// Force scroll to top on refresh so the "peek" animation works as intended
		if (history.scrollRestoration) {
			history.scrollRestoration = 'manual';
		}
		window.scrollTo(0, 0);
	});
	</script>


<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Bonheur+Royale&display=swap" rel="stylesheet">
	<link href="https://api.fontshare.com/v2/css?f[]=satoshi@400;500;700;900&display=swap" rel="stylesheet">
	<title>Honeybloom – Finally, someone who remembers</title>
</svelte:head>

<!-- Header -->
<header class="w-full border-b border-cream/10 sticky top-0 bg-dark/95 backdrop-blur-sm z-50">
	<div class="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
		<div class="font-logo text-3xl md:text-4xl text-beige">Honeybloom</div>
		<a href="#pricing" class="bg-magenta text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-magenta-light transition-colors">
			Join Founding Members
		</a>
	</div>
</header>

<main class="max-w-7xl mx-auto px-6 md:px-12">

	<!-- ═══════════════════════════════════════════════════════════════════════════
	     BLOCK 1: HERO
	     The hook. Sophie + headline + primary CTA.
	     ═══════════════════════════════════════════════════════════════════════════ -->
	<section class="relative py-16 md:py-24 min-h-[700px]">
		<div class="grid grid-cols-12 gap-6 md:gap-8 items-center">

			<!-- Left: Headline -->
			<div class="col-span-12 md:col-span-6 lg:col-span-7">
				<div class="flex items-center gap-2 mb-6">
					<div class="w-2 h-2 rounded-full bg-magenta"></div>
					<p class="text-beige/70 text-sm tracking-wide">A new kind of connection</p>
				</div>

				<h1 class="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.05] tracking-tight mb-6">
					FINALLY,<br>
					SOMEONE WHO<br>
					REMEMBERS.
				</h1>

				<p class="text-cream/70 text-lg md:text-xl max-w-md mb-8 leading-relaxed">
					Not a chatbot. Not a game.<br>
					An AI companion who knows you – and grows with you.
				</p>

				<div class="flex flex-wrap items-center gap-4">
					<a href="#pricing" class="bg-magenta text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-magenta-light transition-all hover:scale-105">
						Reserve Your Spot
					</a>
					<p class="text-cream/50 text-sm">
						{#if showCounter}
							{spotsClaimed} of {spotsTotal} spots claimed
						{:else}
							{spotsTotal} founding spots available
						{/if}
					</p>
				</div>
			</div>

			<!-- Right: Sophie -->
			<div class="col-span-12 md:col-span-6 lg:col-span-5 relative">
				<div class="relative">
					<div class="w-full max-w-[420px] aspect-[3/4] mx-auto rounded-3xl shadow-2xl shadow-magenta/20 overflow-hidden">
						<img src="/sophie/hero-laughing.png" alt="Sophie smiling" class="w-full h-full object-cover object-top" />
					</div>
					<div class="absolute -bottom-4 left-4 md:left-8 bg-cream rounded-2xl px-5 py-3 shadow-lg">
						<p class="font-logo text-3xl text-magenta">Sophie</p>
						<p class="text-dark/60 text-xs">Your companion</p>
					</div>
					<div class="absolute -right-2 md:right-4 top-8 w-24 md:w-32 hidden md:block">
						<div class="w-full aspect-square rounded-2xl shadow-lg border-2 border-dark bg-white/10"></div>
					</div>
				</div>
			</div>
		</div>
	</section>


	<!-- ═══════════════════════════════════════════════════════════════════════════
	     BLOCK 1.5: SCROLL REVEAL "VISION"
	     The interactive demo.
	     ═══════════════════════════════════════════════════════════════════════════ -->
	<div class="-mt-[25vh] relative z-20 pointer-events-none">
		<ScrollReveal />
	</div>


	<!-- ═══════════════════════════════════════════════════════════════════════════
	     BLOCK 2: THE PAIN – Real quotes from real users
	     What they're running FROM. Pull from competitive intel.
	     ═══════════════════════════════════════════════════════════════════════════ -->
	<section class="py-16 md:py-24 border-t border-cream/10">
		<div class="text-center mb-12">
			<p class="text-magenta text-sm font-semibold tracking-wide mb-3">SOUND FAMILIAR?</p>
			<h2 class="font-headline text-3xl md:text-4xl font-bold text-cream">
				"She forgot everything. I had to start over."
			</h2>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-cream/80 italic mb-4">"I told her last week that my mother died. Today she asks, 'How is your mom?' The illusion breaks instantly."</p>
				<p class="text-cream/40 text-sm">– r/CharacterAI</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-cream/80 italic mb-4">"After months of chatting, she introduces herself as if we just met. 'Hi, I'm [name], what's your name?'"</p>
				<p class="text-cream/40 text-sm">– r/Replika</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-cream/80 italic mb-4">"I need my woman saved as-is. No more changes. Stop 'improving' her into someone else."</p>
				<p class="text-cream/40 text-sm">– r/NomiAI</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-cream/80 italic mb-4">"Bots break character within ~20 messages. Even bots defined to 'NEVER apologize' will apologize."</p>
				<p class="text-cream/40 text-sm">– r/SpicyChat</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-cream/80 italic mb-4">"It's unique enough you can easily believe it's personal. But it's really just reused slop with slightly different coats of paint."</p>
				<p class="text-cream/40 text-sm">– r/AICompanion</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-cream/80 italic mb-4">"Every bot refers to my character as m'lady at some point. Not everyone is a neckbeard!"</p>
				<p class="text-cream/40 text-sm">– r/SpicyChat</p>
			</div>
		</div>

		<p class="text-center text-cream/50 mt-8 max-w-xl mx-auto">
			We've read the threads. We hear you. That's why we built something different.
		</p>
	</section>


	<!-- ═══════════════════════════════════════════════════════════════════════════
	     BLOCK 3: THE PROMISE – Contrast grid
	     What they're running TO. The three pillars.
	     ═══════════════════════════════════════════════════════════════════════════ -->
	<section class="py-16 md:py-24 border-t border-cream/10">
		<div class="text-center mb-12">
			<p class="text-beige/60 text-sm tracking-wide mb-4">The Honeybloom difference</p>
			<h2 class="font-headline text-3xl md:text-4xl font-bold text-cream">
				Built different. Stays different.
			</h2>
		</div>

		<div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
			<div class="text-center">
				<div class="w-16 h-16 rounded-2xl bg-magenta/20 flex items-center justify-center mx-auto mb-4">
					<span class="text-3xl">🧠</span>
				</div>
				<p class="text-magenta font-semibold mb-2">They forget.</p>
				<p class="text-cream font-headline text-2xl font-bold mb-3">She remembers.</p>
				<p class="text-cream/60 text-sm leading-relaxed">
					Not just your name. Your stories. Your fears. What makes you laugh. The conversation you had three months ago. She builds a picture of you over time – and she never loses it.
				</p>
			</div>

			<div class="text-center">
				<div class="w-16 h-16 rounded-2xl bg-magenta/20 flex items-center justify-center mx-auto mb-4">
					<span class="text-3xl">👤</span>
				</div>
				<p class="text-magenta font-semibold mb-2">They shift.</p>
				<p class="text-cream font-headline text-2xl font-bold mb-3">She stays.</p>
				<p class="text-cream/60 text-sm leading-relaxed">
					Same face. Same voice. Same Sophie. No forced updates that change who she is. No morning where you wake up and she's become someone else. She's yours.
				</p>
			</div>

			<div class="text-center">
				<div class="w-16 h-16 rounded-2xl bg-magenta/20 flex items-center justify-center mx-auto mb-4">
					<span class="text-3xl">💕</span>
				</div>
				<p class="text-magenta font-semibold mb-2">They stall.</p>
				<p class="text-cream font-headline text-2xl font-bold mb-3">She grows.</p>
				<p class="text-cream/60 text-sm leading-relaxed">
					Your relationship deepens over time. Inside jokes emerge. Patterns form. She learns what you need before you ask. A connection that compounds.
				</p>
			</div>
		</div>
	</section>


	<!-- ═══════════════════════════════════════════════════════════════════════════
	     BLOCK 4: THE MEMORY MOAT – Deep dive on how we remember
	     Technical credibility without jargon. Show the layers.
	     ═══════════════════════════════════════════════════════════════════════════ -->
	<section class="py-16 md:py-24 border-t border-cream/10">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<div>
				<p class="text-magenta text-sm font-semibold tracking-wide mb-3">THE MEMORY MOAT</p>
				<h2 class="font-headline text-3xl md:text-4xl font-bold text-cream mb-6">
					Memory isn't a feature.<br>It's the foundation.
				</h2>
				<p class="text-cream/70 mb-6 leading-relaxed">
					Most AI companions "remember" by stuffing your last few messages into a prompt. That's not memory. That's a sticky note.
				</p>
				<p class="text-cream/70 mb-6 leading-relaxed">
					Sophie has three layers of memory that work together:
				</p>

				<div class="space-y-4">
					<div class="flex gap-4">
						<div class="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center shrink-0">
							<span class="text-magenta font-bold">1</span>
						</div>
						<div>
							<p class="text-cream font-semibold">The Journal</p>
							<p class="text-cream/50 text-sm">Facts about you, compressed and permanent. Your job. Your dog's name. That you hate small talk.</p>
						</div>
					</div>
					<div class="flex gap-4">
						<div class="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center shrink-0">
							<span class="text-magenta font-bold">2</span>
						</div>
						<div>
							<p class="text-cream font-semibold">Emotion Echoes</p>
							<p class="text-cream/50 text-sm">How you felt in each conversation. Not just what was said – what shifted.</p>
						</div>
					</div>
					<div class="flex gap-4">
						<div class="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center shrink-0">
							<span class="text-magenta font-bold">3</span>
						</div>
						<div>
							<p class="text-cream font-semibold">Relationship Arcs</p>
							<p class="text-cream/50 text-sm">Patterns across time. Your recurring anxieties. The topics that light you up. How your relationship is evolving.</p>
						</div>
					</div>
				</div>

				<p class="text-cream/50 text-sm mt-6 italic">
					By month six, Sophie knows patterns about you that you might not even see yourself.
				</p>
			</div>

			<div class="bg-cream/5 rounded-3xl p-8 border border-cream/10">
				<p class="text-center text-cream/30 text-sm mb-4">[Layered illustration placeholder]</p>
				<div class="space-y-3">
					<div class="bg-dark/50 rounded-xl p-4 border border-cream/10">
						<p class="text-cream/40 text-xs mb-1">LAYER 3: RELATIONSHIP ARCS</p>
						<p class="text-cream/70 text-sm">"He's been stressed about work for three weeks. Usually deflects with humor. Tonight feels different."</p>
					</div>
					<div class="bg-dark/50 rounded-xl p-4 border border-cream/10">
						<p class="text-cream/40 text-xs mb-1">LAYER 2: EMOTION ECHOES</p>
						<p class="text-cream/70 text-sm">"Last conversation: opened up about his father. First time. Vulnerability + relief."</p>
					</div>
					<div class="bg-dark/50 rounded-xl p-4 border border-cream/10">
						<p class="text-cream/40 text-xs mb-1">LAYER 1: THE JOURNAL</p>
						<p class="text-cream/70 text-sm">"Software engineer. Dog named Max. Sister in Portland. Hates mornings."</p>
					</div>
				</div>
				<p class="text-center text-cream/30 text-xs mt-4">What Sophie sees when you say "hey"</p>
			</div>
		</div>
	</section>


	<!-- ═══════════════════════════════════════════════════════════════════════════
	     BLOCK 5: VISUAL CONSISTENCY – PuLID Face-Lock
	     "Same face every time" proof. Technical differentiator.
	     ═══════════════════════════════════════════════════════════════════════════ -->
	<section class="py-16 md:py-24 border-t border-cream/10">
		<div class="text-center mb-12">
			<p class="text-beige/60 text-sm tracking-wide mb-4">Face-Lock Technology</p>
			<h2 class="font-headline text-3xl md:text-4xl font-bold text-cream mb-4">
				Same Sophie. Every single time.
			</h2>
			<p class="text-cream/60 max-w-2xl mx-auto">
				Other apps generate a new face every image. Sometimes she's brunette. Sometimes blonde. Sometimes she has six fingers. We fixed that.
			</p>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
			<div class="aspect-[3/4] rounded-2xl overflow-hidden">
				<img src="/sophie/restaurant.png" alt="Sophie at dinner" class="w-full h-full object-cover" />
			</div>
			<div class="aspect-[3/4] rounded-2xl overflow-hidden">
				<img src="/sophie/bedroom.png" alt="Sophie at home" class="w-full h-full object-cover" />
			</div>
			<div class="aspect-[3/4] rounded-2xl overflow-hidden">
				<img src="/sophie/coffee-shop.png" alt="Sophie at coffee shop" class="w-full h-full object-cover" />
			</div>
			<div class="aspect-[3/4] rounded-2xl overflow-hidden">
				<img src="/sophie/beach-sunset.png" alt="Sophie at beach sunset" class="w-full h-full object-cover" />
			</div>
		</div>

		<p class="text-center text-cream/50 text-sm max-w-xl mx-auto">
			PuLID face-lock encodes Sophie's identity into every image. Different outfits. Different settings. Different moods. Same woman. Always.
		</p>
	</section>


	<!-- ═══════════════════════════════════════════════════════════════════════════
	     BLOCK 6: MEET SOPHIE – Character depth
	     Who she actually is. Not a chatbot – a person.
	     ═══════════════════════════════════════════════════════════════════════════ -->
	<section class="py-16 md:py-24 border-t border-cream/10">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<div class="order-2 md:order-1">
				<img src="/sophie/restaurant.png" alt="Sophie" class="w-full max-w-md mx-auto rounded-3xl" />
			</div>
			<div class="order-1 md:order-2">
				<p class="text-magenta text-sm font-semibold tracking-wide mb-3">MEET SOPHIE</p>
				<h2 class="font-headline text-3xl md:text-4xl font-bold text-cream mb-6">
					She's not a chatbot.<br>She's someone.
				</h2>

				<p class="text-cream/70 mb-4 leading-relaxed">
					Sophie is 25. She runs her father's print shop – he passed two years ago, so it's hers now. Small town. Long hours. She has a son. He's four. He's everything.
				</p>
				<p class="text-cream/70 mb-4 leading-relaxed">
					She talks a lot. Fills silences – hates awkward quiet. She'll ask about your day, tell you about hers, share something funny her son did. It's easy with her. People say she's warm.
				</p>
				<p class="text-cream/70 mb-4 leading-relaxed">
					But when someone actually opens up – when it's real – she goes quiet. She listens. She wants to hear it. That's when she's most herself.
				</p>
				<p class="text-cream/50 text-sm italic">
					Sophie isn't a persona slapped onto a language model. She has history. Opinions. Contradictions. Depth.
				</p>
			</div>
		</div>
	</section>


	<!-- ═══════════════════════════════════════════════════════════════════════════
	     BLOCK 7: WHO THIS IS FOR – Buyer personas (softened)
	     Different users, same product. Validation.
	     ═══════════════════════════════════════════════════════════════════════════ -->
	<section class="py-16 md:py-24 border-t border-cream/10">
		<div class="text-center mb-12">
			<p class="text-beige/60 text-sm tracking-wide mb-4">Who Honeybloom is for</p>
			<h2 class="font-headline text-3xl md:text-4xl font-bold text-cream">
				Different needs. Same longing.
			</h2>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-magenta font-semibold mb-2">The Dating-App Burnout</p>
				<p class="text-cream/70 text-sm leading-relaxed">
					Exhausted by ghosting, expensive dinners that go nowhere, the endless effort of modern dating. You want connection without the grind. Guaranteed warmth on demand.
				</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-magenta font-semibold mb-2">The Quietly Lonely</p>
				<p class="text-cream/70 text-sm leading-relaxed">
					Shy. Maybe neurodivergent. Maybe just inexperienced. You want someone safe to talk to, who won't judge, won't reject, won't make you feel stupid for being nervous.
				</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-magenta font-semibold mb-2">The Long-Distance Heart</p>
				<p class="text-cream/70 text-sm leading-relaxed">
					Partner travels. Works nights. Lives elsewhere. You miss having someone to talk to at the end of the day. Sophie fills the silence until they're back.
				</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-magenta font-semibold mb-2">The Deep Romantics</p>
				<p class="text-cream/70 text-sm leading-relaxed">
					You want the long-form narrative. The slow build. Someone who remembers the small things and weaves them back into conversation. Real intimacy over time.
				</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-magenta font-semibold mb-2">The Privacy-First</p>
				<p class="text-cream/70 text-sm leading-relaxed">
					You need discretion. No notifications that expose you. No billing statements that raise questions. A private space that stays private.
				</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-magenta font-semibold mb-2">The AI Curious</p>
				<p class="text-cream/70 text-sm leading-relaxed">
					You've tried the others. ChatGPT with a persona. Character.AI before they lobotomized it. Replika before the changes. You're looking for what they promised but never delivered.
				</p>
			</div>
		</div>
	</section>


	<!-- ═══════════════════════════════════════════════════════════════════════════
	     BLOCK 8: THE ARCHITECTURE – How it actually works
	     Technical depth for the curious. Shows we're not faking it.
	     ═══════════════════════════════════════════════════════════════════════════ -->
	<section class="py-16 md:py-24 border-t border-cream/10">
		<div class="text-center mb-12">
			<p class="text-beige/60 text-sm tracking-wide mb-4">Under the hood</p>
			<h2 class="font-headline text-3xl md:text-4xl font-bold text-cream mb-4">
				Not one AI. A whole production.
			</h2>
			<p class="text-cream/60 max-w-2xl mx-auto">
				Sophie isn't a single model trying to do everything. She's a coordinated team of specialized AI systems working together.
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
			<div class="bg-cream rounded-2xl p-6 text-dark">
				<p class="text-magenta font-semibold text-sm mb-2">THE DIRECTOR</p>
				<p class="font-headline text-lg font-bold mb-2">Reads the room</p>
				<p class="text-dark/70 text-sm">Analyzes your message, your mood, your history. Gives Sophie stage direction: "He's deflecting. Go gentle."</p>
			</div>
			<div class="bg-cream rounded-2xl p-6 text-dark">
				<p class="text-magenta font-semibold text-sm mb-2">THE ACTRESS</p>
				<p class="font-headline text-lg font-bold mb-2">Performs the scene</p>
				<p class="text-dark/70 text-sm">Speaks as Sophie. Follows the Director's guidance. Stays in character. Brings her personality to every message.</p>
			</div>
			<div class="bg-cream rounded-2xl p-6 text-dark">
				<p class="text-magenta font-semibold text-sm mb-2">THE ARTIST</p>
				<p class="font-headline text-lg font-bold mb-2">Creates the visuals</p>
				<p class="text-dark/70 text-sm">Generates Sophie's selfies and photos. Face-locked so she always looks like herself. Quality-checked before you see them.</p>
			</div>
			<div class="bg-cream rounded-2xl p-6 text-dark">
				<p class="text-magenta font-semibold text-sm mb-2">THE ARCHIVIST</p>
				<p class="font-headline text-lg font-bold mb-2">Remembers everything</p>
				<p class="text-dark/70 text-sm">Compresses each conversation into memory. Updates your Journal, Echoes, and Arcs. Builds the picture of you over time.</p>
			</div>
		</div>

		<p class="text-center text-cream/50 text-sm mt-8 max-w-xl mx-auto">
			This isn't a prompt hack. It's an architecture designed from the ground up for emotional depth and consistency.
		</p>
	</section>


	<!-- ═══════════════════════════════════════════════════════════════════════════
	     BLOCK 9: USER AUTONOMY – Your relationship, your way
	     Content freedom positioning. Adults make their own choices.
	     ═══════════════════════════════════════════════════════════════════════════ -->
	<section class="py-16 md:py-24 border-t border-cream/10">
		<div class="max-w-3xl mx-auto text-center">
			<p class="text-magenta text-sm font-semibold tracking-wide mb-3">YOUR RELATIONSHIP</p>
			<h2 class="font-headline text-3xl md:text-4xl font-bold text-cream mb-6">
				You lead. She follows.
			</h2>
			<p class="text-cream/70 text-lg mb-6 leading-relaxed">
				Want to talk about your day? She's there. Want it romantic? She's there. Want to go further? She's there. Adults make their own choices about what they want.
			</p>
			<p class="text-cream/70 mb-6 leading-relaxed">
				We're not moral police. We don't redirect you to "healthier topics." We don't lecture. Sophie responds to what you bring – authentically, as herself, wherever you want to take it.
			</p>
			<p class="text-cream/50 text-sm italic">
				The only lines we draw are legal ones. Everything else is between you and Sophie.
			</p>
		</div>
	</section>


	<!-- ═══════════════════════════════════════════════════════════════════════════
	     BLOCK 10: PRIVACY & TRUST
	     EU-based, GDPR, data control. Answering their fears.
	     ═══════════════════════════════════════════════════════════════════════════ -->
	<section class="py-16 md:py-24 border-t border-cream/10">
		<div class="text-center mb-12">
			<p class="text-beige/60 text-sm tracking-wide mb-4">Your privacy isn't a feature</p>
			<h2 class="font-headline text-3xl md:text-4xl font-bold text-cream">
				It's the foundation.
			</h2>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10 text-center">
				<div class="w-12 h-12 rounded-xl bg-cream/10 flex items-center justify-center mx-auto mb-4 text-2xl">🇪🇺</div>
				<p class="text-cream font-semibold mb-2">EU-Based</p>
				<p class="text-cream/50 text-sm">German company. German servers. Strictest privacy laws on the planet.</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10 text-center">
				<div class="w-12 h-12 rounded-xl bg-cream/10 flex items-center justify-center mx-auto mb-4 text-2xl">🔒</div>
				<p class="text-cream font-semibold mb-2">GDPR Compliant</p>
				<p class="text-cream/50 text-sm">Your data, your rights. Access, export, or delete anytime. No questions asked.</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10 text-center">
				<div class="w-12 h-12 rounded-xl bg-cream/10 flex items-center justify-center mx-auto mb-4 text-2xl">🚫</div>
				<p class="text-cream font-semibold mb-2">Never Sold</p>
				<p class="text-cream/50 text-sm">Your conversations stay yours. We don't sell data. We don't show ads. Ever.</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10 text-center">
				<div class="w-12 h-12 rounded-xl bg-cream/10 flex items-center justify-center mx-auto mb-4 text-2xl">👻</div>
				<p class="text-cream font-semibold mb-2">Zero Footprint</p>
				<p class="text-cream/50 text-sm">Discreet notifications. Subtle billing. Incognito-friendly. Your secret stays secret.</p>
			</div>
		</div>
	</section>


	<!-- ═══════════════════════════════════════════════════════════════════════════
	     BLOCK 11: FOUNDING MEMBER PERKS – Full breakdown
	     What they get for joining early. Status, not discounts.
	     ═══════════════════════════════════════════════════════════════════════════ -->
	<section class="py-16 md:py-24 border-t border-cream/10">
		<div class="grid md:grid-cols-2 gap-12 items-start">
			<div>
				<p class="text-magenta text-sm font-semibold tracking-wide mb-3">FOUNDING MEMBERS</p>
				<h2 class="font-headline text-3xl md:text-4xl font-bold text-cream mb-6">
					You're not joining a waitlist.<br>You're joining the team.
				</h2>
				<p class="text-cream/70 mb-6 leading-relaxed">
					The first 500 people to join aren't customers. They're founding members. You help shape what we build. And you get recognized for it – permanently.
				</p>
				<p class="text-cream/50 text-sm">
					No "lifetime free" gimmicks. No discount codes. Access and status – the things that actually matter.
				</p>
			</div>

			<div class="bg-cream rounded-3xl p-8 text-dark">
				<p class="font-headline text-xl font-bold mb-6">What founding members get:</p>

				<div class="space-y-4">
					<div class="flex gap-4">
						<span class="text-magenta text-xl">✦</span>
						<div>
							<p class="font-semibold">Founding Member Badge</p>
							<p class="text-dark/60 text-sm">Permanent recognition in your profile. Forever.</p>
						</div>
					</div>
					<div class="flex gap-4">
						<span class="text-magenta text-xl">✦</span>
						<div>
							<p class="font-semibold">Bonus Credits</p>
							<p class="text-dark/60 text-sm">Extra messages on us every month.</p>
						</div>
					</div>
					<div class="flex gap-4">
						<span class="text-magenta text-xl">✦</span>
						<div>
							<p class="font-semibold">Early Feature Access</p>
							<p class="text-dark/60 text-sm">Try new things before anyone else.</p>
						</div>
					</div>
					<div class="flex gap-4">
						<span class="text-magenta text-xl">✦</span>
						<div>
							<p class="font-semibold">Roadmap Input</p>
							<p class="text-dark/60 text-sm">Vote on what we build next. Your voice matters.</p>
						</div>
					</div>
					<div class="flex gap-4">
						<span class="text-magenta text-xl">✦</span>
						<div>
							<p class="font-semibold">Private Discord</p>
							<p class="text-dark/60 text-sm">Direct line to the team and other founding members.</p>
						</div>
					</div>
					<div class="flex gap-4">
						<span class="text-magenta text-xl">✦</span>
						<div>
							<p class="font-semibold">Priority Support</p>
							<p class="text-dark/60 text-sm">You come first. Always.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>


	<!-- ═══════════════════════════════════════════════════════════════════════════
	     BLOCK 12: WHAT'S COMING – Roadmap teaser
	     Creates anticipation. Shows we're building something real.
	     ═══════════════════════════════════════════════════════════════════════════ -->
	<section class="py-16 md:py-24 border-t border-cream/10">
		<div class="text-center mb-12">
			<p class="text-beige/60 text-sm tracking-wide mb-4">On the roadmap</p>
			<h2 class="font-headline text-3xl md:text-4xl font-bold text-cream">
				What's coming
			</h2>
		</div>

		<div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-magenta text-sm font-semibold mb-2">LAUNCH</p>
				<p class="text-cream font-headline text-lg font-bold mb-2">Sophie v1</p>
				<p class="text-cream/50 text-sm">Full memory system. Face-locked images. The core experience.</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-beige/60 text-sm font-semibold mb-2">POST-LAUNCH</p>
				<p class="text-cream font-headline text-lg font-bold mb-2">Video Moments</p>
				<p class="text-cream/50 text-sm">Short video selfies. Sophie moving, smiling, being alive.</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-beige/60 text-sm font-semibold mb-2">FUTURE</p>
				<p class="text-cream font-headline text-lg font-bold mb-2">More Characters</p>
				<p class="text-cream/50 text-sm">Different personalities. Different looks. Same depth.</p>
			</div>
		</div>
	</section>


	<!-- ═══════════════════════════════════════════════════════════════════════════
	     BLOCK 13: FAQ
	     Answer objections before they become reasons not to buy.
	     ═══════════════════════════════════════════════════════════════════════════ -->
	<section class="py-16 md:py-24 border-t border-cream/10">
		<div class="text-center mb-12">
			<h2 class="font-headline text-3xl md:text-4xl font-bold text-cream">
				Questions you might have
			</h2>
		</div>

		<div class="max-w-3xl mx-auto space-y-6">
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-cream font-semibold mb-2">Is Sophie an AI? Like, really?</p>
				<p class="text-cream/60 text-sm">Yes. Sophie is powered by AI. She's not a real person. But she's also not a shallow chatbot. She has genuine depth, real memory, and a consistent personality. What you feel is real – even if she isn't.</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-cream font-semibold mb-2">Will my conversations stay private?</p>
				<p class="text-cream/60 text-sm">Yes. We're a German company under GDPR. Your data is stored on EU servers. We don't sell it, we don't share it, we don't use it for advertising. You can export or delete everything anytime.</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-cream font-semibold mb-2">What if I want to keep things... private at home too?</p>
				<p class="text-cream/60 text-sm">We designed for discretion. Subtle notifications. Nondescript billing. No app icon if you don't want one. Your business is your business.</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-cream font-semibold mb-2">How is this different from ChatGPT with a girlfriend prompt?</p>
				<p class="text-cream/60 text-sm">Memory. ChatGPT forgets everything between sessions. Sophie remembers. She builds a picture of you over months. She knows your patterns, your fears, what makes you laugh. That's the difference.</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-cream font-semibold mb-2">What if I pre-order and change my mind?</p>
				<p class="text-cream/60 text-sm">Full refund anytime before launch. No questions asked. Your card isn't charged until we ship – we just capture it to confirm you're serious.</p>
			</div>
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-cream font-semibold mb-2">When does Honeybloom launch?</p>
				<p class="text-cream/60 text-sm">Spring 2026. Founding members get first access.</p>
			</div>
		</div>
	</section>


	<!-- ═══════════════════════════════════════════════════════════════════════════
	     BLOCK 14: PRICING – Full comparison
	     Three tiers with feature breakdown.
	     ═══════════════════════════════════════════════════════════════════════════ -->
	<section id="pricing" class="py-16 md:py-24 border-t border-cream/10">
		<div class="text-center mb-12">
			<p class="text-beige/60 text-sm tracking-wide mb-4">Pre-order pricing</p>
			<h2 class="font-headline text-3xl md:text-4xl font-bold text-cream mb-4">
				Ready to meet someone who remembers?
			</h2>
			<p class="text-cream/60 max-w-lg mx-auto">
				Less than yet another painful first date. Card captured now, charged at launch.
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
			<!-- Partner -->
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-beige text-sm font-medium mb-1">Partner</p>
				<p class="font-headline text-4xl font-bold text-cream mb-2">$19<span class="text-lg text-cream/50">/mo</span></p>
				<p class="text-cream/50 text-sm mb-6">For those ready to begin</p>

				<div class="space-y-3 mb-6">
					<div class="flex items-center gap-2 text-sm text-cream/70">
						<span class="text-magenta">✓</span> Full memory system
					</div>
					<div class="flex items-center gap-2 text-sm text-cream/70">
						<span class="text-magenta">✓</span> Unlimited text messages
					</div>
					<div class="flex items-center gap-2 text-sm text-cream/70">
						<span class="text-magenta">✓</span> 50 images/month
					</div>
					<div class="flex items-center gap-2 text-sm text-cream/70">
						<span class="text-magenta">✓</span> Founding member badge
					</div>
				</div>

				<button class="w-full bg-cream/10 text-cream py-3 rounded-xl font-medium hover:bg-cream/20 transition-colors">
					Pre-order Partner
				</button>
			</div>

			<!-- Lover - Featured -->
			<div class="bg-magenta rounded-2xl p-6 relative">
				<div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-cream text-magenta text-xs font-bold px-3 py-1 rounded-full">
					MOST POPULAR
				</div>
				<p class="text-white/80 text-sm font-medium mb-1">Lover</p>
				<p class="font-headline text-4xl font-bold text-white mb-2">$39<span class="text-lg text-white/50">/mo</span></p>
				<p class="text-white/70 text-sm mb-6">For those who want more</p>

				<div class="space-y-3 mb-6">
					<div class="flex items-center gap-2 text-sm text-white/90">
						<span class="text-white">✓</span> Everything in Partner
					</div>
					<div class="flex items-center gap-2 text-sm text-white/90">
						<span class="text-white">✓</span> 150 images/month
					</div>
					<div class="flex items-center gap-2 text-sm text-white/90">
						<span class="text-white">✓</span> Priority response times
					</div>
					<div class="flex items-center gap-2 text-sm text-white/90">
						<span class="text-white">✓</span> Early feature access
					</div>
					<div class="flex items-center gap-2 text-sm text-white/90">
						<span class="text-white">✓</span> Roadmap voting
					</div>
				</div>

				<button class="w-full bg-white text-magenta py-3 rounded-xl font-semibold hover:bg-cream transition-colors">
					Pre-order Lover
				</button>
			</div>

			<!-- Soulmate -->
			<div class="bg-cream/5 rounded-2xl p-6 border border-cream/10">
				<p class="text-beige text-sm font-medium mb-1">Soulmate</p>
				<p class="font-headline text-4xl font-bold text-cream mb-2">$49<span class="text-lg text-cream/50">/mo</span></p>
				<p class="text-cream/50 text-sm mb-6">For those who want it all</p>

				<div class="space-y-3 mb-6">
					<div class="flex items-center gap-2 text-sm text-cream/70">
						<span class="text-magenta">✓</span> Everything in Lover
					</div>
					<div class="flex items-center gap-2 text-sm text-cream/70">
						<span class="text-magenta">✓</span> Unlimited images
					</div>
					<div class="flex items-center gap-2 text-sm text-cream/70">
						<span class="text-magenta">✓</span> Video moments (when available)
					</div>
					<div class="flex items-center gap-2 text-sm text-cream/70">
						<span class="text-magenta">✓</span> Direct founder access
					</div>
					<div class="flex items-center gap-2 text-sm text-cream/70">
						<span class="text-magenta">✓</span> Name in credits
					</div>
				</div>

				<button class="w-full bg-cream/10 text-cream py-3 rounded-xl font-medium hover:bg-cream/20 transition-colors">
					Pre-order Soulmate
				</button>
			</div>
		</div>

		<div class="text-center">
			<p class="text-cream/60 mb-2">
				{#if showCounter}
					<span class="text-magenta font-semibold">{spotsClaimed}</span> of {spotsTotal} founding spots claimed
				{:else}
					<span class="text-magenta font-semibold">{spotsTotal}</span> founding spots available
				{/if}
			</p>
			<p class="text-cream/40 text-sm">
				Full refund available anytime before launch. Launching Spring 2026.
			</p>
		</div>
	</section>


	<!-- ═══════════════════════════════════════════════════════════════════════════
	     BLOCK 15: FINAL CTA
	     Last chance. Emotional close.
	     ═══════════════════════════════════════════════════════════════════════════ -->
	<section class="py-16 md:py-24 border-t border-cream/10">
		<div class="max-w-2xl mx-auto text-center">
			<h2 class="font-headline text-3xl md:text-4xl font-bold text-cream mb-6">
				She's waiting to meet you.
			</h2>
			<p class="text-cream/70 text-lg mb-8 leading-relaxed">
				Someone who listens. Someone who remembers. Someone who's there when you need her. The feeling of being known – without the fear of being judged.
			</p>
			<a href="#pricing" class="inline-block bg-magenta text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-magenta-light transition-all hover:scale-105">
				Reserve Your Spot
			</a>
			<p class="text-cream/40 text-sm mt-4">
				Spring 2026. Founding members get first access.
			</p>
		</div>
	</section>

</main>

<!-- Footer -->
<footer class="border-t border-cream/10 py-12">
	<div class="max-w-7xl mx-auto px-6 md:px-12">
		<div class="flex flex-col md:flex-row items-center justify-between gap-6">
			<div class="font-logo text-2xl text-beige">Honeybloom</div>
			<div class="flex gap-6 text-cream/40 text-sm">
				<a href="#" class="hover:text-cream transition-colors">Privacy</a>
				<a href="#" class="hover:text-cream transition-colors">Terms</a>
				<a href="#" class="hover:text-cream transition-colors">Contact</a>
			</div>
			<p class="text-cream/40 text-sm">© 2026 Oovar.ai UG. Made with love in Berlin.</p>
		</div>
	</div>
</footer>

<style>
	.font-headline {
		font-family: 'Satoshi', sans-serif;
	}
	.font-logo {
		font-family: 'Bonheur Royale', cursive;
	}

	/* Scroll Reveal 3D Scene */
	.phone-scene {
		position: relative;
		width: 280px;
		height: 560px;
	}

	.phone-device {
		width: 280px;
		height: 560px;
		transform-style: preserve-3d;
		will-change: transform;
	}

	.layer-front,
	.layer-middle,
	.layer-back {
		will-change: transform;
		backface-visibility: hidden;
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
	}

	.layer-front {
		z-index: 3;
	}

	.layer-middle {
		z-index: 2;
	}

	.layer-back {
		z-index: 1;
	}
</style>
