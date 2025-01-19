export default class Duration {
	value: number;
	constructor(value: number) {
		this.value = value;
	}

	get hours() {
		return Math.floor(this.value / 3600);
	}

	get minutes() {
		return Math.floor(this.value / 60) % 60;
	}

	get seconds() {
		return this.value % 60;
	}

	set hours(value: number) {
		this.value = (value * 60 + this.minutes) * 60 + this.seconds;
	}

	set minutes(value: number) {
		this.value = (this.hours * 60 + value) * 60 + this.seconds;
	}

	set seconds(value: number) {
		this.value = (this.hours * 60 + this.minutes) * 60 + value;
	}
}
