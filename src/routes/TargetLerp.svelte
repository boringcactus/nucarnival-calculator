<script lang="ts">
	import lerp from '$lib/lerp';
	import NumberInput from './NumberInput.svelte';
	import type Duration from '$lib/Duration';

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
		untilNext: Duration;
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
		in {lerpResult.formattedDuration({ hours: false })} at {lerpResult.formattedTime()}
	{/if}
</p>
