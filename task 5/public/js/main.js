"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        income: 1200,
        married: false,
        hasCar: false,
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
        married: false,
        hasCar: true,
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        income: 0,
        married: false,
        hasCar: false,
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
        hasCar: true,
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        income: 1200,
        married: true,
        hasCar: true,
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72,
        income: 364,
        married: false,
        hasCar: false,
    },
];
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    const personToIdentity = ({ name, surname }) => {
        return { name, surname };
    };
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const selectTaskProps = ({ married, hasCar }) => ({
        married: Boolean(married),
        hasCar: Boolean(hasCar),
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
}
console.groupEnd();
console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
    const SelectedGenderMoney = ({ sex, income }) => ({
        sex, income
    });
    const result = people.map(SelectedGenderMoney);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    const SelectedGenderNameSurname = ({ sex, name, surname }) => ({
        sex, name, surname
    });
    const result = people.map(SelectedGenderNameSurname);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
    const GenderIsMale = ({ sex }) => sex === 'male';
    const AllMales = people.filter(GenderIsMale);
    console.log(AllMales);
}
console.groupEnd();
console.groupCollapsed('7. Atspausdinkite visas moteris');
{
    const GenderIsFemale = ({ sex }) => sex === 'female';
    const AllMales = people.filter(GenderIsFemale);
    console.log(AllMales);
}
console.groupEnd();
console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
    const personHasCar = ({ hasCar }) => Boolean(hasCar);
    const PersonIdentity = ({ name, surname }) => ({ name, surname });
    const IdentityReducer = (result, { hasCar, name, surname }) => {
        if (hasCar === true) {
            result.push({ name, surname });
        }
        return result;
    };
    const PeopleHaveCars = people.filter(personHasCar);
    const identities = PeopleHaveCars.map(PersonIdentity);
    const identities2 = people.reduce(IdentityReducer, []);
    console.log(identities);
    console.log(identities2);
}
console.groupEnd();
console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
    const marriedReducer = (result, person) => {
        if (person.married === true) {
            result.push(person);
        }
        ;
        return result;
    };
    const marriedPeople = people.reduce(marriedReducer, []);
    console.log(marriedPeople);
}
console.groupEnd();
console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
}
console.groupEnd();
console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
    const ChangeToSalary = (_a) => {
        var { income } = _a, person = __rest(_a, ["income"]);
        const result = Object.assign({}, person);
        if (income) {
            result.salary = income;
        }
        return result;
    };
    const ConvertedMoney = people.map(ChangeToSalary);
    console.log(ConvertedMoney);
}
console.groupEnd();
console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
}
console.groupEnd();
console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
}
console.groupEnd();
//# sourceMappingURL=main.js.map