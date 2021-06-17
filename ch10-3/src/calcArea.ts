import { IShape } from "./IShape";

export const calcArea = (shape: IShape): number => {
  switch (shape.tag) {
    case "square":
      return shape.size * shape.size;
    case "rectange":
      return shape.width * shape.height;
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
  return 0;
};
