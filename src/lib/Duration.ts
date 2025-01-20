export default class Duration {
	value: number;
	constructor(value: number) {
		this.value = value;
	}

	get hours() {
		return Math.floor(this.value / 3600);
	}

	set hours(value: number) {
		this.value = (value * 60 + this.minutes) * 60 + this.seconds;
	}

	get minutes() {
		return Math.floor(this.value / 60) % 60;
	}

	set minutes(value: number) {
		this.value = (this.hours * 60 + value) * 60 + this.seconds;
	}

	get seconds() {
		return this.value % 60;
	}

	set seconds(value: number) {
		this.value = (this.hours * 60 + this.minutes) * 60 + value;
	}

	formatted(options: { hours: boolean }) {
		return [
			this.hours > 0 || options.hours ? this.hours.toString() : undefined,
			this.minutes.toString().padStart(2, '0'),
			this.seconds.toString().padStart(2, '0')
		]
			.filter((x) => x !== undefined)
			.join(':');
	}
}
