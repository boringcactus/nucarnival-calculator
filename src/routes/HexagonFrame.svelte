<script lang="ts">
	import Hexagon from './Hexagon.svelte';

	let { cx, cy, r }: { cx: number; cy: number; r: number } = $props();
</script>

<Hexagon {cx} {cy} {r} stroke="#E4C2A7" fill="#D5B07C" />
<Hexagon {cx} {cy} r={r * 0.97} stroke="#80561A" fill="#FDE8B9" />
