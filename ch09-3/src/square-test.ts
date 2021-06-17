import * as R from "ramda";
import { square } from "./quadratic";

const input: number[] = R.range(1, 11);
const squareAfterInc = R.pipe(R.inc, square);
const squareResult = R.pipe(
  R.map(squareAfterInc),
  R.tap((a) => console.log(a))
)(input);
