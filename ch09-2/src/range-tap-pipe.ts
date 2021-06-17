import * as R from "ramda";

const array: number[] = R.range(1, 10);

R.pipe(R.tap((n) => console.log(n)))(array);
