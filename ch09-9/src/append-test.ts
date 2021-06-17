import * as R from "ramda";

const array: number[] = [3, 4];
const newArray = R.append(1)(array) as number[];
console.log(array, newArray);
