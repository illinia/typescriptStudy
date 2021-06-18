import { Identity } from "../classes/Identity";

const add = (a: number) => (b: number) => a + b;
console.log(add(1)(2), Identity.of(add).ap(1).ap(2).value());
