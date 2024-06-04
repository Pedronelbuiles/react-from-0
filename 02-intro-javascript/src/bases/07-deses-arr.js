const personajes = ['Goku', 'Vegeta', 'Trunks']

const [ , , p3 ] = personajes
console.log(p3)

const returnArr = () => {
    return ['ABC', 123]
}

const [letras, numeros] = returnArr()
console.log(letras, numeros)

const usandoEstado= (valor) => {
    return [valor, () => console.log("Hello world")]
}

const [nombre, setNombre] = usandoEstado('Goku')
console.log(nombre)
setNombre()
