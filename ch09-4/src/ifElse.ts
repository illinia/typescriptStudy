import * as R from "ramda";

const input: number[] = R.range(1, 11),
  halfValue = input[input.length / 2];

const subtractOrAdd = R.pipe(
  R.map(R.ifElse(R.lte(halfValue), R.inc, R.dec)),
  R.tap((a) => console.log(a))
);

const result = subtractOrAdd(input);
