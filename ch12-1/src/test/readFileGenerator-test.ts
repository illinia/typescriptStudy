import { readFileGenerator } from "../fileApi";

for (let value of readFileGenerator("./ch12-1/data/fake-100000.csv")) {
  console.log("<line>", value, "</line>");
  break;
}
