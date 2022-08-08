/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
/* eslint-disable semi */
/* eslint-disable no-lone-blocks */
console.group('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
  type drink = {
    name: string,
    price: number,
  };

  const sortDrinkByPrice = (drink1: drink, drink2: drink): number => {
    return drink1.price - drink2.price;
  }

  const solution = (drinks: Array<drink>): Array<drink> => {
    return [...drinks].sort(sortDrinkByPrice);
  };

  const drinks: drink[] = [
    { name: 'lemonade', price: 50 },
    { name: 'fanta', price: 30 },
    { name: 'lime', price: 10 },
  ];

  const sortedDrinks: drink[] = solution(drinks);

  console.log({
    drinks,
    sortedDrinks,
  });
}
console.groupEnd();

console.group('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  type ItemObj = {
    [key: string]: number,
  };

  const solution = (itemObj: ItemObj, itemName: string, itemValue: number): ItemObj => ({
    ...itemObj,
    [itemName]: itemValue,
  });

  type SolutionArgs = [ItemObj, string, number];

  const solutionArgs1: SolutionArgs = [{}, 'Brutus', 300];
  const solutionArgs2: SolutionArgs = [{ piano: 500 }, 'Brutus', 400];
  const solutionArgs3: SolutionArgs = [{ piano: 500, stereo: 300 }, 'Caligula', 440];

  const result1: ItemObj = solution(...solutionArgs1);
  const result2: ItemObj = solution(...solutionArgs2);
  const result3: ItemObj = solution(...solutionArgs3);

  console.log(solutionArgs1, result1);
  console.log(solutionArgs2, result2);
  console.log(solutionArgs3, result3);
}
console.groupEnd();