import * as R from "ramda";
import { chainTwoFunc } from "./chainTwoFunc";

const array = [1, 2, 3];
R.pipe(
  chainTwoFunc(R.append, R.head),
  R.tap((n) => console.log(n))
)(array);
