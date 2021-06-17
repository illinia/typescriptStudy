import { T } from "ramda";

export const mergeObjects = <T, U>(a: T, b: U): T & U => ({ ...a, ...b });
