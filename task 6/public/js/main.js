"use strict";
var HeightUnits;
(function (HeightUnits) {
    HeightUnits["CENTIMETERS"] = "cm";
    HeightUnits["METERS"] = "m";
    HeightUnits["INCHES"] = "in";
})(HeightUnits || (HeightUnits = {}));
var WeightUnits;
(function (WeightUnits) {
    WeightUnits["KG"] = "kg";
    WeightUnits["LBS"] = "lbs";
})(WeightUnits || (WeightUnits = {}));
const capitalize = (word) => {
    const words = word.trim().split(' ');
    const capitalizedWords = words.map((w) => w[0].toUpperCase() + w.slice(1));
    return capitalizedWords.join(' ');
};
class Person {
    constructor(name, surname, age, height, weight, heightUnits, weightUnits) {
        this.setName(name);
        this.setSurname(surname);
        this.setAge(age);
        this.setHeight(height, heightUnits);
        this.setWeight(weight, weightUnits);
    }
    setName(name) {
        if (name === '')
            throw new Error('Negali būti tuščias');
        if (name.length < 2)
            throw new Error('Vardas turi būti bent iš 2 raidžių');
        this.privateName = capitalize(name);
    }
    setSurname(surname) {
        if (surname === '')
            throw new Error('Negali būti tuščias');
        if (surname.length < 2)
            throw new Error('Pavardė turi būti bent iš 2 raidžių');
        this.surname = capitalize(surname);
    }
    setAge(age) {
        if (age % 1 !== 0)
            throw new Error('Amžius turi būti sveikas skaičius');
        if (age < 1)
            throw new Error('Amžius negali būti mažesnis nei 1');
        if (age > 150)
            throw new Error('Amžius negali būti didesnis už 150');
        this.age = age;
    }
    setHeight(height, units = HeightUnits.CENTIMETERS) {
        switch (units) {
            case HeightUnits.CENTIMETERS:
                this.height = height;
                break;
            case HeightUnits.METERS:
                this.height = height * 100;
                break;
            case HeightUnits.INCHES:
                this.height = height * 2.54;
                break;
            default: break;
        }
    }
    setWeight(weight, units) {
        switch (units) {
            case WeightUnits.KG:
                this.weight = weight;
                break;
            case WeightUnits.LBS:
                this.weight = weight / 2.20462262;
                break;
            default: this.weight = weight;
        }
    }
    getFullname() {
        return `${this.privateName} ${this.surname}`;
    }
    getAge() {
        return this.age;
    }
    getHeight() {
        switch (Person.heightUnits) {
            case HeightUnits.CENTIMETERS: return this.height;
            case HeightUnits.METERS: return this.height / 100;
            case HeightUnits.INCHES: return this.height / 2.54;
            default: return this.height;
        }
    }
    getWeight() {
        if (this.weight === undefined)
            return 0;
        let value;
        switch (Person.weightUnits) {
            case WeightUnits.KG:
                value = this.weight;
                break;
            case WeightUnits.LBS:
                value = this.weight * 2.20462262;
                break;
            default: value = this.weight;
        }
        return Math.round(value * 10) / 10;
    }
    toString() {
        let formattedPerson = `${this.privateName} ${this.surname}\n`;
        formattedPerson += `\theight: ${this.getHeight()} ${Person.heightUnits}\n`;
        formattedPerson += `\tweight: ${this.getWeight()}   ${Person.weightUnits}\n`;
        return formattedPerson;
    }
}
Person.heightUnits = HeightUnits.CENTIMETERS;
Person.weighttUnits = WeightUnits.KG;
const people = [
    new Person('Liudvikas', 'XVIII', 31, 190, 70),
    new Person('varaloja', 'karksė barsė', 35, 1.7, 150, HeightUnits.METERS, WeightUnits.LBS),
    new Person('Ana maria', 'Laikauskaitė', 39, 70, 125, HeightUnits.INCHES, WeightUnits.LBS),
];
console.groupCollapsed('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
    const fullnames = people.map((p) => p.getFullname());
    console.log(fullnames);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
    const ages = people.map((p) => p.getAge());
    console.log(ages);
}
console.groupEnd();
console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
    const heights = people.map((p) => p.getHeight());
    console.log(heights);
}
console.groupEnd();
console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "cm", "m", "in". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{
    Person.heightUnits = HeightUnits.METERS;
    console.log('Matavimo vienetai pakeisti į:', HeightUnits.METERS);
    console.log({ 'Person.heightUnits': Person.heightUnits });
    Person.heightUnits = HeightUnits.INCHES;
    console.log('Matavimo vienetai pakeisti į:', HeightUnits.INCHES);
    console.log({ 'Person.heightUnits': Person.heightUnits });
    Person.heightUnits = HeightUnits.CENTIMETERS;
    console.log('Matavimo vienetai pakeisti į:', HeightUnits.CENTIMETERS);
    console.log({ 'Person.heightUnits': Person.heightUnits });
}
console.groupEnd();
console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');
console.group('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
{
    Person.heightUnits = HeightUnits.METERS;
    console.log('Matavimo vienetai pakeisti į:', HeightUnits.METERS);
    console.log(people.map((p) => p.getHeight()));
    Person.heightUnits = HeightUnits.INCHES;
    console.log('Matavimo vienetai pakeisti į:', HeightUnits.INCHES);
    console.log(people.map((p) => p.getHeight()));
    Person.heightUnits = HeightUnits.CENTIMETERS;
    console.log('Matavimo vienetai pakeisti į:', HeightUnits.CENTIMETERS);
    console.log(people.map((p) => p.getHeight()));
}
console.groupEnd();
console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{
    const weights = people.map((p) => p.getWeight());
    console.log(weights);
    Person.weightUnits = WeightUnits.KG;
    console.log('Matavimo vienetai pakeisti į:', WeightUnits.KG);
    console.log(people.map((p) => p.getWeight()));
    Person.weightUnits = WeightUnits.LBS;
    console.log('Matavimo vienetai pakeisti į:', WeightUnits.LBS);
    console.log(people.map((p) => p.getWeight()));
}
console.groupEnd();
console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
{
    const person1 = [
        new Person('Liudvikas', 'Saule', 31, 190, 70),
    ];
    const person2 = [
        new Person('Morkius', 'Ridikius', 61, 150, 65),
    ];
    Person.heightUnits = HeightUnits.METERS;
    Person.weightUnits = WeightUnits.KG;
    console.log('European Standard');
    console.log(person1.toString());
    console.log(person2.toString());
    Person.heightUnits = HeightUnits.INCHES;
    Person.weightUnits = WeightUnits.LBS;
    console.log('American Standard');
    console.log(person1.toString());
    console.log(person2.toString());
}
//# sourceMappingURL=main.js.map