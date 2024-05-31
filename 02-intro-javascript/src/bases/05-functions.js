const saludar = (name) => `Hello ${name}`

console.log(saludar('Pedro Nel Builes Moreno'))

const getUser = () => (
    {
        uid: 'ASDCDFV',
        username: 'loMasRico'
    }
)

console.log(getUser())

const getActiveUser = (name) => (
    {
        uid: 'ASDFSAF',
        username: name
    }
);

console.log(getActiveUser('PedroNelLoMasRicoMiAmor'))