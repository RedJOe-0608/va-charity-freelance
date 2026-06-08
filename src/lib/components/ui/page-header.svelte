<script>
	import SectionCurve from '$lib/components/ui/section-curve.svelte';

	// `curveFill` should match the background of the section that follows this
	// header so the convex divider blends in (defaults to the page background).
	let {
		eyebrow = undefined,
		title,
		subtitle = undefined,
		curveFill = 'var(--background)'
	} = $props();
</script>

<section class="relative overflow-hidden bg-brand-deep pt-28 pb-16 text-brand-deep-foreground md:pt-36 md:pb-20">
	<div
		class="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-primary/30 blur-3xl"
	></div>
	<div
		class="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-accent/20 blur-3xl"
	></div>
	<div class="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
		<div class="flex max-w-2xl flex-col gap-4">
			{#if eyebrow}
				<span class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-primary-bright uppercase"><span class="h-px w-6 bg-current opacity-50"></span>{eyebrow}</span>
			{/if}
			<h1 class="font-display text-4xl leading-[1.05] sm:text-5xl">{title}</h1>
			{#if subtitle}
				<p class="text-lg text-brand-deep-foreground/70">{subtitle}</p>
			{/if}
		</div>
	</div>

	<SectionCurve fill={curveFill} />
</section>
