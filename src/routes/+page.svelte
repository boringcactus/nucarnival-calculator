<script lang="ts">
	import Navigation from './Navigation.svelte';
	import LightningBolt from './LightningBolt.svelte';
	import MeterFields from './MeterFields.svelte';
	import { SvelteDate } from 'svelte/reactivity';
	import TargetLerp from './TargetLerp.svelte';
	import WorkshopSlot from './WorkshopSlot.svelte';
	import WorkshopSettings from './WorkshopSettings.svelte';
	import DurationFields from './DurationFields.svelte';
	import { mergeDuration } from '$lib/Duration';

	let energyCurrent = $state(21);
	let energyMax = $state(112);
	let energyUntilNext = $state(mergeDuration({ minutes: 5 }));
	let energyReachedCurrentAt: Date | null = $state(null);
	let energyTicking = $state(false);
	let intimacyCurrent = $state(7);
	let intimacyMax = $state(40);
	let intimacyUntilNext = $state(mergeDuration({ minutes: 10 }));
	let intimacyReachedCurrentAt: Date | null = $state(null);
	let intimacyTicking = $state(false);
	let workshopSettings = new WorkshopSettings();

	let now = new SvelteDate();

	function pauseEnergyTicking() {
		energyTicking = false;
		energyReachedCurrentAt = null;
	}

	function resumeEnergyTicking() {
		energyTicking = true;
		energyReachedCurrentAt = new Date(Date.now() - 5 * 60 * 1000 + energyUntilNext * 1000);
	}

	function pauseIntimacyTicking() {
		intimacyTicking = false;
		intimacyReachedCurrentAt = null;
	}

	function resumeIntimacyTicking() {
		intimacyTicking = true;
		intimacyReachedCurrentAt = new Date(Date.now() - 10 * 60 * 1000 + intimacyUntilNext * 1000);
	}

	$effect(() => {
		const interval = setInterval(() => {
			now.setTime(Date.now());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	$effect(() => {
		if (energyTicking && energyCurrent < energyMax && energyReachedCurrentAt !== null) {
			let nextAt = energyReachedCurrentAt.valueOf() + 5 * 60 * 1000;
			let secondsUntilNext = Math.floor((nextAt - now.valueOf()) / 1000);
			energyUntilNext = secondsUntilNext;
			if (secondsUntilNext == 0) {
				energyCurrent++;
				energyReachedCurrentAt = new Date(now.valueOf());
				energyUntilNext = mergeDuration({ minutes: 5 });
			}
		}
	});

	$effect(() => {
		if (intimacyTicking && intimacyCurrent < intimacyMax && intimacyReachedCurrentAt !== null) {
			let nextAt = intimacyReachedCurrentAt.valueOf() + 10 * 60 * 1000;
			let secondsUntilNext = Math.floor((nextAt - now.valueOf()) / 1000);
			intimacyUntilNext = secondsUntilNext;
			if (secondsUntilNext == 0) {
				intimacyCurrent++;
				intimacyReachedCurrentAt = new Date(now.valueOf());
				energyUntilNext = mergeDuration({ minutes: 10 });
			}
		}
	});
</script>

<div class="mx-auto flex flex-row flex-wrap justify-center">
	<article class="prose prose-slate dark:prose-invert">
		<h1>NU: Carnival Timer & Calculator</h1>
		<p>
			Not sure when your energy will be full? when to interrupt your silver and gold to make some
			upgrade materials? how many gifts stand between you and Olivine’s next H-scene? Plug some
			numbers in here and see exactly* what you need to know.
		</p>
		<p>
			* <a href="https://www.boringcactus.com">I</a> am not really an expert on NU: Carnival — I’ve been
			playing for like a month and a half — so there may be some endgame- or whale-only functionality
			I’m not aware of.
		</p>
	</article>
	<Navigation
		class="max-h-[90vh] max-w-[20em] flex-none"
		{energyCurrent}
		{energyMax}
		{energyUntilNext}
		{intimacyCurrent}
		{intimacyMax}
		{intimacyUntilNext}
	/>
</div>

<section class="prose prose-slate mx-auto dark:prose-invert">
	<h2 id="journey">Journey</h2>
	<MeterFields
		bind:current={energyCurrent}
		bind:max={energyMax}
		bind:untilNext={energyUntilNext}
		onfocusin={pauseEnergyTicking}
		onfocusout={resumeEnergyTicking}
	>
		<LightningBolt class="h-8" colorFor="energy" />
	</MeterFields>
	<TargetLerp
		current={energyCurrent}
		defaultTarget={energyMax}
		max={energyMax}
		minutesPer={5}
		{now}
		untilNext={energyUntilNext}
	/>
</section>

<section class="prose prose-slate mx-auto dark:prose-invert">
	<h2 id="intimacy">Intimacy</h2>
	<MeterFields
		bind:current={intimacyCurrent}
		bind:max={intimacyMax}
		bind:untilNext={intimacyUntilNext}
		onfocusin={pauseIntimacyTicking}
		onfocusout={resumeIntimacyTicking}
	>
		<LightningBolt class="h-8" colorFor="intimacy" />
	</MeterFields>
	<TargetLerp
		current={intimacyCurrent}
		defaultTarget={intimacyMax}
		max={intimacyMax}
		minutesPer={10}
		{now}
		untilNext={intimacyUntilNext}
	/>
</section>

<section class="prose prose-slate mx-auto dark:prose-invert">
	<h2 id="workshop">Workshop</h2>
	<div>Silver: <DurationFields bind:value={workshopSettings.silverSpeed} hours /> each</div>
	<div>Gold: <DurationFields bind:value={workshopSettings.goldSpeed} hours /> each</div>
	<WorkshopSlot defaultCraft="silver" {now} {workshopSettings} />
	<WorkshopSlot defaultCraft="gold" {now} {workshopSettings} />
	<WorkshopSlot defaultCraft="locked" {now} {workshopSettings} />
</section>

<section class="prose prose-slate mx-auto dark:prose-invert">
	<h2 id="exploration">Exploration</h2>
	<p>I don’t think there’s anything particularly useful to calculate here.</p>
</section>
