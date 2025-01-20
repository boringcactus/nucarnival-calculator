import { expect, it } from 'vitest';
import lerp from './lerp';
import Duration from '$lib/Duration';

it('returns null if the target has been hit', () => {
	const result = lerp(10, 9, new Date(), new Duration(0), 10);
	expect(result).toBeNull();
});
