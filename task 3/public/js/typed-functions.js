"use strict";
console.group('1. Aprašykite funkcijoms tipus jas deklaruojant');
{
    const multiply = (a, b) => a * b;
    const power = function (base, pow) {
        return base ** pow;
    };
    const squareRoot = (number) => number ** (1 / 2);
    const root = function (base, nthRoot) {
        return base ** (1 / nthRoot);
    };
    const printBlueText = (text) => console.log(`%c${text}`, 'color: #0000ee');
    const num1 = 16;
    const num2 = 4;
    console.log({
        [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
        [`power(${num1}, ${num2})`]: power(num1, num2),
        [`squareRoot(${num1})`]: squareRoot(num1),
        [`root(${num1}, ${num2})`]: root(num1, num2),
    });
    printBlueText('printBlueText funkcijos argumentas');
}
console.groupEnd();
console.group('2. Aprašykite funkcijų tipus prieš deklaruojant funkcijas');
{
    const multiply = (a, b) => a * b;
    const power = function (base, pow) {
        return base ** pow;
    };
    const squareRoot = (number) => number ** (1 / 2);
    const root = function (base, nthRoot) {
        return base ** (1 / nthRoot);
    };
    const printBlueText = (text) => console.log(`%c${text}`, 'color: #0000ee');
    const num1 = 16;
    const num2 = 4;
    console.log({
        [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
        [`power(${num1}, ${num2})`]: power(num1, num2),
        [`squareRoot(${num1})`]: squareRoot(num1),
        [`root(${num1}, ${num2})`]: root(num1, num2),
    });
    printBlueText('printBlueText funkcijos argumentas');
}
console.groupEnd();
//# sourceMappingURL=typed-functions.js.map