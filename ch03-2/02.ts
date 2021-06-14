interface IPerson {
  name: string;
  age: number;
  etc?: boolean;
}

let good: IPerson = { name: "Jack", age: 32 };

// let bad1: IPerson = { name: "Jact" };
// let bad2: IPerson = { age: 32 };
// let bad3: IPerson = {};
let bad4: IPerson = { name: "Jack", age: 32, etc: true };
