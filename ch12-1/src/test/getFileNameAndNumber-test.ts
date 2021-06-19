import { getFileNameAndNumber } from "../utils/getFileNameAndNumber";

const [filename, numberOfFakeData] = getFileNameAndNumber(
  "data/fake.csv",
  100000
);
console.log(filename, numberOfFakeData);
