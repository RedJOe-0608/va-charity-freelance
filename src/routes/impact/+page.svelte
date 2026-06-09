<script>
	import { ArrowRight, MapPin, Quote } from '@lucide/svelte';
	import PageHeader from '$lib/components/ui/page-header.svelte';
	import CountUp from '$lib/components/ui/count-up.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { reveal } from '$lib/actions/reveal.js';
	import { site, stories, stats, testimonials } from '$lib/data/site.js';
</script>

<svelte:head>
	<title>Impact Stories — {site.name}</title>
	<meta name="description" content="Real stories of change from the communities Vijay Anand Foundation supports." />
</svelte:head>

<PageHeader
	title="In their own words"
	subtitle="Numbers tell part of the story. These are the people behind them — the families, students, and neighbors your support reaches every day."
	curveFill="var(--card)"
/>

<!-- Stats recap -->
<section class="border-b border-border bg-card py-12">
	<div class="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 sm:px-6 lg:grid-cols-4 lg:px-8">
		{#each stats as stat (stat.label)}
			<div class="text-center">
				<p class="font-display text-4xl font-semibold text-primary">
					<CountUp value={stat.value} />
				</p>
				<p class="text-sm text-muted-foreground">{stat.label}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Stories — alternating left/right blocks -->
<section class="py-16 sm:py-24">
	<div class="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
		<div class="flex flex-col gap-20 lg:gap-28">
			{#each stories as story, i (story.slug)}
				<div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
					<!-- Image -->
					<div use:reveal class={`reveal ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
						<div class="relative overflow-hidden rounded-2xl shadow-card">
							<img src={story.image} alt={story.name} class="aspect-[4/3] w-full object-cover" loading="lazy" />
							<span class="absolute top-4 left-4 rounded-full bg-card/90 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary shadow-soft backdrop-blur">
								{story.category}
							</span>
						</div>
					</div>

					<!-- Text -->
					<div use:reveal class="reveal flex flex-col gap-4">
						<span class="flex items-center gap-2 text-sm text-muted-foreground">
							<MapPin class="size-4 text-primary" />{story.location}
						</span>
						<h2 class="text-3xl leading-tight sm:text-4xl">{story.name}</h2>
						<p class="text-muted-foreground">{story.excerpt}</p>
						<div>
							<Button href="/contact" variant="outline">Help fund more stories <ArrowRight class="size-4" /></Button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Testimonials -->
<section class="py-16 sm:py-24">
	<div class="mx-auto grid max-w-6xl gap-6 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
		{#each testimonials as t (t.name)}
			<figure use:reveal class="reveal flex flex-col gap-5 rounded-2xl border border-border bg-card p-8 shadow-soft">
				<Quote class="size-8 text-primary/30" />
				<blockquote class="text-lg leading-relaxed text-foreground">“{t.quote}”</blockquote>
				<figcaption class="mt-auto">
					<p class="font-semibold">{t.name}</p>
					<p class="text-sm text-muted-foreground">{t.role}</p>
				</figcaption>
			</figure>
		{/each}
	</div>
</section>
