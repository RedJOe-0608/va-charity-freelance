<script>
	import { site } from '$lib/data/site.js';
	import logoMark from '$lib/assets/vaf-logo-only.png';
	import { cn } from '$lib/utils.js';

	let {
		/** extra classes for the wrapper */
		class: className = '',
		/** show the wordmark text beside the mark */
		showText = true,
		/** show the small subtitle line under the name */
		subtitle = true,
		/** colour tone — 'light' for light backgrounds, 'dark' for dark (e.g. footer) */
		tone = 'light',
		/** tailwind height utility for the icon mark */
		markClass = 'h-8 w-auto md:h-12'
	} = $props();

	const titleColor = $derived(tone === 'dark' ? 'text-brand-deep-foreground' : 'text-brand-deep');
	const subtitleColor = $derived(tone === 'dark' ? 'text-primary-bright' : 'text-primary');
</script>

<span class={cn('inline-flex items-center gap-2', className)}>
	<img src={logoMark} alt={`${site.name} logo`} class={markClass} />
	{#if showText}
		<span class="flex flex-col items-start text-left leading-none">
			<span class={cn('font-sans text-sm font-bold tracking-tight whitespace-nowrap sm:text-lg', titleColor)}>
				{site.name}
			</span>
			{#if subtitle}
				<span class={cn('ml-[2px] text-[9px] font-medium tracking-wide whitespace-nowrap', subtitleColor)}>
					Supporting Health, Education &amp; Children
				</span>
			{/if}
		</span>
	{/if}
</span>
