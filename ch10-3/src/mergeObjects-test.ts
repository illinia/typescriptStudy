import { mergeObjects } from "./mergeObject";

type INameable = { name: string };
type IAgeable = { age: number };

const nameAndAge: INameable & IAgeable = mergeObjects(
  { name: "Jack" },
  { age: 32 }
);
console.log(nameAndAge);
