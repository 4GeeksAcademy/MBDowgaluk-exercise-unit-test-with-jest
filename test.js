test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.75); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("Un dolar es igual a 146.26 yenes", function() {
    const { fromDollarToYen } = require('./app.js');
    const yenes = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBe(146.26);
    expect(fromDollarToYen(1)).toBeCloseTo(146.26);  
})
test("Un dolar(string) es igual a 146.26 yenes", function() {
    const { fromDollarToYen } = require('./app.js');
    const yenes = fromDollarToYen("1");
    const expected = ("1" / 1.07) * 156.5;
    expect(fromDollarToYen("1")).toBe(146.26); 
})
test("hola es un string, retorna mensaje de error", function() {
    const { fromDollarToYen } = require('./app.js');
    const yenes = fromDollarToYen("hola");
    const expected = ("hola" / 1.07) * 156.5;
    expect(fromDollarToYen("hola")).toBe("Error, por favor colocar un número"); 
})
test("1.000 yenes es igual a 5.56 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87;
    expect(fromYenToPound(1000)).toBe(5.56); 
})
test("1.000 yenes (string) es igual a 5.56 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound("1000");
    const expected = ("1000" / 156.5) * 0.87;
    expect(fromYenToPound("1000")).toBe(5.56); 
})
test("Mil es un string, retorna mensaje de error", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound("mil");
    const expected = ("mil" / 156.5) * 0.87;
    expect(fromYenToPound("mil")).toBe("Error, por favor colocar un número"); 
})