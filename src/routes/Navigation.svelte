<script lang="ts">
	import Hexagon from './Hexagon.svelte';
	import HexagonFrame from './HexagonFrame.svelte';
	import Plate from './Plate.svelte';
	import LightningBoltRaw from './LightningBoltRaw.svelte';
	import { formatDuration } from '$lib/Duration.js';

	let {
		class: inheritClass = '',
		energyCurrent,
		energyMax,
		energyUntilNext,
		intimacyCurrent,
		intimacyMax,
		intimacyUntilNext
	}: {
		class?: string;
		energyCurrent: number;
		energyMax: number;
		energyUntilNext: number;
		intimacyCurrent: number;
		intimacyMax: number;
		intimacyUntilNext: number;
	} = $props();
</script>

<svg class={`${inheritClass} [image-rendering:crisp-edges]`} viewBox="0 0 458 805">
	<defs>
		<linearGradient id="journey-plate" x1="0" x2="1" y1="0.2" y2="0.6">
			<stop offset="0%" stop-color="#7C5C36" />
			<stop offset="49.9%" stop-color="#7C5C36" />
			<stop offset="50.1%" stop-color="#A28253" />
			<stop offset="100%" stop-color="#A28253" />
		</linearGradient>
	</defs>
	<a class="no-underline" href="#journey">
		<HexagonFrame cx={210} cy={424} r={187} />
		<Hexagon cx={210} cy={424} fill="#F6DA9B" r={174} />
		<Hexagon cx={210} cy={424} fill="#F3D187" r={168} />
		<Hexagon cx={210} cy={424} fill="#F7D389" r={160} stroke="#C09435" />
		<text font-size="120px" text-anchor="middle" x="210" y="410">🗺️</text>
		<text
			class="uppercase"
			fill="#58503D"
			font-size="40px"
			font-weight="700"
			text-anchor="middle"
			x="210"
			y="517">Journey</text
		>
		<Plate cx={210} cy={452} fill="url(#journey-plate)" w={226} />
		<LightningBoltRaw colorFor="energy" x={111} y={438} />
		<text fill="white" font-size="30px" font-weight="700" text-anchor="middle" x="210" y="462"
			>{energyCurrent}/{energyMax}</text
		>
		{#if energyCurrent < energyMax}
			<rect x="149" y="549" width="124" height="41" fill="#000000A0" rx="9" />
			<text
				fill="#B3A38A"
				font-size="25px"
				text-anchor="start"
				stroke="black"
				font-weight="700"
				x="156"
				y="578">⏱️ {formatDuration(energyUntilNext, { showHours: false })}</text
			>
		{/if}
	</a>
	<a class="no-underline" href="#intimacy">
		<HexagonFrame cx={335} cy={142} r={142} />
		<Hexagon cx={335} cy={142} fill="#F4EDE5" r={132} stroke="#CEB99C" />
		<Hexagon cx={335} cy={142} fill="#EEE0D5" r={122} stroke="#D9C8B6" />
		<text font-size="80px" text-anchor="middle" x="335" y="120">🔑</text>
		<text
			class="uppercase"
			fill="#3C382D"
			font-size="35px"
			font-weight="700"
			text-anchor="middle"
			x="335"
			y="221">Intimacy</text
		>
		<Plate cx={335} cy={161} fill="#FCF5EF" w={168} />
		<LightningBoltRaw colorFor="intimacy" x={263} y={147} />
		<text fill="#BE8C43" font-size="30px" font-weight="700" text-anchor="middle" x="343" y="171"
			>{intimacyCurrent}/{intimacyMax}</text
		>
		{#if intimacyCurrent < intimacyMax}
			<rect x="273" y="230" width="124" height="41" fill="#000000A0" rx="9" />
			<text
				fill="#B3A38A"
				font-size="25px"
				text-anchor="start"
				stroke="black"
				font-weight="700"
				x="279"
				y="260">⏱️ {formatDuration(intimacyUntilNext, { showHours: false })}</text
			>
		{/if}
	</a>
	<a class="no-underline" href="#workshop">
		<HexagonFrame cx={100} cy={688} r={115} />
		<Hexagon cx={100} cy={688} fill="#F4EDE5" r={105} stroke="#CEB99C" />
		<Hexagon cx={100} cy={688} fill="#EEE0D5" r={95} stroke="#D9C8B6" />
		<text font-size="70px" text-anchor="middle" x="100" y="697">🧪</text>
		<text
			class="uppercase"
			fill="#3C382D"
			font-size="25px"
			font-weight="700"
			text-anchor="middle"
			x="100"
			y="739">Workshop</text
		>
	</a>
	<a class="no-underline" href="#exploration">
		<HexagonFrame cx={318} cy={688} r={115} />
		<Hexagon cx={318} cy={688} fill="#F4EDE5" r={105} stroke="#CEB99C" />
		<Hexagon cx={318} cy={688} fill="#EEE0D5" r={95} stroke="#D9C8B6" />
		<text font-size="70px" text-anchor="middle" x="318" y="697">🗺️</text>
		<text
			class="uppercase"
			fill="#3C382D"
			font-size="23px"
			font-weight="700"
			text-anchor="middle"
			x="318"
			y="737">Exploration</text
		>
	</a>
</svg>
