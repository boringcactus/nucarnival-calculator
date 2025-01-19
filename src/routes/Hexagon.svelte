<script lang="ts">
	let {
		cx,
		cy,
		r,
		stroke = undefined,
		fill
	}: { cx: number; cy: number; r: number; stroke?: `#${string}`; fill: `#${string}` } = $props();
	let northY = cy - r;
	let eastX = cx + r * Math.cos(Math.PI / 6);
	let northCornerY = cy - r * Math.sin(Math.PI / 6);
	let southCornerY = cy + r * Math.sin(Math.PI / 6);
	let southY = cy + r;
	let westX = cx - r * Math.cos(Math.PI / 6);
</script>

<path
	d={`M ${cx},${northY} L ${westX},${northCornerY} ${westX},${southCornerY} ${cx},${southY} ${eastX},${southCornerY} ${eastX},${northCornerY} z`}
	{stroke}
	{fill}
/>
