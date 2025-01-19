import Duration from '$lib/Duration';

export default class WorkshopSettings {
	silverSpeed = $state(new Duration(2 * 60 * 60));
	goldSpeed = $state(new Duration((2 * 60 + 20) * 60));
}
