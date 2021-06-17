export type ICoordinates = { longitude: number };
export type ILocation = { country: string; coords?: ICoordinates };
export type IPerson = { name: string; location?: ILocation };

let person: IPerson = { name: "Jack" };
let longitude = person?.location?.coords?.longitude;
console.log(longitude);
