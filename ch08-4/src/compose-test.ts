import { f, g, h } from "./f-g-h";
import { compose } from "./compose";
const composedFGH = compose(h, g, f);

console.log(composedFGH("x"));
