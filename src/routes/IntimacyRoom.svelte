<script lang="ts">
	import NumberInput from './NumberInput.svelte';
	import { guessRoomSize } from '$lib/intimacyRoomSize';

	let percentComplete = $state(54.06);
	let haveNormalGifts = $state(0);
	let explicitNormalGiftPercent: number | undefined = $state(undefined);
	let haveRareGifts = $state(0);
	let explicitRareGiftPercent: number | undefined = $state(undefined);
	let haveSRGifts = $state(0);
	let explicitSRGiftPercent: number | undefined = $state(undefined);
	let haveSSRGifts = $state(0);
	let explicitSSRGiftPercent: number | undefined = $state(undefined);
	let haveBonusSRGifts = $state(0);
	let roomSizeGuess = $derived(
		guessRoomSize({
			explicitNormalGiftPercent,
			explicitRareGiftPercent,
			explicitSRGiftPercent,
			explicitSSRGiftPercent,
			percentComplete
		})
	);

	function roundPercentage(proportion: number) {
		return Math.round(proportion * 100 * 100) / 100;
	}

	let implicitNormalGiftPercent = $derived(
		roomSizeGuess !== null ? roundPercentage(100 / roomSizeGuess) : '?'
	);
	let implicitRareGiftPercent = $derived(
		roomSizeGuess !== null ? roundPercentage(200 / roomSizeGuess) : '?'
	);
	let implicitSRGiftPercent = $derived(
		roomSizeGuess !== null ? roundPercentage(500 / roomSizeGuess) : '?'
	);
	let implicitSSRGiftPercent = $derived(
		roomSizeGuess !== null ? roundPercentage(2000 / roomSizeGuess) : '?'
	);

	let pointsNeeded = $derived.by(() => {
		if (roomSizeGuess === null) return null;
		let pointsAlreadyHad = Math.round(((percentComplete / 100) * roomSizeGuess) / 100) * 100;
		let pointsComing =
			haveNormalGifts * 100 +
			haveRareGifts * 200 +
			haveSRGifts * 500 +
			haveSSRGifts * 2000 +
			haveBonusSRGifts * 500;
		return Math.max(0, roomSizeGuess - (pointsAlreadyHad + pointsComing));
	});
</script>

<div>
	<h3>Intimacy Room</h3>
	<div>
		💗 <NumberInput class="w-24" bind:value={percentComplete} max={100} min={0} step={0.01} />%
	</div>
	{#if explicitNormalGiftPercent === undefined && explicitRareGiftPercent === undefined && explicitSRGiftPercent === undefined && explicitSSRGiftPercent === undefined}
		<p>
			Some completion percentages can occur with a lot of different intimacy rooms, so if the
			percentages look wrong, type one in and the rest should line up nicely.
		</p>
	{/if}
	<div class="w-full overflow-x-scroll">
		<table>
			<tbody>
				<tr>
					<th>Have</th>
					<td><NumberInput class="w-20" bind:value={haveNormalGifts} min={0} /></td>
					<td><NumberInput class="w-20" bind:value={haveRareGifts} min={0} /></td>
					<td><NumberInput class="w-20" bind:value={haveSRGifts} min={0} /></td>
					<td><NumberInput class="w-20" bind:value={haveSSRGifts} min={0} /></td>
					<td><NumberInput class="w-20" bind:value={haveBonusSRGifts} min={0} /></td>
				</tr>
				<tr>
					<th>Points</th>
					<td>+100</td>
					<td>+200</td>
					<td>+500</td>
					<td>+2000</td>
					<td>+500</td>
				</tr>
				<tr>
					<th>Percent</th>
					<td
						><NumberInput
							class="w-20"
							bind:value={explicitNormalGiftPercent}
							step={0.01}
							placeholder={implicitNormalGiftPercent}
						/></td
					>
					<td
						><NumberInput
							class="w-20"
							bind:value={explicitRareGiftPercent}
							step={0.01}
							placeholder={implicitRareGiftPercent}
						/></td
					>
					<td
						><NumberInput
							class="w-20"
							bind:value={explicitSRGiftPercent}
							step={0.01}
							placeholder={implicitSRGiftPercent}
						/></td
					>
					<td
						><NumberInput
							class="w-20"
							bind:value={explicitSSRGiftPercent}
							step={0.01}
							placeholder={implicitSSRGiftPercent}
						/></td
					>
					<td
						><NumberInput
							class="w-20"
							bind:value={explicitSRGiftPercent}
							step={0.01}
							placeholder={implicitSRGiftPercent}
						/></td
					>
				</tr>
				{#if pointsNeeded !== null}
					<tr>
						<th>Need</th>
						<td>{Math.ceil(pointsNeeded / 100)}</td>
						<td>{Math.ceil(pointsNeeded / 200)}</td>
						<td>{Math.ceil(pointsNeeded / 500)}</td>
						<td>{Math.ceil(pointsNeeded / 2000)}</td>
						<td>{Math.ceil(pointsNeeded / 500)}</td>
					</tr>
				{/if}
			</tbody>
		</table>
	</div>
</div>
