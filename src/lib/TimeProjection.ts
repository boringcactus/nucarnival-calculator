import { formatDuration } from './Duration';

export default class TimeProjection {
	private readonly seconds: number;
	private atDate: Date;
	constructor(seconds: number, now: Date) {
		this.seconds = seconds;
		this.atDate = new Date(now.valueOf() + seconds * 1000);
	}

	formattedDuration(options: { showHours: boolean }) {
		return formatDuration(this.seconds, options);
	}

	formattedTime() {
		return this.atDate.toLocaleTimeString();
	}
}
