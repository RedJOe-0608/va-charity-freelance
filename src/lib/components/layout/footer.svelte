<script>
	import { Heart, Mail, Phone, MapPin, Camera, Globe, Briefcase, Video, ArrowRight } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { site, navLinks } from '$lib/data/site.js';

	// lucide removed brand logos; map social channels to generic icons.
	const icons = { instagram: Camera, facebook: Globe, linkedin: Briefcase, youtube: Video };
</script>

<footer class="bg-brand-deep text-brand-deep-foreground">
	<!-- Contact band (common to every page) -->
	<div id="contact" class="border-b border-white/10">
		<div class="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
			<div class="flex flex-col gap-5">
				<span class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-primary-bright uppercase"><span class="h-px w-6 bg-current opacity-50"></span>Get in touch</span>
				<h2 class="font-display text-3xl leading-tight text-brand-deep-foreground sm:text-4xl">
					Ready to make a difference together?
				</h2>
				<p class="max-w-md text-brand-deep-foreground/70">
					Whether you want to donate, partner, or volunteer — we’d love to hear from you. Reach out
					and a member of our team will get back within two business days.
				</p>
				<div class="mt-2 flex flex-wrap gap-3">
					<Button href="/contact" variant="accent">Contact us <ArrowRight class="size-4" /></Button>
				</div>
			</div>

			<div class="grid gap-4 self-center">
				<a
					href={`mailto:${site.email}`}
					class="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10"
				>
					<span class="grid size-11 shrink-0 place-items-center rounded-full bg-primary-bright/15 text-primary-bright">
						<Mail class="size-5" />
					</span>
					<span>
						<span class="block text-sm text-brand-deep-foreground/60">Email us</span>
						<span class="font-medium">{site.email}</span>
					</span>
				</a>
				<a
					href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}
					class="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10"
				>
					<span class="grid size-11 shrink-0 place-items-center rounded-full bg-primary-bright/15 text-primary-bright">
						<Phone class="size-5" />
					</span>
					<span>
						<span class="block text-sm text-brand-deep-foreground/60">Call us</span>
						<span class="font-medium">{site.phone}</span>
					</span>
				</a>
				<div class="flex items-center gap-4 rounded-xl bg-white/5 p-4">
					<span class="grid size-11 shrink-0 place-items-center rounded-full bg-primary-bright/15 text-primary-bright">
						<MapPin class="size-5" />
					</span>
					<span>
						<span class="block text-sm text-brand-deep-foreground/60">Visit us</span>
						<span class="font-medium">{site.address}</span>
					</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Footer nav -->
	<div class="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
		<div class="flex flex-col gap-4">
			<a href="/" class="flex items-center gap-2.5 font-display text-lg font-semibold">
				<span class="grid size-9 place-items-center rounded-full bg-primary-bright text-accent-foreground">
					<Heart class="size-4.5" fill="currentColor" />
				</span>
				{site.name}
			</a>
			<p class="max-w-xs text-sm text-brand-deep-foreground/65">{site.mission}</p>
			<div class="mt-2 flex gap-2">
				{#each site.social as s (s.label)}
					{@const Icon = icons[s.icon]}
					<a
						href={s.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={s.label}
						class="grid size-10 place-items-center rounded-full border border-white/15 text-brand-deep-foreground/80 transition-colors hover:border-primary-bright hover:text-primary-bright"
					>
						<Icon class="size-4.5" />
					</a>
				{/each}
			</div>
		</div>

		<div class="flex flex-col gap-3">
			<h3 class="font-display text-sm font-semibold tracking-wide text-brand-deep-foreground/90 uppercase">
				Explore
			</h3>
			{#each navLinks as link (link.href)}
				<a href={link.href} class="text-sm text-brand-deep-foreground/65 transition-colors hover:text-primary-bright">
					{link.label}
				</a>
			{/each}
		</div>

		<div class="flex flex-col gap-3">
			<h3 class="font-display text-sm font-semibold tracking-wide text-brand-deep-foreground/90 uppercase">
				Get involved
			</h3>
			<a href="/contact" class="text-sm text-brand-deep-foreground/65 transition-colors hover:text-primary-bright">Donate</a>
			<a href="/contact" class="text-sm text-brand-deep-foreground/65 transition-colors hover:text-primary-bright">Volunteer</a>
			<a href="/partners" class="text-sm text-brand-deep-foreground/65 transition-colors hover:text-primary-bright">Partner with us</a>
			<a href="/contact" class="text-sm text-brand-deep-foreground/65 transition-colors hover:text-primary-bright">Contact</a>
		</div>
	</div>

	<div class="border-t border-white/10">
		<div
			class="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-brand-deep-foreground/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
		>
			<p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
			<p>{site.registration}</p>
		</div>
	</div>
</footer>
