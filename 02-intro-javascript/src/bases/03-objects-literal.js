const person = {
    name: 'Pedro Nel',
    lastname: 'Builes Moreno',
    age: 99,
    direction: {
        street: 'Arigato',
        number: 123,
        city: 'Tokio',
        lat: 12.3232,
        lng: 34.9533321
    }
}

console.table(person)
console.log(person)

const personTwo = {...person};
personTwo.name = 'len ordep';

console.log(person)
console.log(personTwo)