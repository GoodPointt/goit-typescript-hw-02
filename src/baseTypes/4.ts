/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/

//1)
let person1: [string, number] = ['Max', 21];

//2)
type Person = [string, number];
let person2: Person = ['Ann', 22];

//3)
let person3: [name: string, age: number] = ['Kate', 20];

export {};
