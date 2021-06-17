import * as R from "ramda";
import { notRange } from "./notRange";

R.pipe(
  R.filter(notRange(3, 7)),
  R.tap((n) => console.log(n))
)(R.range(1, 11));
