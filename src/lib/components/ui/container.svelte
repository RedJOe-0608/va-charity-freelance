<script>
	import { cn } from '$lib/utils.js';

	let { class: className, children, ...rest } = $props();
</script>

<div class={cn('mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8', className)} {...rest}>
	{@render children?.()}
</div>
