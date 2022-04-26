const spiderman= require('./../app/spiderman')

describe("Unit Test for Spiderman class",()=>{
    test('1° Create an spiderman object',()=>{
        const andrewGarfield=new spiderman("Spiderman Sony",31,"Andrew Garfield",2,"Sony")
        expect(andrewGarfield.nombre).toBe("Spiderman Sony");
        expect(andrewGarfield.edad).toBe(31);
        expect(andrewGarfield.actor).toBe("Andrew Garfield");
        expect(andrewGarfield.noPelicula).toBe(2);
        expect(andrewGarfield.estudio).toBe("Sony");
    });
})