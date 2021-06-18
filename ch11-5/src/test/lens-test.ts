import { IO } from "../classes/IO";
import * as R from "ramda";

const work = () => ({ name: "Jack", age: 32 });

const result = IO.of(work)
  // @ts-ignore
  .map(R.view(R.lensProp("name")))
  .map(R.toUpper)
  .runIO();

console.log(result);
