import { Bird, Fish } from "./BirdAndFish";
import { swimOrFly } from "./swimOrFly";

[new Bird(), new Fish()].forEach(swimOrFly);
