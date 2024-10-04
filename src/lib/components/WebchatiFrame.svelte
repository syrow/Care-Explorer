<script lang="ts">
	import { iFrameSrc } from '$lib/store/iFrameSrc';

	const handleiFrameVisibility = () => iFrameSrc.set('');
</script>

<div class="w-full h-full flex flex-col justify-end items-end">
	<button
		on:click={handleiFrameVisibility}
		class="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 -translate-y-5"
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
	<div class="rounded-md overflow-hidden w-full h-full">
		<iframe src={$iFrameSrc} frameborder="0" title="syrow_webchat_iframe" width="100%" height="100%"
		></iframe>
	</div>
</div>
