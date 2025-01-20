export type Duration = {
	seconds: number;
	minutes: number;
	hours: number;
};

export function splitDuration(totalSeconds: number): Duration {
	const seconds = totalSeconds % 60;
	const minutes = Math.floor(totalSeconds / 60) % 60;
	const hours = Math.floor(totalSeconds / 3600);
	return { hours, minutes, seconds };
}

export function mergeDuration({ hours = 0, minutes = 0, seconds = 0 }: Partial<Duration>): number {
	return (hours * 60 + minutes) * 60 + seconds;
}

export function updateDuration(originalSeconds: number, newValues: Partial<Duration>): number {
	const original = splitDuration(originalSeconds);
	const {
		hours = original.hours,
		minutes = original.minutes,
		seconds = original.seconds
	} = newValues;
	return mergeDuration({ hours, minutes, seconds });
}

export function formatDuration(totalSeconds: number, options: { showHours: boolean }): string {
	const { hours, minutes, seconds } = splitDuration(totalSeconds);
	return [
		hours > 0 || options.showHours ? hours.toString() : undefined,
		minutes.toString().padStart(2, '0'),
		seconds.toString().padStart(2, '0')
	]
		.filter((x) => x !== undefined)
		.join(':');
}
