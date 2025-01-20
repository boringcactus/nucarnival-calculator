<script lang="ts">
	import NumberInput from './NumberInput.svelte';
	import DurationFields from './DurationFields.svelte';

	let { current = $bindable(), max = $bindable(), untilNext = $bindable(), children } = $props();
</script>

<label class="flex flex-row items-center">
	{@render children()}
	<NumberInput bind:value={current} min={0} />
	/
	<NumberInput bind:value={max} min={0} />
	{#if current < max}
		⏱️
		<DurationFields bind:value={untilNext} hours={false} />
	{/if}
</label>
