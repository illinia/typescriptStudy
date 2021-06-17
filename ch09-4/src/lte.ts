import * as R from "ramda";

R.pipe(
  R.filter(R.lte(3)),
  R.tap((n) => console.log(n))
)(R.range(1, 11));
