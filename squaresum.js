function squareSum(numbers){
    const squaredArr = numbers.map((x) => x ** 2)
    const initialValue = 0
    const sum = squaredArr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
    return sum
    }