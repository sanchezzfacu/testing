const palindrome = string => {
    return string
        .split('')
        .reverse()
        .join('')
}

const average = array => {
    let sum = 0;
    array.forEach(num => {
        sum += num
    });
    return sum / array.length
}

function sumArray(arr) {
    let result = arr.reduce((acc, el) => {
        let result = acc += el
        return result
    },0)

    return result
}

function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    let container = []
    
    for(let i = 0; i < arr.length; i++) {
        if(max < arr[i]) max = arr[i]
        if(min > arr[i]) min = arr[i]
    }
    container.push(min, max)
    return container
}

function sliceAtParam(string, limit) {
    let finalString = string.slice(0, limit)
    return finalString
}

function endWithParam(string, end) {
    if(string.endsWith(end)) return true
    return false
}

module.exports = {
    palindrome,
    average,
    sumArray,
    findMaxMin,
    sliceAtParam,
    endWithParam
}