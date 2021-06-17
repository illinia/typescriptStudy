import { printValue, Valuable } from "./printValue";

printValue(new Valuable(1));
printValue(new Valuable(true));
printValue(new Valuable("hello"));
printValue(new Valuable([1, 2, 3]));
