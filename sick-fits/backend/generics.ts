/* eslint-disable @typescript-eslint/indent */
type Arr1 = Array<number>; // a generic because we can put any type in brackets

const last = <T>(arr: Array<T> /* or T[] */) => arr[arr.length - 1];
// <T> is the generic type that gets passed in

const l = last<1 | 2 | 3>([1, 2, 3]);

const l2 = last<string>(['a', 'b', 'c']);

// generics help us get more type definition or cover our code better

const makeArr = <T>(x: T): T[] => [x];

const v = makeArr<number>(5);
const v2 = makeArr('a');

// using generics to return a tuple

const makeArr2 = <T, U>(x: T, y: U): [T, U] => [x, y];

const v3 = makeArr2(5, 'a');
const v4 = makeArr2<number, string | null>(5, 'a');

// using generics to extend a type

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const v5 = makeFullName({
  firstName: 'John',
  lastName: 'Doe',
  age: 21,
  type: 'admin',
});

// interfaces

interface Tab<T> {
  // T is the type parameter (generic)
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;
