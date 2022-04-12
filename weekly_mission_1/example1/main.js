let myCar=new Object();

myCar.make='Ford';
myCar.model='Mustang';
myCar.year=1969;

console.log(myCar);

const myModule=(()=>{
    const privateFoo="Soy un valor privadom solo me usan dentro de ste objeto";
    const privateBar=[1,2,3,4]
    const baz="Soy un valor que va a ser expuesto"

    const exported={
        publicFoo:"Valor publico, pueden verme desde donde me llamen",
        publocBar:"Otro valor public",
            publicBaz:baz
    }
    return exported
})()
console.log(myModule)