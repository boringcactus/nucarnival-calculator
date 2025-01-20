import { expect, test } from 'vitest';
import { guessRoomSize } from '$lib/intimacyRoomSize';

function testGuessesSizeExplicit(roomSize: number) {
	expect(guessRoomSize({ explicitNormalGiftPercent: (100 / roomSize) * 100 })).toBe(roomSize);
	expect(guessRoomSize({ explicitRareGiftPercent: (200 / roomSize) * 100 })).toBe(roomSize);
	expect(guessRoomSize({ explicitSRGiftPercent: (500 / roomSize) * 100 })).toBe(roomSize);
	expect(guessRoomSize({ explicitSSRGiftPercent: (2000 / roomSize) * 100 })).toBe(roomSize);
}

test('guesses already-complete room with explicit percentages', () => {
	testGuessesSizeExplicit(10_000);
});

test('guesses R ally room sizes with explicit percentages', () => {
	for (const roomSize of [8_000, 15_000, 30_000, 45_000]) {
		testGuessesSizeExplicit(roomSize);
	}
});

test('guesses SR ally room sizes with explicit percentages', () => {
	for (const roomSize of [16_000, 32_000, 64_000, 96_000]) {
		testGuessesSizeExplicit(roomSize);
	}
});

test('guesses SSR ally room sizes with explicit percentages', () => {
	for (const roomSize of [18_000, 36_000, 71_000, 106_000, 177_000]) {
		testGuessesSizeExplicit(roomSize);
	}
});

test('uses smallest feasible fallback for suspiciously convenient values', () => {
	expect(guessRoomSize({ percentComplete: 1 })).toBe(10_000);
});

test('does its best with some actual values i have right now', () => {
	expect(guessRoomSize({ percentComplete: 42.5 })).toBe(8_000); // actually 27200/64000 but 3400 looks just as nice as 27200
	expect(guessRoomSize({ percentComplete: 53.75 })).toBe(8_000); // actually 34400/64000 but 4300 looks just as nice as 34400
	expect(guessRoomSize({ percentComplete: 1.88 })).toBe(16_000); // actually 1800/96000 but 300.8 looks nicer than 1804.8
	expect(guessRoomSize({ percentComplete: 5.31 })).toBe(32_000); // actually 5100/96000 but 1699.2 looks nicer than 5097.6
	expect(guessRoomSize({ percentComplete: 27.81 })).toBe(32_000); // actually 17800/64000 but 8899.2 looks nicer than 17798.4
	// WOOOOO THIS ONE IS OLIVINE
	expect(guessRoomSize({ percentComplete: 54.06 })).toBe(32_000); // actually 34600/64000 but 17299.2 looks nicer than 34598.4
	expect(guessRoomSize({ percentComplete: 74.69 })).toBe(32_000); // actually 47800/64000 but 23900.8 looks nicer than 47801.6
	expect(guessRoomSize({ percentComplete: 29.53 })).toBe(64_000);
	expect(guessRoomSize({ percentComplete: 32.97 })).toBe(64_000);
	expect(guessRoomSize({ percentComplete: 60.78 })).toBe(64_000);
	expect(guessRoomSize({ percentComplete: 66.72 })).toBe(64_000);
});
