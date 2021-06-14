export const init = (callback: () => void): void => {
  console.log("default finished");
  callback();
  console.log("all finished");
};
