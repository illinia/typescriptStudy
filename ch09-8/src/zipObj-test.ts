import * as R from "ramda";
import { IPerson, makeRandomIPerson } from "./model/person";

const originalPerson: IPerson = makeRandomIPerson();
const keys: string[] = R.keys(originalPerson);
const values: any[] = R.values(originalPerson);
const zippedPerson: IPerson = R.zipObj(keys, values) as IPerson;
console.log(originalPerson, zippedPerson);
