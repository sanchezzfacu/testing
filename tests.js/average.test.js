const { average } = require ('../excercise')

describe('average', () => {
    test('should return 20', () => {
        const result = average([15,20,25])
        expect(result).toBe(20)
    })
    test('should return 85', () => {
        const result = average([50,159,46])
        expect(result).toBe(85)
    })
}) 