import TimeProjection from '$lib/TimeProjection';
import type Duration from '$lib/Duration';

export default function lerp(
	current: number,
	target: number,
	now: Date,
	untilNext: Duration,
	minutesPer: number
): TimeProjection | null {
	const remaining = target - current;
	if (remaining <= 0) return null;
	const remainingSeconds = remaining * (minutesPer * 60) - (minutesPer * 60 - untilNext.value);
	return new TimeProjection(remainingSeconds, now);
}
