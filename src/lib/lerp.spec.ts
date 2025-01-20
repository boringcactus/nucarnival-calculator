import { expect, it } from 'vitest';
import lerp from './lerp';

it('returns null if the target has been hit', () => {
	const result = lerp(10, 9, new Date(), 0, 10);
	expect(result).toBeNull();
});
