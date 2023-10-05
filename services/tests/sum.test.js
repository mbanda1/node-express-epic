import { sum, Anagrams } from '../sum.js';


describe('Tests', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });


    test('Anagrams 1', () => {
        const expected = true;
        const result = Anagrams('below', 'elbo w')
        expect(expected).toEqual(result);
    });

    test('Anagrams 2', () => {
        const expected = false;
        const result = Anagrams('belows', 'elbow')
        expect(expected).toEqual(result);
    });
})

