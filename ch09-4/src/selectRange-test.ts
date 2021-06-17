import * as R from "ramda";
import { selectRange } from "./selectRange";

R.pipe(
  R.filter(selectRange(3, 7)),
  R.tap((n) => console.log(n))
)(R.range(1, 11));
