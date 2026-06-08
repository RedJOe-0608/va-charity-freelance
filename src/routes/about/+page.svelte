<script>
	import { Users, Eye, Infinity as InfinityIcon } from '@lucide/svelte';
	import PageHeader from '$lib/components/ui/page-header.svelte';
	import SectionHeading from '$lib/components/ui/section-heading.svelte';
	import { reveal } from '$lib/actions/reveal.js';
	import { site, values, team, milestones, founderStory } from '$lib/data/site.js';

	const icons = { users: Users, eye: Eye, infinity: InfinityIcon };
</script>

<svelte:head>
	<title>About Us — {site.name}</title>
	<meta name="description" content="Learn about Vijay Anand Foundation's mission, values, and the team behind our work." />
</svelte:head>

<PageHeader
	title="The story behind it all"
	subtitle="From a childhood in New Delhi to a life of giving in Canada — the story of our founder, Anand, and the values that shaped the Vijay Anand Foundation."
/>

<!-- Founder's story — alternating left/right blocks -->
<section class="py-16 sm:py-24">
	<div class="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<span class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-primary uppercase"><span class="h-px w-6 bg-current opacity-50"></span>Our story</span>
			<h2 class="mt-4 text-3xl leading-tight sm:text-4xl">A lifetime in the making</h2>
		</div>

		<div class="flex flex-col gap-20 lg:gap-28">
			{#each founderStory as block, i (block.title)}
				<div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
					<!-- Image -->
					<div use:reveal class={`reveal ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
						<div class="relative overflow-hidden rounded-2xl shadow-card">
							<img
								src={block.image}
								alt={block.title}
								class="aspect-[4/3] w-full object-cover"
								loading="lazy"
							/>
							<span class="absolute top-4 left-4 rounded-full bg-card/90 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary shadow-soft backdrop-blur">
								{block.year}
							</span>
						</div>
					</div>

					<!-- Text -->
					<div use:reveal class="reveal flex flex-col gap-4">
						<span class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-primary uppercase"><span class="h-px w-6 bg-current opacity-50"></span>{block.year}</span>
						<h3 class="text-3xl leading-tight">{block.title}</h3>
						{#each block.body as paragraph (paragraph)}
							<p class="text-muted-foreground">{paragraph}</p>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Mission / Vision -->
<section class="bg-muted/50 py-16 sm:py-24">
	<div class="mx-auto grid max-w-6xl gap-6 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
		<div use:reveal class="reveal flex flex-col gap-3 rounded-2xl border border-border bg-card p-8 shadow-soft">
			<h3 class="text-2xl text-primary">Our mission</h3>
			<p class="text-muted-foreground">
				To partner with local communities to break the cycle of poverty — funding the schools,
				clinics, and people who make lasting change possible.
			</p>
		</div>
		<div use:reveal class="reveal flex flex-col gap-3 rounded-2xl border border-border bg-card p-8 shadow-soft">
			<h3 class="text-2xl text-primary">Our vision</h3>
			<p class="text-muted-foreground">
				A world where every community has the resources to educate its children, care for its sick,
				and shape its own future — on its own terms.
			</p>
		</div>
	</div>
</section>

<!-- Values -->
<section class="py-16 sm:py-24">
	<div class="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
		<SectionHeading eyebrow="What we believe" title="Values that guide our work" />
		<div class="mt-14 grid gap-6 md:grid-cols-3">
			{#each values as value (value.title)}
				{@const Icon = icons[value.icon]}
				<div use:reveal class="reveal flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 shadow-soft">
					<span class="grid size-12 place-items-center rounded-full bg-secondary text-primary">
						<Icon class="size-6" />
					</span>
					<h3 class="text-xl">{value.title}</h3>
					<p class="text-sm text-muted-foreground">{value.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Timeline -->
<section class="bg-brand-deep py-16 text-brand-deep-foreground sm:py-24">
	<div class="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
		<SectionHeading light eyebrow="Our journey" title="Milestones along the way" />
		<div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each milestones as m (m.year)}
				<div use:reveal class="reveal relative flex flex-col gap-2 border-t border-white/15 pt-6">
					<span class="font-display text-3xl font-semibold text-primary-bright">{m.year}</span>
					<h3 class="text-lg text-brand-deep-foreground">{m.title}</h3>
					<p class="text-sm text-brand-deep-foreground/70">{m.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Team -->
<section class="py-16 sm:py-24">
	<div class="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
		<SectionHeading eyebrow="Our people" title="Meet the team" subtitle="A small, dedicated group working alongside dozens of local partners." />
		<div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each team as member (member.name)}
				<div use:reveal class="reveal group flex flex-col gap-4 text-center">
					<div class="overflow-hidden rounded-2xl">
						<img
							src={member.image}
							alt={member.name}
							class="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
							loading="lazy"
						/>
					</div>
					<div>
						<h3 class="text-lg">{member.name}</h3>
						<p class="text-sm text-muted-foreground">{member.role}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
