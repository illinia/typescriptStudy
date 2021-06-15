const isAnyTrue = (values: boolean[]) => values.some((value) => value === true);

console.log(isAnyTrue([false, true, false]), isAnyTrue([false, false, false]));
