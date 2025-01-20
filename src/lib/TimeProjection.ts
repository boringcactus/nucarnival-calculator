import Duration from '$lib/Duration';

export default class TimeProjection {
	private readonly seconds: number;
	private atDate: Date;
	constructor(seconds: number, now: Date) {
		this.seconds = seconds;
		this.atDate = new Date(now.valueOf() + seconds * 1000);
	}

	formattedDuration(options: { hours: boolean }) {
		const duration = new Duration(this.seconds);
		return duration.formatted(options);
	}

	formattedTime() {
		return this.atDate.toLocaleTimeString();
	}
}
