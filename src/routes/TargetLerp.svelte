<script lang="ts">
	import lerp from '$lib/lerp';
	import NumberInput from './NumberInput.svelte';

	let {
		defaultTarget,
		current,
		max,
		now,
		minutesPer
	}: { defaultTarget: number; current: number; max: number; now: Date; minutesPer: number } =
		$props();
	let target = $state(undefined);

	let lerpResult = $derived(lerp(current, target ?? defaultTarget, now, minutesPer));
</script>

<p>
	{#if lerpResult != null}
		Will reach
	{:else}
		Already reached
	{/if}
	<NumberInput min={0} {max} bind:value={target} placeholder={defaultTarget} />
	{#if lerpResult != null}
		in {lerpResult.formattedDuration()} at {lerpResult.formattedTime()}
	{/if}
</p>
