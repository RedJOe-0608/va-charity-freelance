<script>
	import { ArrowRight, ExternalLink, Handshake, HeartHandshake, Building2, BadgeCheck, GraduationCap, Baby, HeartPulse } from '@lucide/svelte';
	import PageHeader from '$lib/components/ui/page-header.svelte';
	import SectionHeading from '$lib/components/ui/section-heading.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { reveal } from '$lib/actions/reveal.js';
	import { site, partnerCategories } from '$lib/data/site.js';

	const icons = { 'graduation-cap': GraduationCap, baby: Baby, 'heart-pulse': HeartPulse };

	const initials = (name) =>
		name
			.split(' ')
			.slice(0, 2)
			.map((w) => w[0])
			.join('')
			.toUpperCase();

	const ways = [
		{
			icon: Building2,
			title: 'Corporate partners',
			body: 'Align your company with measurable social impact through matched giving, sponsorships, and employee programs.'
		},
		{
			icon: HeartHandshake,
			title: 'Foundations & trusts',
			body: 'Co-fund vetted programs with full transparency and detailed impact reporting on every grant.'
		},
		{
			icon: Handshake,
			title: 'Local organizations',
			body: 'On-the-ground partners who deliver our programs and know their communities best. We follow your lead.'
		}
	];
</script>

<svelte:head>
	<title>Partners — {site.name}</title>
	<meta name="description" content="Partner with Vijay Anand Foundation — corporate, foundation, and local organizations driving change together." />
</svelte:head>

<PageHeader
	title="Stronger together"
	subtitle="Lasting change is a team effort. We’re proud to work alongside organizations who share our commitment to communities."
/>

<!-- Organizations we work with — by category -->
<section class="py-14 sm:py-20">
	<div class="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
		<SectionHeading
			eyebrow="Organizations we work with"
			title="Partners in every area"
			subtitle="We collaborate with trusted organizations in education, childcare, and healthcare — each delivering change where it matters most."
		/>

		<div class="mt-16 flex flex-col gap-16">
			{#each partnerCategories as category (category.key)}
				{@const Icon = icons[category.icon]}
				<div use:reveal class="reveal">
					<!-- Category banner -->
					<div class="relative overflow-hidden rounded-3xl shadow-card">
						<img
							src={category.image}
							alt={`${category.title} partners`}
							class="h-48 w-full object-cover sm:h-56"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-r from-brand-deep/90 via-brand-deep/55 to-brand-deep/10"></div>
						<div class="absolute inset-0 flex flex-col justify-center gap-2 p-6 sm:p-9">
							<span class="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur">
								<Icon class="size-4" />
								{category.organizations.length} partners
							</span>
							<h3 class="font-display text-3xl text-white sm:text-4xl">{category.title}</h3>
							<p class="max-w-md text-sm text-white/80 sm:text-base">{category.subtitle}</p>
						</div>
					</div>

					<!-- Partner cards (wrap to any number) -->
					<div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{#each category.organizations as org (org.name)}
							<div class="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card">
								<!-- Name + monogram -->
								<div class="flex items-center gap-2.5">
									<span class="grid size-9 shrink-0 place-items-center rounded-lg bg-secondary font-display text-xs font-semibold text-primary">
										{initials(org.name)}
									</span>
									<p class="font-display text-base leading-tight font-semibold">{org.name}</p>
								</div>

								<!-- Description -->
								<p class="mt-4 text-sm leading-relaxed text-muted-foreground">{org.description}</p>

								<!-- Visit website -->
								<a
									href={org.url}
									target="_blank"
									rel="noopener noreferrer"
									class="mt-auto inline-flex items-center gap-1.5 border-t border-border pt-4 text-sm font-semibold text-primary transition-colors group-hover:text-primary-hover"
								>
									Visit website
									<ExternalLink class="size-4 transition-transform group-hover:translate-x-0.5" />
								</a>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Ways to partner -->
<section class="bg-muted/50 py-16 sm:py-24">
	<div class="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
		<SectionHeading eyebrow="Get involved" title="Ways to partner with us" />
		<div class="mt-14 grid gap-6 md:grid-cols-3">
			{#each ways as way (way.title)}
				{@const Icon = way.icon}
				<div use:reveal class="reveal flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 shadow-soft">
					<span class="grid size-12 place-items-center rounded-full bg-secondary text-primary">
						<Icon class="size-6" />
					</span>
					<h3 class="text-xl">{way.title}</h3>
					<p class="text-sm text-muted-foreground">{way.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Accountability strip -->
<section class="py-16 sm:py-24">
	<div class="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
		<div use:reveal class="reveal flex flex-col gap-5">
			<span class="grid size-12 place-items-center rounded-full bg-secondary text-primary">
				<BadgeCheck class="size-6" />
			</span>
			<h2 class="text-3xl leading-tight sm:text-4xl">Partnership you can account for</h2>
			<p class="text-muted-foreground">
				Every partner receives detailed quarterly reporting: where funds went, what they achieved,
				and what comes next. No vanity metrics — just honest, auditable impact.
			</p>
			<div>
				<Button href="/contact" variant="primary">Start a conversation <ArrowRight class="size-4" /></Button>
			</div>
		</div>
		<div use:reveal class="reveal">
			<img
				src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80"
				alt="Partners meeting in the community"
				class="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
				loading="lazy"
			/>
		</div>
	</div>
</section>
