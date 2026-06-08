<script>
	import { ArrowRight, Check, GraduationCap, HeartPulse, Baby } from '@lucide/svelte';
	import PageHeader from '$lib/components/ui/page-header.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { reveal } from '$lib/actions/reveal.js';
	import { site, initiatives } from '$lib/data/site.js';

	const icons = {
		'heart-pulse': HeartPulse,
		baby: Baby,
		'graduation-cap': GraduationCap
	};
</script>

<svelte:head>
	<title>Our Initiatives — {site.name}</title>
	<meta name="description" content="Explore Vijay Anand Foundation's programs across healthcare, childcare, and education." />
</svelte:head>

<PageHeader
	title="Programs that compound"
	subtitle="We focus our funding on three interconnected areas — the foundations every thriving community is built on."
/>

<div class="divide-y divide-border">
	{#each initiatives as item, i (item.slug)}
		{@const Icon = icons[item.icon]}
		<section class="py-14 sm:py-20">
			<div class="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
				<div use:reveal class={`reveal ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
					<img
						src={item.image}
						alt={item.title}
						class="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
						loading="lazy"
					/>
				</div>
				<div use:reveal class="reveal flex flex-col gap-5">
					<span class="grid size-12 place-items-center rounded-full bg-secondary text-primary">
						<Icon class="size-6" />
					</span>
					<h2 class="text-3xl leading-tight sm:text-4xl">{item.title}</h2>
					<p class="text-muted-foreground">{item.summary}</p>
					<ul class="flex flex-col gap-3">
						{#each item.points as point (point)}
							<li class="flex items-center gap-3 text-sm">
								<span class="grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
									<Check class="size-3.5" />
								</span>
								{point}
							</li>
						{/each}
					</ul>
					<div>
						<Button href="/contact" variant="outline">Support this program <ArrowRight class="size-4" /></Button>
					</div>
				</div>
			</div>
		</section>
	{/each}
</div>
