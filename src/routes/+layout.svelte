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
		background-image: radial-gradient(
			circle,
			rgba(173, 216, 230, 0.8),
			rgba(221, 160, 221, 0.8),
			rgba(230, 230, 250, 0.8),
			rgba(216, 191, 216, 0.8),
			rgba(255, 182, 193, 0.8)
		);
		background-size: cover;
		background-blend-mode: lighten;
	}
</style>
