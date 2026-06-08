<script>
	import { Dialog } from 'bits-ui';
	import { X } from '@lucide/svelte';
	import PageHeader from '$lib/components/ui/page-header.svelte';
	import { reveal } from '$lib/actions/reveal.js';
	import { site, gallery } from '$lib/data/site.js';

	let open = $state(false);
	let active = $state('');

	function show(src) {
		active = src;
		open = true;
	}

	// vary tile heights for a gentle masonry rhythm
	const spans = ['row-span-2', '', 'row-span-2', '', 'row-span-2', '', '', 'row-span-2', ''];
</script>

<svelte:head>
	<title>Gallery — {site.name}</title>
	<meta name="description" content="Moments from the field — photographs of the communities and programs we support." />
</svelte:head>

<PageHeader
	title="Moments from the field"
	subtitle="Every photograph is a real community, a real program, a real life changed. Tap any image to view it larger."
/>

<section class="py-14 sm:py-20">
	<div class="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
		<div class="grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3">
			{#each gallery as src, i (src + i)}
				<button
					use:reveal
					onclick={() => show(src)}
					class={`reveal group relative overflow-hidden rounded-2xl shadow-soft ${spans[i % spans.length]}`}
				>
					<img
						{src}
						alt={`Gallery photograph ${i + 1}`}
						class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
						loading="lazy"
					/>
					<span class="absolute inset-0 bg-brand-deep/0 transition-colors group-hover:bg-brand-deep/20"></span>
				</button>
			{/each}
		</div>
	</div>
</section>

<Dialog.Root bind:open>
	<Dialog.Portal>
		<Dialog.Overlay
			class="fixed inset-0 z-50 bg-brand-deep/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0"
		/>
		<Dialog.Content
			class="fixed top-1/2 left-1/2 z-50 w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95"
		>
			<Dialog.Title class="sr-only">Gallery image</Dialog.Title>
			<img src={active} alt="Selected gallery photograph" class="w-full rounded-2xl shadow-lift" />
			<Dialog.Close
				class="absolute -top-3 -right-3 grid size-10 place-items-center rounded-full bg-background text-foreground shadow-card hover:bg-muted"
				aria-label="Close"
			>
				<X class="size-5" />
			</Dialog.Close>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
