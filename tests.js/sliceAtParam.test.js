const { sliceAtParam } = require('../excercise')

describe('slice at param', () => {
    it('should slice string at 4 length', () => {
        const result = sliceAtParam('testing', 4)
        expect(result).toBe('test')
    })

    it('should slice string at 5 length', () => {
        const result = sliceAtParam('learning to test', 5)
        expect(result).toBe('learn')
    })

    it('should slice string at 8 length', () => {
        const result = sliceAtParam('frontend developer', 8)
        expect(result).toBe('frontend')
    })
})