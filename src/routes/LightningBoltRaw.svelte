<script lang="ts">
	let {
		colorFor,
		x = 0,
		y = 0
	}: { colorFor: 'energy' | 'intimacy'; x?: number; y?: number } = $props();
	let fill: `#${string}` = $state('#000000');
	switch (colorFor) {
		case 'energy':
			fill = '#FFB51E';
			break;
		case 'intimacy':
			fill = '#ED23EB';
			break;
	}
</script>

<path
	d="M {x + 4},{y + 1} l -4,14 7,0 -1,13 14,-20 -9,0 3,-7 z"
	stroke="black"
	stroke-width="2"
	{fill}
	stroke-linejoin="round"
/>
