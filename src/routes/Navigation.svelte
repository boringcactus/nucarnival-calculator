<script lang="ts">
	import Hexagon from './Hexagon.svelte';
	import HexagonFrame from './HexagonFrame.svelte';
	import Plate from './Plate.svelte';
	import LightningBoltRaw from './LightningBoltRaw.svelte';

	let {
		class: inheritClass = '',
		energyCurrent,
		energyMax,
		intimacyCurrent,
		intimacyMax
	}: {
		class?: string;
		energyCurrent: number;
		energyMax: number;
		intimacyCurrent: number;
		intimacyMax: number;
	} = $props();
</script>

<svg viewBox="0 0 458 805" class={`${inheritClass} [image-rendering:crisp-edges]`}>
	<defs>
		<linearGradient id="journey-plate" x1="0" y1="0.2" x2="1" y2="0.6">
			<stop offset="0%" stop-color="#7C5C36" />
			<stop offset="49.9%" stop-color="#7C5C36" />
			<stop offset="50.1%" stop-color="#A28253" />
			<stop offset="100%" stop-color="#A28253" />
		</linearGradient>
	</defs>
	<a href="#journey" class="no-underline">
		<HexagonFrame cx={210} cy={424} r={187} />
		<Hexagon cx={210} cy={424} r={174} fill="#F6DA9B" />
		<Hexagon cx={210} cy={424} r={168} fill="#F3D187" />
		<Hexagon cx={210} cy={424} r={160} stroke="#C09435" fill="#F7D389" />
		<text x="210" y="410" font-size="120px" text-anchor="middle">🗺️</text>
		<text
			x="210"
			y="517"
			class="uppercase"
			fill="#58503D"
			stroke="white"
			font-weight="700"
			font-size="40px"
			stroke-width="3"
			text-anchor="middle"
			stroke-linejoin="round">Journey</text
		>
		<Plate cx={210} cy={452} w={226} fill="url(#journey-plate)" />
		<LightningBoltRaw colorFor="energy" x={111} y={438} />
		<text x="210" y="462" fill="white" font-weight="700" font-size="30px" text-anchor="middle"
			>{energyCurrent}/{energyMax}</text
		>
	</a>
	<a href="#intimacy" class="no-underline">
		<HexagonFrame cx={335} cy={142} r={142} />
		<Hexagon cx={335} cy={142} r={132} stroke="#CEB99C" fill="#F4EDE5" />
		<Hexagon cx={335} cy={142} r={122} stroke="#D9C8B6" fill="#EEE0D5" />
		<text x="335" y="120" font-size="80px" text-anchor="middle">🔑</text>
		<text
			x="335"
			y="221"
			class="uppercase"
			fill="#3C382D"
			stroke="white"
			font-weight="700"
			font-size="35px"
			stroke-width="2"
			text-anchor="middle">Intimacy</text
		>
		<Plate cx={335} cy={161} w={168} fill="#FCF5EF" />
		<LightningBoltRaw colorFor="intimacy" x={263} y={147} />
		<text x="343" y="171" fill="#BE8C43" font-weight="700" font-size="30px" text-anchor="middle"
			>{intimacyCurrent}/{intimacyMax}</text
		>
	</a>
	<a href="#workshop" class="no-underline">
		<HexagonFrame cx={100} cy={688} r={115} />
		<Hexagon cx={100} cy={688} r={105} stroke="#CEB99C" fill="#F4EDE5" />
		<Hexagon cx={100} cy={688} r={95} stroke="#D9C8B6" fill="#EEE0D5" />
		<text x="100" y="697" font-size="70px" text-anchor="middle">🧪</text>
		<text
			x="100"
			y="739"
			class="uppercase"
			fill="#3C382D"
			stroke="white"
			font-weight="700"
			font-size="25px"
			stroke-width="2"
			text-anchor="middle">Workshop</text
		>
	</a>
	<a href="#exploration" class="no-underline">
		<HexagonFrame cx={318} cy={688} r={115} />
		<Hexagon cx={318} cy={688} r={105} stroke="#CEB99C" fill="#F4EDE5" />
		<Hexagon cx={318} cy={688} r={95} stroke="#D9C8B6" fill="#EEE0D5" />
		<text x="318" y="697" font-size="70px" text-anchor="middle">🗺️</text>
		<text
			x="318"
			y="737"
			class="uppercase"
			fill="#3C382D"
			stroke="white"
			font-weight="700"
			font-size="23px"
			stroke-width="2"
			text-anchor="middle">Exploration</text
		>
	</a>
</svg>
