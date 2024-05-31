const arrayOne = [1, 2, 3, 4];

let arrayTwo = [...arrayOne, 5];

const arrayTrhee = arrayTwo.map(element => element ** 2)

console.log(arrayOne)
console.log(arrayTwo)
console.log(arrayTrhee)