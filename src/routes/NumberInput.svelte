<script lang="ts">
	let {
		min,
		max,
		value = $bindable(),
		placeholder
	}: {
		min?: number;
		max?: number;
		value: number | undefined;
		placeholder?: number | string;
	} = $props();
	let placeholderString = placeholder !== undefined ? `${placeholder}` : undefined;
</script>

<input
	type="number"
	class="w-20 bg-slate-200 dark:bg-slate-700"
	{min}
	{max}
	bind:value
	placeholder={placeholderString}
/>
