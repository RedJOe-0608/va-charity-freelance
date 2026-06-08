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

<!-- Featured story -->
<section class="py-14 sm:py-20">
	<div class="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
		<div use:reveal class="reveal overflow-hidden rounded-2xl shadow-card">
			<img src={stories[0].image} alt={stories[0].name} class="aspect-[4/3] w-full object-cover" loading="lazy" />
		</div>
		<div use:reveal class="reveal flex flex-col gap-4">
			<span class="flex items-center gap-2 text-sm text-muted-foreground">
				<MapPin class="size-4 text-primary" />{stories[0].location}
			</span>
			<h2 class="text-3xl leading-tight sm:text-4xl">{stories[0].name}</h2>
			<p class="text-muted-foreground">{stories[0].excerpt}</p>
			<p class="text-muted-foreground">
				When a single scholarship became a teaching degree, the impact didn’t stop with one person —
				it multiplied across an entire generation of students who now have a teacher who understands
				exactly where they come from.
			</p>
			<div>
				<Button href="/contact" variant="outline">Help fund more stories <ArrowRight class="size-4" /></Button>
			</div>
		</div>
	</div>
</section>

<!-- Story grid -->
<section class="bg-muted/50 py-14 sm:py-20">
	<div class="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
		<div class="grid gap-6 md:grid-cols-3">
			{#each stories as story (story.slug)}
				<article use:reveal class="reveal flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-card">
					<div class="relative h-52 overflow-hidden">
						<img src={story.image} alt={story.name} class="size-full object-cover" loading="lazy" />
						<span class="absolute top-4 left-4 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
							{story.category}
						</span>
					</div>
					<div class="flex flex-1 flex-col gap-2 p-6">
						<span class="flex items-center gap-1.5 text-xs text-muted-foreground">
							<MapPin class="size-3.5" />{story.location}
						</span>
						<h3 class="text-xl">{story.name}</h3>
						<p class="text-sm text-muted-foreground">{story.excerpt}</p>
					</div>
				</article>
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
