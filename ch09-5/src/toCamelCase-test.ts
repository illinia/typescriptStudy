import { toCamelCase } from "./toCamelCase";

console.log(
  toCamelCase(" ")("Hello world"),
  toCamelCase("_")("Hello_Albert_Einstein")
);
