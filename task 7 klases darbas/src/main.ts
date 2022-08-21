/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

console.group('1. Dėklo (Stack) duomenų struktūros kūrimas');
{
  /*
    Perskaitykite: https://runestone.academy/ns/books/published/pythonds/BasicDS/WhatisaStack.html
  */
  // ↓↓↓ klasė ↓↓↓
  class Stack<T> {
    private static elementNotEmpty = <Type>(el: Type | undefined): el is Type => el !== undefined;

    private index: number;

    [x: number]: T | undefined;

    constructor() {
      this.index = -1;
    }

    public get length() {
      return this.index + 1;
    }

    public push(data: T): void {
      this.index += 1;
      this[this.index] = data;
    }

    public pop(): T | null {
      const lastElement = this[this.index];

      if (Stack.elementNotEmpty(lastElement)) {
        delete this[this.index];
        this.index -= 1;

        return lastElement;
      }

      return null;
    }
  }
  // ↑↑↑ klasė ↑↑↑

  // ↓↓↓ bendri kintamieji ↓↓↓
  const numberStack = new Stack<number>();
  const stringStack = new Stack<string>();
  const numberArrayStack = new Stack<number[]>();
  // ↑↑↑ bendri kintamieji ↑↑↑

  // 5 min.
  console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
  {
    console.log({
      numberStack,
      stringStack,
    });
  }
  console.groupEnd();

  // 20 min
  console.groupCollapsed('1.2. Sukurkite metodą "push", kuris pridėtų elementą į struktūros galą, t.y.: vienetu didesniu indeksu nei dabartinis index. Po pridėjimo index savybę padidinkite vienetu');
  {
    numberStack.push(1);
    numberStack.push(7);
    numberStack.push(12);

    stringStack.push('Labas');
    stringStack.push('Vakaras');
    stringStack.push('Poniai');
    stringStack.push('ir');
    stringStack.push('Ponios');

    numberArrayStack.push([1]);
    numberArrayStack.push([2, 2, 2]);
    numberArrayStack.push([3, 5, 4]);

    console.log({
      numberStack,
      stringStack,
      numberArrayStack,
    });
  }
  console.groupEnd();

  // 20 min
  console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros galo. Po išėmimo index savybę sumažinkite vienetu');
  {
    console.log(numberStack.pop());
    console.log(numberStack.pop());
    console.log(numberStack.pop());
    console.log(numberStack.pop());
    console.log(numberStack.pop());
    console.log(numberStack);

    console.log(stringStack.pop());
    console.log(stringStack.pop());
    console.log(stringStack.pop());
    console.log(stringStack.pop());
    console.log(stringStack.pop());
    console.log(stringStack.pop());
    console.log(stringStack.pop());
    console.log(stringStack);

    const removedValue = numberArrayStack.pop();
    console.log({ removedValue });
    console.log(numberArrayStack.pop());
    console.log(numberArrayStack.pop());
    console.log(numberArrayStack.pop());
    console.log(numberArrayStack.pop());
    console.log(numberArrayStack.pop());
    console.log(numberArrayStack.pop());
    console.log(numberArrayStack.pop());
    console.log(numberArrayStack);
  }
  console.groupEnd();

  // 10 min
  console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
  {
    console.log(numberStack.length);
    numberStack.push(7);
    numberStack.push(7);
    console.log(numberStack.length);
    numberStack.pop();
    console.log(numberStack.length);
  }
  console.groupEnd();
}
console.groupEnd();