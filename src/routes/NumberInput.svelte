<script lang="ts">
	let {
		class: inheritedClass,
		min,
		max,
		value = $bindable(),
		step,
		placeholder
	}: {
		class: string;
		min?: number;
		max?: number;
		value: number | undefined;
		step?: number;
		placeholder?: number | string;
	} = $props();
	let placeholderString = $derived(placeholder !== undefined ? `${placeholder}` : undefined);
</script>

<input
	type="number"
	class="{inheritedClass} bg-slate-200 dark:bg-slate-700"
	{min}
	{max}
	bind:value
	placeholder={placeholderString}
	{step}
/>
