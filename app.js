// Defino el objeto con las tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra esterlina
}

// Implemento la función fromEuroToDollar
function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD;
}

// Defino la función sum
function sum(a, b) {
    return a + b;
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }