<script>
	import { Accordion } from 'bits-ui';
	import { Mail, Phone, MapPin, ChevronDown, Check } from '@lucide/svelte';
	import PageHeader from '$lib/components/ui/page-header.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { reveal } from '$lib/actions/reveal.js';
	import { site } from '$lib/data/site.js';

	let form = $state({ name: '', email: '', subject: 'General enquiry', message: '' });
	let submitted = $state(false);

	function handleSubmit(e) {
		e.preventDefault();
		// Wire this up to your backend / form service. For now we just confirm.
		submitted = true;
	}

	const details = [
		{ icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
		{ icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/[^+\d]/g, '')}` },
		{ icon: MapPin, label: 'Office', value: site.address, href: null }
	];

	const faqs = [
		{
			q: 'How is my donation used?',
			a: 'Funds go directly to vetted local partners running our programs. We publish quarterly reports showing exactly where every dollar went and what it achieved.'
		},
		{
			q: 'Is my donation tax-deductible?',
			a: `Yes. ${site.name} is a registered charity (${site.registration}). You’ll receive a receipt for every gift.`
		},
		{
			q: 'Can I volunteer or fundraise?',
			a: 'Absolutely. Send us a message using the form and let us know how you’d like to get involved — we’ll match you to the right opportunity.'
		},
		{
			q: 'How do I become a partner organization?',
			a: 'Tell us about your work via the form or visit our Partners page. Our partnerships team reviews every enquiry and responds within two business days.'
		}
	];
</script>

<svelte:head>
	<title>Contact Us — {site.name}</title>
	<meta name="description" content="Get in touch with Vijay Anand Foundation — donate, partner, volunteer, or ask a question." />
</svelte:head>

<PageHeader
	title="Let’s talk"
	subtitle="Donate, partner, volunteer, or just say hello. We read every message and respond within two business days."
/>

<section class="py-14 sm:py-20">
	<div class="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
		<!-- Details -->
		<div class="flex flex-col gap-4">
			{#each details as d (d.label)}
				{@const Icon = d.icon}
				<div class="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
					<span class="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
						<Icon class="size-5" />
					</span>
					<div>
						<p class="text-sm text-muted-foreground">{d.label}</p>
						{#if d.href}
							<a href={d.href} class="font-medium hover:text-primary">{d.value}</a>
						{:else}
							<p class="font-medium">{d.value}</p>
						{/if}
					</div>
				</div>
			{/each}
			<div class="mt-2 overflow-hidden rounded-2xl border border-border shadow-soft">
				<img
					src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80"
					alt="Our team at work"
					class="aspect-[16/10] w-full object-cover"
					loading="lazy"
				/>
			</div>
		</div>

		<!-- Form -->
		<div class="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
			{#if submitted}
				<div class="flex flex-col items-center gap-4 py-16 text-center">
					<span class="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
						<Check class="size-7" />
					</span>
					<h2 class="text-2xl">Thank you, {form.name || 'friend'}!</h2>
					<p class="max-w-sm text-muted-foreground">
						Your message is on its way. A member of our team will get back to you within two business
						days.
					</p>
					<Button variant="outline" onclick={() => { submitted = false; form = { name: '', email: '', subject: 'General enquiry', message: '' }; }}>
						Send another message
					</Button>
				</div>
			{:else}
				<form class="flex flex-col gap-5" onsubmit={handleSubmit}>
					<div class="grid gap-5 sm:grid-cols-2">
						<label class="flex flex-col gap-2 text-sm font-medium">
							Name
							<input
								required
								bind:value={form.name}
								type="text"
								placeholder="Your name"
								class="h-11 rounded-lg border border-input bg-background px-3.5 text-sm font-normal outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
							/>
						</label>
						<label class="flex flex-col gap-2 text-sm font-medium">
							Email
							<input
								required
								bind:value={form.email}
								type="email"
								placeholder="you@example.com"
								class="h-11 rounded-lg border border-input bg-background px-3.5 text-sm font-normal outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
							/>
						</label>
					</div>
					<label class="flex flex-col gap-2 text-sm font-medium">
						Subject
						<select
							bind:value={form.subject}
							class="h-11 rounded-lg border border-input bg-background px-3.5 text-sm font-normal outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
						>
							<option>General enquiry</option>
							<option>I’d like to donate</option>
							<option>Partnership</option>
							<option>Volunteering</option>
							<option>Press &amp; media</option>
						</select>
					</label>
					<label class="flex flex-col gap-2 text-sm font-medium">
						Message
						<textarea
							required
							bind:value={form.message}
							rows="5"
							placeholder="How can we help?"
							class="rounded-lg border border-input bg-background px-3.5 py-3 text-sm font-normal outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
						></textarea>
					</label>
					<Button type="submit" size="lg" class="w-full sm:w-fit">Send message</Button>
				</form>
			{/if}
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="bg-muted/50 py-16 sm:py-24">
	<div class="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<span class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-primary uppercase"><span class="h-px w-6 bg-current opacity-50"></span>FAQ</span>
			<h2 class="mt-4 text-3xl sm:text-4xl">Frequently asked questions</h2>
		</div>
		<Accordion.Root type="single" class="flex flex-col gap-3">
			{#each faqs as faq, i (faq.q)}
				<Accordion.Item value={`item-${i}`} class="overflow-hidden rounded-xl border border-border bg-card">
					<Accordion.Header>
						<Accordion.Trigger
							class="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium transition-colors hover:bg-muted/50"
						>
							{faq.q}
							<ChevronDown
								class="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180"
							/>
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Content
						class="overflow-hidden text-sm text-muted-foreground data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
					>
						<p class="px-5 pb-5">{faq.a}</p>
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
</section>
