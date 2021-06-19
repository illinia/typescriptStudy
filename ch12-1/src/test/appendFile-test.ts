import * as path from "path";
import { appendFile } from "../fileApi/appendFile";
import { mkdir } from "../fileApi/mkdir";

const appendTest = async (filename: string, data: any) => {
  const result = await appendFile(filename, data);
  console.log(`append ${result} to ${filename}`);
};

mkdir("./ch12-1/data")
  .then((s) => appendTest("./ch12-1/data/hello.txt", "Hi, there!"))
  .catch((e: Error) => console.log(e.message));
