<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/layout/navbar.svelte';
	import Footer from '$lib/components/layout/footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex min-h-screen flex-col">
	<Navbar />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
