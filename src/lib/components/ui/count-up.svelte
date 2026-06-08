<script>
	import { onMount } from 'svelte';

	// Animates a formatted stat from 0 to its target the first time it scrolls
	// into view. Parses values like "$14.6M", "52K+", "38" into prefix/number/suffix
	// so the surrounding symbols are preserved during the count.
	let { value, duration = 1600 } = $props();

	const match = String(value).match(/^(\D*)([\d.,]+)(.*)$/);
	const prefix = match?.[1] ?? '';
	const raw = (match?.[2] ?? '0').replace(/,/g, '');
	const suffix = match?.[3] ?? '';
	const target = parseFloat(raw) || 0;
	const decimals = raw.includes('.') ? raw.split('.')[1].length : 0;

	let display = $state(0);
	let el;

	function format(n) {
		return (
			prefix +
			n.toLocaleString('en-US', {
				minimumFractionDigits: decimals,
				maximumFractionDigits: decimals
			}) +
			suffix
		);
	}

	function run() {
		const start = performance.now();
		function tick(now) {
			const t = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
			display = target * eased;
			if (t < 1) requestAnimationFrame(tick);
			else display = target;
		}
		requestAnimationFrame(tick);
	}

	onMount(() => {
		const reduce =
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (reduce || typeof IntersectionObserver === 'undefined') {
			display = target;
			return;
		}

		let started = false;
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting && !started) {
						started = true;
						observer.unobserve(el);
						run();
					}
				}
			},
			{ threshold: 0.4 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<span bind:this={el} class="tabular-nums">{format(display)}</span>
