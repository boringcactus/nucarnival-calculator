<script lang="ts">
	import type WorkshopSettings from './WorkshopSettings.svelte';
	import DurationFields from './DurationFields.svelte';
	import Duration from '$lib/Duration';
	import TimeProjection from '$lib/TimeProjection';

	let {
		now,
		workshopSettings,
		defaultCraft
	}: {
		now: Date;
		workshopSettings: WorkshopSettings;
		defaultCraft: 'silver' | 'gold' | 'alchemy' | 'locked';
	} = $props();

	let value = $state(defaultCraft);
	let secondsPer = $derived(
		value === 'silver'
			? workshopSettings.silverSpeed.value
			: value === 'gold'
				? workshopSettings.goldSpeed.value
				: null
	);
	let craftingTime = $state(new Duration((17 * 60 + 38) * 60));
	let nextBreak = $derived(
		secondsPer !== null ? new TimeProjection(craftingTime.value % secondsPer, now) : null
	);
</script>

<div>
	<select class="bg-slate-200 dark:bg-slate-700" bind:value>
		<option value="silver">Silver</option>
		<option value="gold">Gold</option>
		<option value="alchemy">Alchemy</option>
		<option value="locked">Locked</option>
	</select>
	{#if secondsPer !== null && secondsPer > 0}
		Crafting... <DurationFields bind:value={craftingTime} hours />
		{#if craftingTime.value > 0 && nextBreak !== null}
			Next break in {nextBreak.formattedDuration()} at {nextBreak.formattedTime()}
		{/if}
	{:else if value === 'alchemy'}
		🤷‍♀️
	{/if}
</div>
