<script lang="ts">
	import ExploreCard from '$lib/components/ExploreCard.svelte';
	import WebchatiFrame from '$lib/components/WebchatiFrame.svelte';
	import cardsData from '$lib/cardsData';
</script>

<div class="max-w-7xl mx-auto p-10">
	<h1 class="text-5xl font-bold">Explore Syrow Care</h1>
	<div class="mt-10 grid max-sm:grid-cols-1 md:grid-cols-3 grid-cols-2 gap-x-5 gap-y-10">
		{#each cardsData as cardData}
			<div class="flex justify-center items-center">
				<ExploreCard {cardData} />
			</div>
		{/each}
	</div>
	<div class="fixed bottom-10 right-10 w-[448px] h-[70vh] rounded-md overflow-hidden">
		<WebchatiFrame iframeData={{ src: 'https://syrow.com' }} />
	</div>
</div>
