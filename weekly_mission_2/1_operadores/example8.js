const scores = [
    {name:'A',score:95},
    {name:'L',score:98},
    {name:'M',score:80},
    {name:'E',score:50},
    {name:'M',score:85},
    {name:'J',score:100},
]

const scoresGreaterEighty=scores.filter((score)=>score.score>80)
console.log("Ejemplo 8: Filtrado elenetos por score")
console.log(scoresGreaterEighty)