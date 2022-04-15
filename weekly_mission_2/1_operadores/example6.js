const countries6=['Mexico','Canada','Alemania','Rusia','Peru']

const  countriesFirstThreeLetters= countries6.map((country)=>
country.toUpperCase().slice(0,3))  //slice marca el rango que se quiere buscar

console.log("Ejemplo 6: uso de slice para obtener una logitud marcada")
console.log(countriesFirstThreeLetters)