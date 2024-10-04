<script lang="ts">
	import WebchatiFrame from '$lib/components/WebchatiFrame.svelte';
	import cardsData from '$lib/cardsData';
	import AICard from '$lib/components/AICard.svelte';
	import chips from '$lib/chips';
	import { iFrameSrc } from '$lib/store/iFrameSrc';

	let selectedChip: string = 'All';

	let cardsToRender = cardsData;

	$: if (selectedChip == 'All') {
		cardsToRender = cardsData;
	} else {
		cardsToRender = cardsData.filter((card) => card.category === selectedChip);
	}

	$: isIFrameActive = $iFrameSrc === '' ? false : true;
</script>

<svelte:head>
	<title>Explore Syrow Care</title>
</svelte:head>

<section class="max-w-7xl mx-auto p-10 transition-all duration-300 ease-in-out">
	<header class="flex flex-col gap-10 text-center mx-auto mb-20">
		<p class="text-4xl">Revolutionize Customer Engagement with</p>
		<h1 class="md:text-9xl text-7xl font-bold">Syrow Care AI Bots</h1>
		<article class="flex flex-col gap-5 text-2xl font-medium">
			<p>
				Explore our intelligent, customisable Syrow Care AI Bots tailored to elevate your customer
				experience
			</p>
			<p>
				Our Syrow Care AI Bots are designed to streamline operations, enhance customer service, and
				boost efficiency across industries. Whether it's fintech, e-commerce, education, or
				healthcare, we have a bot for you.
			</p>
		</article>
		<h1 class="font-bold md:text-5xl text-3xl">AI-Powered Solutions for Every Industry</h1>
	</header>
	<section class="text-center">
		<div>
			{#each chips as chip}
				<button
					class="p-1 px-3 m-1.5 {selectedChip === chip
						? 'bg-gradient-to-b from-purple-400 to-purple-600 text-white'
						: 'bg-gradient-to-b from-gray-400 to-gray-500 text-white'} bg-gray-400 text-white rounded-full"
					on:click={() => (selectedChip = chip)}>{chip}</button
				>
			{/each}
		</div>

		<div class="mt-10 grid max-sm:grid-cols-1 md:grid-cols-3 grid-cols-2 gap-x-5 gap-y-10">
			{#each cardsToRender as cardData}
				<div class="flex justify-center items-center text-start">
					<AICard {cardData} />
				</div>
			{/each}
		</div>
	</section>

	<div
		class="{isIFrameActive
			? 'flex flex-1 animate-reveal'
			: 'animate-goaway -z-50'} fixed bottom-10 right-10 w-[448px] h-[70vh] z-50"
	>
		<WebchatiFrame />
	</div>
</section>
