const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    let valueInDollarRedondeado = valueInDollar.toFixed(2);
    let valueInDollarNum = 0;
    if (isNaN(valueInDollarRedondeado)){
        valueInDollarNum = "Error, por favor colocar un número";
    }
    else{
        valueInDollarNum = parseFloat(valueInDollarRedondeado)
    }
    return valueInDollarNum;
};
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = (valueInDollar / 1.07) * 156.5;
    let valueInYenRedondeado = valueInYen.toFixed(2);
    let valueInYenNum = 0;
    if (isNaN(valueInYenRedondeado)){
        valueInYenNum = "Error, por favor colocar un número";
    }
    else {
        valueInYenNum = parseFloat(valueInYenRedondeado);
    }
    return valueInYenNum;
};
const fromYenToPound = function(valueInYen) {
    let valueInPound = (valueInYen / 156.5) * 0.87;
    let valueInPoundRedondeado = valueInPound.toFixed(2);
    let valueInPoundNum = 0;
    if (isNaN(valueInPoundRedondeado)){
        valueInPoundNum = "Error, por favor colocar un número";
    }
    else{
        valueInPoundNum = parseFloat(valueInPoundRedondeado)
    }
    return valueInPoundNum;
};


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };