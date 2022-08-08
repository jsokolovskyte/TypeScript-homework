"use strict";
console.group('Užduotys');
{
    console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
    {
        const otherNumbers = [1, -8, -6, 7, 5, 1];
        function addPositiveNumbers(arr) {
            const positiveNumberReducer = (sum, num) => (num > 0 ? sum + num : sum);
            return arr.reduce(positiveNumberReducer, 0);
        }
        console.log({
            otherNumbers,
            sumOfPositiveNumbers: addPositiveNumbers(otherNumbers),
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');
    {
        const tvName = ['Lietuviškas', 'Nepriklausomas', 'Kanalas'];
        const tvName1 = ['Lietuvos', 'Respublikos', 'Televizija'];
        const createAcronym = (array) => {
            const createdArray = `[${array.join(', ')}] ---> `;
            const mappedArray = array.map((word) => `${Array.from(word)[0]}`).join('');
            console.log(createdArray + mappedArray);
        };
        createAcronym(tvName);
        createAcronym(tvName1);
    }
    console.groupEnd();
    console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
    {
        const numArr = [1, 3, 5];
        const numArr1 = [2, 4, 6];
        const numArr2 = [12, 34, 56];
        const multiplyAllNumbersInArray = (array) => console.log(array.reduce((a, b) => a * b, 1));
        multiplyAllNumbersInArray(numArr);
        multiplyAllNumbersInArray(numArr1);
        multiplyAllNumbersInArray(numArr2);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=typed-arrays.js.map