import * as R from "ramda";

const numbers: number[] = R.range(1, 9 + 1);

const incNumbers = R.pipe(
  R.tap((a) => console.log("before inc: ", a)),
  R.map(R.inc),
  R.tap((a) => console.log("after inc: ", a))
);

const newNumbers = incNumbers(numbers);
