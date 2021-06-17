import * as R from "ramda";
import { IPerson, makeRandomIPerson } from "./model/person";
import { ILocation, makeRandomILocation } from "./model/location";
import { ICoordinates, makeRandomICoordinates } from "./model/coordinates";

const person: IPerson = makeRandomIPerson();
const location: ILocation = makeRandomILocation();
const coordinates: ICoordinates = makeRandomICoordinates();

const newLocation = R.mergeDeepRight(location, { coordinates });
const newPerson = R.mergeDeepRight(person, { location: newLocation });

console.log(person);
console.log(newPerson);
