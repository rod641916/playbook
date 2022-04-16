const countries6=['Mexico','Canada','Alemania','Rusia','Peru']

const countriesContainingLand= countries6.filter((country) =>
    country.includes('land'))

console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)


const countriesEndsByI = countries6.filter((country)=>country.endsWith('ia')) 
console.log("Paises que terminan con ia")
console.log(countriesEndsByI)