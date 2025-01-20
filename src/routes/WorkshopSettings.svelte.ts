import { mergeDuration } from '$lib/Duration';

export default class WorkshopSettings {
	silverSpeed = $state(mergeDuration({ hours: 2 }));
	goldSpeed = $state(mergeDuration({ hours: 2, minutes: 20 }));
}
