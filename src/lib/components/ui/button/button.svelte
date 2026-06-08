<script module>
	import { cn } from '$lib/utils.js';
	import { tv } from 'tailwind-variants';

	export const buttonVariants = tv({
		base: 'inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4',
		variants: {
			variant: {
				primary: 'bg-primary text-primary-foreground hover:bg-primary-hover shadow-soft',
				accent: 'bg-accent text-accent-foreground hover:bg-accent-hover shadow-soft',
				outline: 'border border-border bg-card text-foreground hover:bg-muted',
				ghost: 'text-foreground hover:bg-muted',
				'deep-outline':
					'border border-white/30 text-brand-deep-foreground hover:bg-white/10',
				link: 'text-primary underline-offset-4 hover:underline'
			},
			size: {
				default: 'h-11 px-6',
				sm: 'h-9 px-4 text-[13px]',
				lg: 'h-12 px-8 text-base',
				icon: 'size-11'
			}
		},
		compoundVariants: [{ variant: 'link', class: 'h-auto px-0' }],
		defaultVariants: { variant: 'primary', size: 'default' }
	});
</script>

<script>
	let {
		class: className,
		variant = 'primary',
		size = 'default',
		ref = $bindable(null),
		href = undefined,
		type = 'button',
		disabled,
		children,
		...restProps
	} = $props();
</script>

{#if href}
	<a
		bind:this={ref}
		class={cn(buttonVariants({ variant, size }), className)}
		href={disabled ? undefined : href}
		aria-disabled={disabled}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		class={cn(buttonVariants({ variant, size }), className)}
		{type}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
