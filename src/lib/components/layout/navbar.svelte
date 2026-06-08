<script>
	import { page } from '$app/state';
	import { Dialog } from 'bits-ui';
	import { Menu, X } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { site, navLinks } from '$lib/data/site.js';
	import logo from '$lib/assets/vaf-logo.jpeg';
	import { cn } from '$lib/utils.js';

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	function onScroll() {
		scrolled = window.scrollY > 16;
	}

	$effect(() => {
		// close the drawer whenever the route changes
		page.url.pathname;
		mobileOpen = false;
	});

	function isActive(href) {
		return href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
	}
</script>

<svelte:window on:scroll={onScroll} />

<header
	class={cn(
		'fixed inset-x-0 top-0 z-50 transition-all duration-300',
		scrolled
			? 'border-b border-border bg-background/85 shadow-soft backdrop-blur-md'
			: 'border-b border-transparent bg-transparent'
	)}
>
	<nav class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8 md:h-20">
		<a href="/" class="flex items-center" aria-label={site.name}>
			<img src={logo} alt={`${site.name} logo`} class="h-10 w-auto md:h-12" />
		</a>

		<!-- Desktop nav -->
		<ul class="hidden items-center gap-1 md:flex">
			{#each navLinks as link (link.href)}
				<li>
					<a
						href={link.href}
						class={cn(
							'rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
							isActive(link.href)
								? scrolled
									? 'text-primary'
									: 'text-primary-bright'
								: scrolled
									? 'text-foreground/70 hover:bg-muted hover:text-foreground'
									: 'text-brand-deep-foreground/75 hover:bg-white/10 hover:text-brand-deep-foreground'
						)}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-2">
			<Button href="/contact" size="sm" class="hidden md:inline-flex">Contact Us</Button>

			<!-- Mobile menu -->
			<Dialog.Root bind:open={mobileOpen}>
				<Dialog.Trigger
					class="grid size-10 place-items-center rounded-full text-foreground hover:bg-muted md:hidden"
					aria-label="Open menu"
				>
					<Menu class="size-5" />
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay
						class="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0"
					/>
					<Dialog.Content
						class="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col gap-1 bg-background p-6 shadow-lift data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right"
					>
						<div class="mb-4 flex items-center justify-between">
							<Dialog.Title class="font-display text-lg font-semibold">{site.name}</Dialog.Title>
							<Dialog.Close
								class="grid size-9 place-items-center rounded-full hover:bg-muted"
								aria-label="Close menu"
							>
								<X class="size-5" />
							</Dialog.Close>
						</div>
						{#each navLinks as link (link.href)}
							<a
								href={link.href}
								class={cn(
									'rounded-lg px-3 py-3 text-base font-medium transition-colors',
									isActive(link.href)
										? 'bg-secondary text-primary'
										: 'text-foreground hover:bg-muted'
								)}
							>
								{link.label}
							</a>
						{/each}
						<Button href="/contact" class="mt-4">Contact Us</Button>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</div>
	</nav>
</header>
