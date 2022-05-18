const { findMaxMin } = require('../excercise')

describe('findMaxMin', () => {
    it('should return [10,50]', () => {
        const result = findMaxMin([50,45,20,28,10])
        expect(result).toStrictEqual([10,50])
    })
    it('should return [40,840]', () => {
        const result = findMaxMin([450,78,685,54,40, 840, 89])
        expect(result).toStrictEqual([40,840])
    })
    it('should return [12,150]', () => {
        const result = findMaxMin([150, 84, 70, 78, 85, 84, 120, 150, 12])
        expect(result).toStrictEqual([12, 150])
    })
})