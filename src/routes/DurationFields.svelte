<script lang="ts">
	import NumberInput from './NumberInput.svelte';
	import Duration from '$lib/Duration';

	let { value = $bindable(), hours: nominalHours }: { value: Duration; hours?: boolean } = $props();

	let hours = nominalHours ?? value.hours > 0;
</script>

{#if hours}<NumberInput
		bind:value={
			() => value.hours,
			(x) => {
				value.hours = x;
			}
		}
	/>:{/if}<NumberInput
	bind:value={
		() => value.minutes,
		(x) => {
			value.minutes = x;
		}
	}
/>:<NumberInput
	bind:value={
		() => value.seconds,
		(x) => {
			value.seconds = x;
		}
	}
/>
