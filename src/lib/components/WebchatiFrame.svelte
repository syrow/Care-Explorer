<script lang="ts">
	export let iframeData: {
		src: string;
	};
	let iframeContainer: HTMLDivElement;
	const handleiFrameVisibility = () => {
		iframeContainer.style.display = iframeContainer.style.display === 'none' ? 'block' : 'none';
	};
</script>

<div class="w-full h-full" bind:this={iframeContainer}>
	<button on:click={handleiFrameVisibility}
		><svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
		</svg>
	</button>
	<iframe
		src={iframeData.src}
		frameborder="0"
		title="syrow_webchat_iframe"
		width="100%"
		height="100%"
	></iframe>
</div>
