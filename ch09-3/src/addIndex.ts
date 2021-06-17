import * as R from "ramda";

const addIndex = R.pipe(
  R.addIndex(R.map)(R.add),
  R.tap((a) => console.log(a))
);

const newNumbers = addIndex(R.range(1, 10));
