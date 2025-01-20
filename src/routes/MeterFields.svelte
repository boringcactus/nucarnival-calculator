<script lang="ts">
	import NumberInput from './NumberInput.svelte';
	import DurationFields from './DurationFields.svelte';
	import trackFocus from '$lib/trackFocus.svelte';
	import type { Snippet } from 'svelte';

	let {
		current = $bindable(),
		max = $bindable(),
		untilNext = $bindable(),
		onfocusin,
		onfocusout,
		children
	}: {
		current: number;
		max: number;
		untilNext: number;
		onfocusin?: () => void;
		onfocusout?: () => void;
		children: Snippet;
	} = $props();
</script>

<div class="flex flex-row items-center" use:trackFocus={{ onfocusin, onfocusout }}>
	<label class="contents">
		{@render children()}
		<NumberInput class="w-20" bind:value={current} min={0} />
		/
		<NumberInput class="w-20" bind:value={max} min={0} />
	</label>
	{#if current < max}
		<label class="contents">
			⏱️
			<DurationFields bind:value={untilNext} hours={false} />
		</label>
	{/if}
</div>
