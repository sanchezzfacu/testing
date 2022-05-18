const { endWithParam } = require('../excercise')

describe('end with param', () => {
    it('should return true', () => {
        expect(endWithParam('learning', 'ing')).toBeTruthy()
    })
    it('should return false', () => {
        expect(endWithParam('javascript', 'thon')).toBeFalsy()
    })
})