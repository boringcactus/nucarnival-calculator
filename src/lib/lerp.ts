import TimeProjection from '$lib/TimeProjection';

export default function lerp(
	current: number,
	target: number,
	now: Date,
	minutesPer: number
): TimeProjection | null {
	const remaining = target - current;
	if (remaining <= 0) return null;
	const remainingSeconds = remaining * (minutesPer * 60);
	return new TimeProjection(remainingSeconds, now);
}
