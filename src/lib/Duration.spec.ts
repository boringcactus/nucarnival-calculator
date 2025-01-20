import { expect, it } from 'vitest';
import Duration from './Duration';

it('gets hours, minutes, and seconds', () => {
	const egg = new Duration((2 * 60 + 3) * 60 + 4);
	expect(egg.hours).toBe(2);
	expect(egg.minutes).toBe(3);
	expect(egg.seconds).toBe(4);
	expect(egg.value).toBe(2 * 3600 + 3 * 60 + 4);
});

it('sets hours', () => {
	const egg = new Duration((2 * 60 + 3) * 60 + 4);
	egg.hours = 5;
	expect(egg.hours).toBe(5);
	expect(egg.minutes).toBe(3);
	expect(egg.seconds).toBe(4);
	expect(egg.value).toBe(5 * 3600 + 3 * 60 + 4);
});

it('sets minutes', () => {
	const egg = new Duration((2 * 60 + 3) * 60 + 4);
	egg.minutes = 5;
	expect(egg.hours).toBe(2);
	expect(egg.minutes).toBe(5);
	expect(egg.seconds).toBe(4);
	expect(egg.value).toBe(2 * 3600 + 5 * 60 + 4);
});

it('sets seconds', () => {
	const egg = new Duration((2 * 60 + 3) * 60 + 4);
	egg.seconds = 5;
	expect(egg.hours).toBe(2);
	expect(egg.minutes).toBe(3);
	expect(egg.seconds).toBe(5);
	expect(egg.value).toBe(2 * 3600 + 3 * 60 + 5);
});

it('formats', () => {
	const egg = new Duration((2 * 60 + 3) * 60 + 4);
	expect(egg.formatted({ hours: true })).toBe('2:03:04');
	expect(egg.formatted({ hours: false })).toBe('2:03:04');

	const bug = new Duration(5 * 60 + 6);
	expect(bug.formatted({ hours: true })).toBe('0:05:06');
	expect(bug.formatted({ hours: false })).toBe('05:06');
});
