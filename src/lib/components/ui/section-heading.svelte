<script>
	import { cn } from '$lib/utils.js';
	import { reveal } from '$lib/actions/reveal.js';

	let {
		eyebrow = undefined,
		title,
		subtitle = undefined,
		align = 'center',
		light = false,
		class: className
	} = $props();
</script>

<div
	use:reveal
	class={cn(
		'reveal flex max-w-2xl flex-col gap-4',
		align === 'center' && 'mx-auto items-center text-center',
		className
	)}
>
	{#if eyebrow}
		<span
			class={cn(
				'inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase',
				light ? 'text-primary-bright' : 'text-primary'
			)}
		>
			<span class="h-px w-6 bg-current opacity-50"></span>
			{eyebrow}
		</span>
	{/if}
	<h2 class={cn('text-3xl leading-tight sm:text-4xl', light && 'text-brand-deep-foreground')}>
		{title}
	</h2>
	{#if subtitle}
		<p class={cn('text-base leading-relaxed', light ? 'text-brand-deep-foreground/70' : 'text-muted-foreground')}>
			{subtitle}
		</p>
	{/if}
</div>
