const sum = require('../sum');

describe('sum function', () => {
    it('should return the sum of two numbers', () => {
        expect(sum(5, 3)).toBe(8);
    });

    it('should throw an error if the inputs are not numbers', () => {
        expect(() => sum('a', 3)).toThrow('Invalid inputs, both arguments must be numbers');
        expect(() => sum(5, 'b')).toThrow('Invalid inputs, both arguments must be numbers');
        expect(() => sum(true, 3)).toThrow('Invalid inputs, both arguments must be numbers');
    });

    it('should work with negative numbers', () => {
        expect(sum(-5, -3)).toBe(-8);
        expect(sum(-5, 5)).toBe(0);
    });

    it('should work with decimal numbers', () => {
        expect(sum(1.5, 2.5)).toBe(4);
        expect(sum(-1.5, 1.5)).toBe(0);
    });
});
