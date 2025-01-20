// https://nucarnival.miraheze.org/wiki/Intimacy#Intimacy_meter
const possibleRoomSizesKilopoints = [10, 8, 15, 30, 45, 16, 32, 64, 96, 18, 36, 71, 106, 177];

function bestRoomSize(proportion: number, expectedPoints: number | undefined = undefined) {
	const calcError = (roomSize: number) => {
		const points = proportion * roomSize;
		if (expectedPoints !== undefined) {
			return Math.abs(points - expectedPoints);
		} else {
			// whatever the actual quantity of points is, it has to be a multiple of 100
			return Math.abs(points - Math.round(points / 100) * 100);
		}
	};
	let result = possibleRoomSizesKilopoints[0] * 1000;
	let resultError = 999999;
	for (const roomSizeKilopoints of possibleRoomSizesKilopoints) {
		const roomSize = roomSizeKilopoints * 1000;
		const thisError = calcError(roomSize);
		if (thisError < resultError) {
			result = roomSize;
			resultError = thisError;
		}
	}
	return result;
}

export function guessRoomSize({
	explicitNormalGiftPercent,
	explicitRareGiftPercent,
	explicitSRGiftPercent,
	explicitSSRGiftPercent,
	percentComplete
}: {
	explicitNormalGiftPercent?: number;
	explicitRareGiftPercent?: number;
	explicitSRGiftPercent?: number;
	explicitSSRGiftPercent?: number;
	percentComplete?: number;
}): number | null {
	if (explicitNormalGiftPercent !== undefined) {
		return bestRoomSize(explicitNormalGiftPercent / 100, 100);
	}
	if (explicitRareGiftPercent !== undefined) {
		return bestRoomSize(explicitRareGiftPercent / 100, 200);
	}
	if (explicitSRGiftPercent !== undefined) {
		return bestRoomSize(explicitSRGiftPercent / 100, 500);
	}
	if (explicitSSRGiftPercent !== undefined) {
		return bestRoomSize(explicitSSRGiftPercent / 100, 2000);
	}
	if (percentComplete !== undefined) {
		return bestRoomSize(percentComplete / 100);
	}
	return null;
}
