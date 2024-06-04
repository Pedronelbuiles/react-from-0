import { getHeroById } from "./bases/08-import-export.js";

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)
            hero === undefined ? reject('no se pudo encontrar el hero') : resolve(hero)
        }, 2000);
    })
}

getHeroByIdAsync(2)
.then(console.log)
.catch(console.warn)
