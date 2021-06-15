import { range } from "./range";

let names: string[] = range(1, 5 + 1).map((val, index) => `[${index}]: ${val}`);

console.log(names);
