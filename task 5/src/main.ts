/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
}

const people: Person[] = [
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

/*
  Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
  Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
    * Aprašome tipus
    * Aprašome funkcijas
    * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
    * Atliekame užduoties sprendimą
    * Spausdiname sprendimo rezultatus
  
  Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)
    
*/
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
  // Tipai:
  type Identity = {
    name: Person["name"],
    surname: Person["surname"],
  }

  // Funkcijos:
  const personToIdentity = ({ name, surname }: Person): Identity => {
    return { name, surname };
  }

  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }

  type TaskProps = Pick<Required<Person>, "hasCar" | "married">;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

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
 type GenderMoney = {
  sex: Person ['sex'],
  income: Person ['income']
 }
 const SelectedGenderMoney = ({sex, income}: Person): GenderMoney => ({
  sex, income
 });
 const result: GenderMoney[] = people.map(SelectedGenderMoney);
 console.log(result)
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  type GenderNameSurname = {
    name: Person ['name'],
    surname: Person ['surname'],
    sex: Person ['sex']
   }
   const SelectedGenderNameSurname = ({sex, name, surname}: Person): GenderNameSurname => ({
    sex, name, surname
   });
   const result: GenderNameSurname[] = people.map(SelectedGenderNameSurname);
   console.log(result)}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
type GenderMale = Omit<Person, 'sex'> & {
  sex:'male'
}
const GenderIsMale = ({sex}: Person): boolean => sex === 'male';

const AllMales: GenderMale[] = people.filter(GenderIsMale) as GenderMale[];

console.log(AllMales)
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  type GenderFemale = Omit<Person, 'sex'> & {
    sex:'female'
  }
  const GenderIsFemale = ({sex}: Person): boolean => sex === 'female';
  
  const AllMales: GenderFemale[] = people.filter(GenderIsFemale) as GenderFemale[];
  
  console.log(AllMales)}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
type peopleWithCar = {
  name: Person ['name'],
  surname: Person ['surname']
}
const personHasCar = ({ hasCar }: Person): boolean => Boolean(hasCar);

const PersonIdentity = ({ name, surname }: Person): peopleWithCar => ({ name, surname})

const IdentityReducer = ( result: peopleWithCar[], {hasCar, name, surname}: Person): peopleWithCar[] => {
if  (hasCar === true){
  result.push({ name, surname})
} return result
}
const PeopleHaveCars: Person[] = people.filter(personHasCar);
const identities: peopleWithCar[] = PeopleHaveCars.map(PersonIdentity);
const identities2: peopleWithCar[] = people.reduce(IdentityReducer, []);

console.log(identities)
console.log(identities2)

}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  type MarriedPerson = Omit<Person, "married"> & {
    married: true
  };
  const marriedReducer = (result: MarriedPerson[], person: Person): MarriedPerson[] => {
    if (person.married === true) {
      result.push(person as MarriedPerson)
    };
    return result;
  }
  const marriedPeople: MarriedPerson[] = people.reduce(marriedReducer, []);
  console.log(marriedPeople);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  type IncomeToSalary = Omit<Person, 'income'> & {
    salary?: Person['income']
  }
  const ChangeToSalary = ({ income, ...person }: Person): PersonBritish => {
    const result: IncomeToSalary = {...person };
    if(income){
      result.salary = income
    }
    return result;
  }
  const ConvertedMoney: IncomeToSalary[] = people.map(ChangeToSalary)

  console.log(ConvertedMoney)
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();