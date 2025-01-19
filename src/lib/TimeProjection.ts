import Duration from '$lib/Duration';

export default class TimeProjection {
	private readonly seconds: number;
	private atDate: Date;
	constructor(seconds: number, now: Date) {
		this.seconds = seconds;
		this.atDate = new Date(now.valueOf() + seconds * 1000);
	}

	formattedDuration() {
		const duration = new Duration(this.seconds);
		return [
			duration.hours.toString().padStart(2, '0'),
			duration.minutes.toString().padStart(2, '0'),
			duration.seconds.toString().padStart(2, '0')
		].join(':');
	}

	formattedTime() {
		return this.atDate.toLocaleTimeString();
	}
}
