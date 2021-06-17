import * as R from "ramda";

const array = R.range(1, 2 + 1).map((x: number) => {
  return R.range(1, 2 + 1).map((y: number) => {
    return [x, y];
  });
});
console.log(array);

const unnestedArray = R.unnest(array);
console.log(unnestedArray);

// @ts-ignore
const twoUnnestedArray = R.pipe(R.unnest, R.unnest)(array);
console.log(twoUnnestedArray);
