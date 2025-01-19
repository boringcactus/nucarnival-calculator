<script lang="ts">
	import LightningBoltRaw from './LightningBoltRaw.svelte';

	let { colorFor, class: className = '' }: { colorFor: 'energy' | 'intimacy'; class?: string } =
		$props();
</script>

<svg viewBox="-1 -1 20 28" class={className}>
	<LightningBoltRaw {colorFor} />
</svg>
