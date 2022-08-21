"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7];
const strings = ["vienas", "du", "trys", "keturi", "penki", "sesi", "septyni"];
const booleans = [true, true, true, true, false, false, false];
console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    const firstOfArr = (arr) => {
        return arr[0];
    };
    console.log(firstOfArr(numbers));
    console.log({ strings, result: firstOfArr(strings) });
    console.log({ booleans, result: firstOfArr(booleans) });
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    const lasttOfArr = (arr) => {
        return arr[arr.length - 1];
    };
    console.log(lasttOfArr(numbers));
    console.log({ strings, result: lasttOfArr(strings) });
    console.log({ booleans, result: lasttOfArr(booleans) });
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
    const copyOfArr = (arr) => {
        const copiedArr = arr.map(x => x);
        return copiedArr;
    };
    console.log(copyOfArr(numbers));
    console.log({ strings, result: copyOfArr(strings) });
    console.log({ booleans, result: copyOfArr(booleans) });
}
console.groupEnd();
console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
    const solution = (value, count) => {
        return Array.from(new Array(count)).map(_ => value);
    };
    const dataSamples = [
        ['a', 2],
        [77, 4],
        [true, 1],
    ];
    dataSamples.forEach((args) => console.log(`solution(${args.join(', ')}):`, solution(...args)));
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
    const SumArr = (arr1, arr2) => {
        return [...arr1, ...arr2];
    };
    const args1 = [[1, 2, 3], [4, 5]];
    const args2 = [['new', 'phone'], ['who', 'dis']];
    const args3 = [[true], [false, false]];
    console.log(SumArr(...args1));
    console.log({ args: args2, result: SumArr(...args2) });
    console.log({ args: args3, result: SumArr(...args3) });
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei gauti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
    const solution = (initialValue) => {
        let value = initialValue;
        return {
            setValue: (newValue) => value = newValue,
            getValue: () => value,
        };
    };
    const value1 = 7;
    const value2 = ['Salomeja', 'Nemunas'];
    const value3 = { name: 'Balys', surname: 'Plaukas' };
    const obj1 = solution(value1);
    const obj2 = solution(value2);
    const obj3 = solution(value3);
    console.log({
        value1: obj1.getValue(),
        value2: obj2.getValue(),
        value3: obj3.getValue(),
    });
    obj1.setValue(9);
    obj2.setValue(['Zemaite', 'Aukstaite']);
    obj3.setValue({ name: 'Pakaitalas', surname: 'Fuflo' });
}
console.groupEnd();
console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
{
    const isWorker = (person) => {
        return person.avgMonthlyPay !== undefined;
    };
    const isStudent = (person) => {
        const student = person;
        return student.university !== undefined && student.course !== undefined;
    };
    const solution = (people) => {
        const groupedPeople = people.reduce((prevGroupedPeople, person) => {
            const newGroupedPeople = Object.assign({}, prevGroupedPeople);
            if (isWorker(person))
                newGroupedPeople.workers.push(person);
            if (isStudent(person))
                newGroupedPeople.students.push(person);
            else
                newGroupedPeople.people.push(person);
            return newGroupedPeople;
        }, {
            people: [],
            students: [],
            workers: [],
        });
        return groupedPeople;
    };
    const people = [
        { name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2 },
        { name: 'Kurpius', surname: 'Medainis' },
        { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
        { name: 'Ferodijus', surname: 'Cilcius' },
        { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
        { name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2 },
        { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
        { name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1 },
    ];
    const groupedPeople = solution(people);
    console.log(groupedPeople);
}
//# sourceMappingURL=main.js.map