<script lang="ts">
	export let cardData: {
		heading: string;
		content: string;
	};
</script>

<div
	class="flex flex-col justify-between items-start w-full bg-white bg-opacity-50 backdrop-blur-3xl rounded-xl border border-gray-50 h-60 p-1 max-w-64"
>
	<div class="p-2">
		<h1 class="text-2xl font-bold">{cardData.heading}</h1>
		<p class="text-sm">{cardData.content}</p>
	</div>
	<button
		class="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 w-full text-white rounded-md p-2 transition-all duration-100 ease-in-out"
		>Explore</button
	>
</div>
