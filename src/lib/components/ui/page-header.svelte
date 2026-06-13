<script>
	import SectionCurve from '$lib/components/ui/section-curve.svelte';

	// `curveFill` should match the background of the section that follows this
	// header so the convex divider blends in. Defaults to card (white) to match
	// the homepage hero's wave.
	let {
		eyebrow = undefined,
		title,
		subtitle = undefined,
		curveFill = 'var(--card)'
	} = $props();
</script>

<section class="relative overflow-hidden bg-background pt-28 pb-16 text-foreground md:pt-36 md:pb-20">
	<div
		class="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-primary/15 blur-3xl"
	></div>
	<div
		class="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-accent/10 blur-3xl"
	></div>
	<div class="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
		<div class="flex max-w-2xl flex-col gap-4">
			{#if eyebrow}
				<span class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-primary uppercase"><span class="h-px w-6 bg-current opacity-50"></span>{eyebrow}</span>
			{/if}
			<h1 class="font-display text-4xl leading-[1.05] sm:text-5xl">{title}</h1>
			{#if subtitle}
				<p class="text-lg text-muted-foreground">{subtitle}</p>
			{/if}
		</div>
	</div>

	<SectionCurve fill={curveFill} />
</section>
