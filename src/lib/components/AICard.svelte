<script lang="ts">
	import { iFrameSrc } from '$lib/store/iFrameSrc';
	import type { CardsDataType } from './types/cardsDataType';

	export let cardData: CardsDataType = {};
	let color = cardData.color;

	const colors = {
		pink: ['#FF61D2', '#FE9090'],
		blue: ['#4158D0', '#C850C0'],
		purple: ['#8B5CF6', '#D946EF'],
		green: ['#10B981', '#34D399']
	};

	const buttonIcons = {
		plus: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>`,
		chevron: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>`
	};

	$: gradientStyle = `--gradient-start: ${colors[color][0]}; --gradient-end: ${colors[color][1]};`;
	$: buttonIcon = buttonIcons[cardData.buttonType];
</script>

<div
	class="w-96 h-96 rounded-3xl relative overflow-hidden shadow-2xl transition-all duration-300 ease-in-out"
	style={gradientStyle}
>
	<div
		class="absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-100"
	></div>
	<div class="absolute inset-0 bg-black opacity-10"></div>
	<div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-20"></div>

	<div class="relative h-full p-8 flex flex-col justify-between z-10">
		<div>
			<h2 class="text-white text-2xl font-bold leading-tight mb-2">
				{cardData.name}
			</h2>
			<div class="w-16 h-1 bg-white opacity-50 rounded-full"></div>
		</div>

		<div class="space-y-6">
			<div class="flex items-center space-x-3">
				<svg
					class="w-10 h-10 text-white opacity-90"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M13 10V3L4 14h7v7l9-11h-7z"
					></path>
				</svg>
				<p class="text-white text-3xl font-extrabold leading-tight">
					{cardData.type}
				</p>
			</div>
			<p class="text-white text-lg opacity-90 leading-relaxed">{cardData.description}</p>
		</div>

		<div class="self-end">
			<button
				class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:scale-105"
				on:click={() => {
					if (cardData.buttonType === 'chevron') {
						window.open('https://care.syrow.com', '_blank');
					} else {
						iFrameSrc.set(cardData.iframeSrc);
					}
				}}
			>
				<svg
					class="w-8 h-8 text-[var(--gradient-start)]"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					{@html buttonIcon}
				</svg>
			</button>
		</div>
	</div>

	<div class="absolute inset-0 border-2 border-white opacity-20 rounded-3xl"></div>

	<div
		class="absolute top-4 right-4 flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-3 py-1"
	>
		<div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
		<span class="text-white text-xs font-medium">Online</span>
	</div>
</div>
