import * as R from "ramda";
import { makeRandomIPerson } from "./model/person";

const keys: string[] = R.keys(makeRandomIPerson());
console.log("keys:", keys);
