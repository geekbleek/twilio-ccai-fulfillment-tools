import { Greeter } from '.';

describe('My Greeter', () => {
	it('should work', () => {
		expect(Greeter('Carl')).toBe('Hello Carl');
	});
});
