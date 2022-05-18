const exp = require('constants')
const { palindrome, average } = require('../excercise.js')


describe('palindrome', () => {

    test('should flip it out', () => {
        const result = palindrome('uruguay')
        expect(result).toBe('yauguru')
    })

    test('it is the same from both sides', () => {
        const result = palindrome('neuquen')
        expect(result).toBe('neuquen')        
    })

    test('should return the string reversed', () => {
        const result = palindrome('taza')
        expect(result).toBe('azat')
    })
})