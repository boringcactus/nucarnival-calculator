import { describe, expect, it, test } from 'vitest';
import { formatDuration, mergeDuration, splitDuration, updateDuration } from './Duration';

test('splitDuration', () => {
	const egg = splitDuration((2 * 60 + 3) * 60 + 4);
	expect(egg.hours).toBe(2);
	expect(egg.minutes).toBe(3);
	expect(egg.seconds).toBe(4);
});

test('mergeDuration', () => {
	const egg = mergeDuration({ hours: 2, minutes: 3, seconds: 4 });
	expect(egg).toBe(2 * 3600 + 3 * 60 + 4);
});

describe('updateDuration', () => {
	it('sets hours', () => {
		const egg = mergeDuration({ hours: 2, minutes: 3, seconds: 4 });
		const bug = updateDuration(egg, { hours: 5 });
		expect(bug).toBe(5 * 3600 + 3 * 60 + 4);
	});

	it('sets minutes', () => {
		const egg = mergeDuration({ hours: 2, minutes: 3, seconds: 4 });
		const bug = updateDuration(egg, { minutes: 5 });
		expect(bug).toBe(2 * 3600 + 5 * 60 + 4);
	});

	it('sets seconds', () => {
		const egg = mergeDuration({ hours: 2, minutes: 3, seconds: 4 });
		const bug = updateDuration(egg, { seconds: 5 });
		expect(bug).toBe(2 * 3600 + 3 * 60 + 5);
	});
});

test('formatDuration', () => {
	const egg = mergeDuration({ hours: 2, minutes: 3, seconds: 4 });
	expect(formatDuration(egg, { showHours: true })).toBe('2:03:04');
	expect(formatDuration(egg, { showHours: false })).toBe('2:03:04');

	const bug = mergeDuration({ minutes: 5, seconds: 6 });
	expect(formatDuration(bug, { showHours: true })).toBe('0:05:06');
	expect(formatDuration(bug, { showHours: false })).toBe('05:06');
});
