import { mkdir } from "../fileApi/mkdir";

const makeDataDir = async (dirname: string) => {
  let result = await mkdir(dirname);
  console.log(`'${result}' dir created`);
};
makeDataDir("./ch12-1/data/today");
