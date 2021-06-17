import * as R from "ramda";
import { makeLens, getter, setter, setterUsingFunc } from "./lens";
import { IPerson, makeRandomIPerson } from "./model/person";

const longitudeLens = R.lensPath(["location", "coordinates", "longitude"]);
const getLongitude = getter(longitudeLens);
const setLongitude = setter(longitudeLens);
const setLongitudeUsingFunc = setterUsingFunc(longitudeLens);

const person: IPerson = makeRandomIPerson();

const longitude = getLongitude(person);
const newPerson = setLongitude(0.1234567)(person);
const anotherPerson = setLongitudeUsingFunc(R.add(1))(person);

console.log(longitude, getLongitude(newPerson), getLongitude(anotherPerson));
