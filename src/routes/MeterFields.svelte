<script lang="ts">
	import NumberInput from './NumberInput.svelte';

	let { current = $bindable(0), max = $bindable(0), children } = $props();
</script>

<label class="flex flex-row items-center">
	{@render children()}
	<NumberInput min={0} bind:value={current} />
	/
	<NumberInput min={0} bind:value={max} />
</label>
