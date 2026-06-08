<script>
	// A gentle convex divider for the bottom of a dark section: the dark band
	// bulges softly downward into the lighter section below. Render it as the
	// last child of a `relative` dark section and set `fill` to the background
	// color of whatever section follows.
	let { fill = 'var(--background)', height = '3.25rem' } = $props();
</script>

<svg
	class="pointer-events-none absolute inset-x-0 bottom-0 w-full"
	style="height: {height}; color: {fill};"
	viewBox="0 0 1440 52"
	preserveAspectRatio="none"
	aria-hidden="true"
>
	<path d="M0,0 Q720,104 1440,0 L1440,52 L0,52 Z" fill="currentColor" />
</svg>
