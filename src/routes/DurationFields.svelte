<script lang="ts">
	import NumberInput from './NumberInput.svelte';
	import { splitDuration, updateDuration } from '$lib/Duration';

	let { value = $bindable(), hours }: { value: number; hours: boolean } = $props();
</script>

{#if hours}<NumberInput
		class="w-20"
		bind:value={
			() => splitDuration(value).hours,
			(hours) => {
				value = updateDuration(value, { hours });
			}
		}
	/>:{/if}<NumberInput
	class="w-20"
	bind:value={
		() => splitDuration(value).minutes,
		(minutes) => {
			value = updateDuration(value, { minutes });
		}
	}
/>:<NumberInput
	class="w-20"
	bind:value={
		() => splitDuration(value).seconds,
		(seconds) => {
			value = updateDuration(value, { seconds });
		}
	}
/>
