const { sumArray } = require('../excercise')

describe('sumar array', () => {
    test('should sum the items and return 50', () => {
        const result = sumArray([20,10,5,15])
        expect(result).toBe(50)
    });
    test('should sum the items and return 150', () => {
        const result = sumArray([40,10,60,40])
        expect(result).toBe(150)
    })
})