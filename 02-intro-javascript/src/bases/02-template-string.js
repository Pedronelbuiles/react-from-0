const name = 'Pedro Nel';
const lastname = 'Builes Moreno';

const fullName = `${name} ${lastname}`;

console.log(fullName)

const getSaludo = (fullName) => {
    return `Hello ${fullName}`;
}

console.log(`Esto es un texto: ${getSaludo(fullName)}`)