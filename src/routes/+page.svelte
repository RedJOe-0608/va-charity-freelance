<script>
	import {
		ArrowRight,
		GraduationCap,
		HeartPulse,
		Baby,
		Quote,
		ShieldCheck,
		Mail,
		MapPin
	} from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import SectionHeading from '$lib/components/ui/section-heading.svelte';
	import CountUp from '$lib/components/ui/count-up.svelte';
	import SectionCurve from '$lib/components/ui/section-curve.svelte';
	import { reveal } from '$lib/actions/reveal.js';
	import { site, stats, initiatives, stories, partners, testimonials } from '$lib/data/site.js';

	const icons = {
		'heart-pulse': HeartPulse,
		baby: Baby,
		'graduation-cap': GraduationCap
	};

	// Map a partner's focus area to a fallback icon when no brand mark is available.
	const kindIcons = {
		Education: GraduationCap,
		Childcare: Baby,
		Healthcare: HeartPulse
	};

	// Pull the partner's real brand mark (favicon) from the web by domain.
	const faviconFor = (domain) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
</script>

<svelte:head>
	<title>{site.name} — {site.tagline}</title>
	<meta name="description" content={site.mission} />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden bg-background text-foreground">
	<div class="pointer-events-none absolute -top-32 right-0 size-[28rem] rounded-full bg-primary/15 blur-3xl"></div>
	<div class="pointer-events-none absolute bottom-0 -left-24 size-96 rounded-full bg-accent/10 blur-3xl"></div>

	<div class="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-32 pb-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-40 lg:pb-28">
		<div class="flex flex-col gap-7">
			<span class="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold tracking-wide text-secondary-foreground">
				<span class="size-2 rounded-full bg-primary"></span>
				Empowering communities since 1995
			</span>
			<h1 class="font-display text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
				Small acts, <span class="text-primary">lasting</span> change.
			</h1>
			<p class="max-w-md text-lg text-muted-foreground">
				{site.mission}
			</p>
			<div class="flex flex-wrap gap-3">
				<Button href="/contact" size="lg">Contact Us <ArrowRight class="size-4" /></Button>
				<Button href="/about" variant="outline" size="lg">Learn our story</Button>
			</div>

			<div class="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
				<span class="flex items-center gap-2"><ShieldCheck class="size-4 text-primary" /> 100% transparent</span>
				<span class="flex items-center gap-2"><HeartPulse class="size-4 text-primary" /> 22K+ lives reached</span>
			</div>
		</div>

		<div class="relative">
			<div class="overflow-hidden rounded-2xl shadow-lift">
				<img
					src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1100&q=80"
					alt="Children smiling at a community school"
					class="aspect-[4/5] w-full object-cover"
					loading="eager"
				/>
			</div>
			<div class="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-card sm:block">
				<p class="font-display text-3xl font-semibold text-primary">$10M</p>
				<p class="text-sm text-muted-foreground">deployed to local partners</p>
			</div>
		</div>
	</div>

	<SectionCurve fill="var(--card)" />
</section>

