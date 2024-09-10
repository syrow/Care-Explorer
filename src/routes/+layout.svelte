<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<main class="min-h-screen text-slate-800">
	<Navbar />
	<slot />
</main>

<style>
	main {
		background-image: radial-gradient(circle, #ffffff, #f2f1ff, #e5e2ff, #d7d4ff, #c7c7ff);
	}
	/* main {
		background-image: linear-gradient(
			45deg,
			hsl(240deg 100% 20%) 1%,
			hsl(260deg 100% 23%) 43%,
			hsl(279deg 100% 27%) 50%,
			hsl(298deg 100% 30%) 51%,
			hsl(318deg 100% 33%) 51%,
			hsl(337deg 100% 37%) 49%,
			hsl(357deg 100% 40%) 49%,
			hsl(16deg 100% 43%) 50%,
			hsl(36deg 100% 47%) 57%,
			hsl(55deg 100% 50%) 99%
		);
	} */
</style>
