import * as R from "ramda";
import { makeRandomIPerson } from "./model/person";

const values: any[] = R.values(makeRandomIPerson());
console.log(values);