<!-- Stats -->
<section class="bg-card">
	<div class="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-5 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
		{#each stats as stat (stat.label)}
			<div class="flex flex-col items-center gap-1 px-4 py-4 text-center">
				<span class="font-display text-4xl font-semibold text-primary sm:text-5xl lg:text-6xl">
					<CountUp value={stat.value} />
				</span>
				<span class="text-sm text-muted-foreground">{stat.label}</span>
			</div>
		{/each}
	</div>
</section>

<!-- Mission / about teaser -->
<section class="py-16 sm:py-24">
	<div class="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
		<div use:reveal class="reveal relative">
			<img
				src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80"
				alt="Volunteers working together"
				class="aspect-square w-full rounded-2xl object-cover shadow-card"
				loading="lazy"
			/>
			<img
				src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&q=80"
				alt="A community gathering"
				class="absolute -right-5 -bottom-8 hidden w-44 rounded-2xl border-4 border-background object-cover shadow-lift md:block"
				loading="lazy"
			/>
		</div>
		<div use:reveal class="reveal flex flex-col gap-5">
			<span class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-primary uppercase"><span class="h-px w-6 bg-current opacity-50"></span>Who we are</span>
			<h2 class="text-3xl leading-tight sm:text-4xl">
				We back the people closest to the problem.
			</h2>
			<p class="leading-relaxed text-muted-foreground">
				Vijay Anand Foundation is a community-first charity. Instead of imposing outside plans, we fund and
				follow the lead of local organizations who understand their neighbors — then we stay for the
				long haul.
			</p>
			<p class="leading-relaxed text-muted-foreground">
				Every program is measured, reported, and built to outlast a single grant. That’s how a
				donation becomes a school that still stands in twenty years.
			</p>
			<div>
				<Button href="/about" variant="outline">More about us <ArrowRight class="size-4" /></Button>
			</div>
		</div>
	</div>
</section>

<!-- Initiatives -->
<section class="bg-secondary py-16 sm:py-24">
	<div class="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
		<SectionHeading
			eyebrow="Our initiatives"
			title="Three focus areas, one goal"
			subtitle="We concentrate our funding where it compounds — the building blocks every thriving community needs."
		/>
		<div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each initiatives as item (item.slug)}
				{@const Icon = icons[item.icon]}
				<article
					use:reveal
					class="reveal group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-card"
				>
					<div class="relative h-44 overflow-hidden">
						<img
							src={item.image}
							alt={item.title}
							class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
							loading="lazy"
						/>
						<span class="absolute top-4 left-4 grid size-11 place-items-center rounded-full bg-card text-primary shadow-soft">
							<Icon class="size-5" />
						</span>
					</div>
					<div class="flex flex-1 flex-col gap-3 p-6">
						<h3 class="text-xl">{item.title}</h3>
						<p class="text-sm text-muted-foreground">{item.summary}</p>
						<a
							href="/initiatives"
							class="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
						>
							Learn more <ArrowRight class="size-4" />
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Impact stories preview -->
<section class="py-16 sm:py-24">
	<div class="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
		<div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
			<SectionHeading
				class="!mx-0 !items-start !text-left"
				align="left"
				eyebrow="Impact stories"
				title="Change, in their own words"
			/>
			<Button href="/impact" variant="ghost" class="shrink-0">All stories <ArrowRight class="size-4" /></Button>
		</div>
		<div class="mt-12 grid gap-6 md:grid-cols-3">
			{#each stories as story (story.slug)}
				<article use:reveal class="reveal group relative overflow-hidden rounded-2xl shadow-soft">
					<img
						src={story.image}
						alt={story.name}
						class="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
						loading="lazy"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/20 to-transparent"></div>
					<div class="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 text-brand-deep-foreground">
						<span class="w-fit rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
							{story.category}
						</span>
						<h3 class="text-xl text-brand-deep-foreground">{story.name}</h3>
						<p class="text-sm text-brand-deep-foreground/80">{story.excerpt}</p>
					</div>
				</article>
			{/each}
		</div>
		<div class="mt-10 flex justify-center">
			<Button href="/contact" size="lg">Get in touch <ArrowRight class="size-4" /></Button>
		</div>
	</div>
</section>

<!-- Testimonial -->
<section class="bg-secondary py-16 sm:py-24">
	<div use:reveal class="reveal mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
		<Quote class="mx-auto size-10 text-primary/30" />
		<blockquote class="mt-6 font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
			“{testimonials[0].quote}”
		</blockquote>
		<div class="mt-8">
			<p class="font-semibold">{testimonials[0].name}</p>
			<p class="text-sm text-muted-foreground">{testimonials[0].role}</p>
		</div>
	</div>
</section>

<!-- Partners strip -->
<section class="bg-brand-deep text-brand-deep-foreground">
	<!-- Infinite marquee: hovering a partner pauses the whole strip -->
	<div class="marquee group pt-8 pb-12 sm:pt-10 sm:pb-16">
		<ul class="marquee__track">
			{#each [...partners, ...partners] as partner, i (i)}
				<li>
					<a
						href={partner.url ?? '#'}
						aria-label={partner.name}
						class="group/partner flex h-16 items-center gap-4 px-8 sm:px-10"
					>
						{#if partner.domain}
							<img
								src={faviconFor(partner.domain)}
								alt=""
								aria-hidden="true"
								class="size-10 shrink-0 rounded-lg bg-white object-contain p-1.5 shadow-soft"
								loading="lazy"
							/>
						{:else}
							{@const Icon = kindIcons[partner.kind]}
							<span class="grid size-10 shrink-0 place-items-center rounded-lg bg-white/10 text-brand-deep-foreground/70">
								<Icon class="size-5" />
							</span>
						{/if}
						<span
							class="font-display text-xl font-semibold whitespace-nowrap text-brand-deep-foreground/60 transition-colors group-hover/partner:text-brand-deep-foreground sm:text-2xl"
						>
							{partner.name}
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.marquee {
		overflow: hidden;
		/* fade the edges so cards slide in/out smoothly */
		-webkit-mask-image: linear-gradient(
			to right,
			transparent,
			#000 6%,
			#000 94%,
			transparent
		);
		mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
	}

	.marquee__track {
		display: flex;
		width: max-content;
		gap: 1.5rem;
		padding-inline: 0.75rem;
		animation: marquee-scroll 40s linear infinite;
	}

	/* pause when hovering anywhere on the strip (i.e. over a partner) */
	.marquee:hover .marquee__track {
		animation-play-state: paused;
	}

	/* the track holds two copies of the list; shifting by half loops seamlessly */
	@keyframes marquee-scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee__track {
			animation: none;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
