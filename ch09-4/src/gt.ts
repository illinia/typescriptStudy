import * as R from "ramda";

R.pipe(
  R.filter(R.gt(7)),
  R.tap((n) => console.log(n))
)(R.range(1, 11));
