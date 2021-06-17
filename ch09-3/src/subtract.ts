import * as R from "ramda";

const reverseSubtract = R.flip(R.subtract);

const newArray = R.pipe(
  R.map(reverseSubtract(10)),
  R.tap((a) => console.log(a))
)(R.range(1, 10));
