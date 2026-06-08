/**
 * Svelte action: fades + lifts an element into view on scroll.
 * Usage: <div class="reveal" use:reveal>…</div>
 */
export function reveal(node, options = {}) {
	const { threshold = 0.15, once = true } = options;

	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('is-visible');
		return {};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					if (once) observer.unobserve(node);
				} else if (!once) {
					node.classList.remove('is-visible');
				}
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
