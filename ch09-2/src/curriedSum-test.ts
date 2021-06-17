import { curriedSum } from "./curriedSum";

console.log(
  curriedSum(),
  curriedSum(1),
  curriedSum(1)(2),
  curriedSum(1)(2)(3),
  curriedSum(1)(2)(3)(4)
);
