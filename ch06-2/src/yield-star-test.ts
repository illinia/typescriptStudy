import { gen12345 } from "./yield-start";

for (let value of gen12345()) {
  console.log(value);
}
