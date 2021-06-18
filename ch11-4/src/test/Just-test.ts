import * as R from "ramda";
import { Just } from "../classes/Just";

console.log(
  Just.of(100).isJust(),
  Just.of(100).isNothing(),
  Just.of(100).getOrElse(1),
  Just.of(100).map(R.identity).getOrElse(1),
  Just.of(R.identity).ap(100).getOrElse(1),
  Just.of(100).chain(Just.of).getOrElse(1)
);
