<script lang="ts">
	import type WorkshopSettings from './WorkshopSettings.svelte';
	import DurationFields from './DurationFields.svelte';
	import { mergeDuration } from '$lib/Duration';
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
			? workshopSettings.silverSpeed
			: value === 'gold'
				? workshopSettings.goldSpeed
				: null
	);
	let craftingTime = $state(mergeDuration({ hours: 17, minutes: 38 }));
	let nextBreak = $derived(
		secondsPer !== null ? new TimeProjection(craftingTime % secondsPer, now) : null
	);
</script>

<div class="mt-2">
	<select bind:value class="block bg-slate-200 dark:bg-slate-700">
		<option value="silver">Silver</option>
		<option value="gold">Gold</option>
		<option value="alchemy">Alchemy</option>
		<option value="locked">Locked</option>
	</select>
	{#if secondsPer !== null && secondsPer > 0}
		<div>Crafting... <DurationFields bind:value={craftingTime} hours /></div>
		{#if craftingTime > 0 && nextBreak !== null}
			<div>
				Next break in {nextBreak.formattedDuration({ showHours: false })} at {nextBreak.formattedTime()}
			</div>
		{/if}
	{:else if value === 'alchemy'}
		🤷‍♀️
	{/if}
</div>
