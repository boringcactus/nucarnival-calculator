<script lang="ts">
	import lerp from '$lib/lerp';
	import NumberInput from './NumberInput.svelte';

	let {
		defaultTarget,
		current,
		max,
		now,
		untilNext,
		minutesPer
	}: {
		defaultTarget: number;
		current: number;
		max: number;
		now: Date;
		untilNext: number;
		minutesPer: number;
	} = $props();
	let target = $state(undefined);

	let lerpResult = $derived(lerp(current, target ?? defaultTarget, now, untilNext, minutesPer));
</script>

<p>
	{#if lerpResult != null}
		Will reach
	{:else}
		Already reached
	{/if}
	<NumberInput bind:value={target} {max} min={0} placeholder={defaultTarget} />
	{#if lerpResult != null}
		in {lerpResult.formattedDuration({ showHours: false })} at {lerpResult.formattedTime()}
	{/if}
</p>
