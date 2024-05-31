const person = {
    name: 'Pedro Nel',
    level: 99,
    clave: 'clave1'
}

const {name, clave, level} = person

console.log(name)
console.log(level)
console.log(clave)

const usandoContexto = ({name, clave, level, range = 'master'}) => {
    console.log(name, level, clave, range)

    return {
        keyName: clave,
        age: level,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const {keyName, age, latlng: {lat, lng}} = usandoContexto(person)

console.log(keyName, age)
console.log(lat, lng)