<script lang="ts">
	let { cx, cy, w, fill }: { cx: number; cy: number; w: number; fill: string } = $props();
	let westX = cx - w / 2;
	let westCornerX = westX + 10;
	let eastX = cx + w / 2;
	let eastCornerX = eastX - 10;
	let northY = cy - 17;
	let southY = cy + 17;
</script>

<path
	d={`M ${westX},${cy} L ${westCornerX},${southY} ${eastCornerX},${southY} ${eastX},${cy} ${eastCornerX},${northY} ${westCornerX},${northY} z`}
	stroke="#B7A382"
	{fill}
/>
