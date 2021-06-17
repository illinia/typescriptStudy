export const compose =
  <T, R>(...functions: readonly Function[]): Function =>
  (x: T): ((T) => R) => {
    const deepCpiedFunctions = [...functions];
    return deepCpiedFunctions.reverse().reduce((value, func) => func(value), x);
  };
