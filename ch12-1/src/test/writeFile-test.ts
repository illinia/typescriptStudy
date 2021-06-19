import * as path from "path";
import { writeFile } from "../fileApi/writeFile";
import { mkdir } from "../fileApi/mkdir";
import mkdirp = require("mkdirp");

const writeTest = async (filename: string, data: any) => {
  const result = await writeFile(filename, data);
  console.log(`write ${result} to ${filename}`);
};

mkdir("./ch12-1/data")
  .then((s) => writeTest("./ch12-1/data/hello.txt", "hello world"))
  .then((s) =>
    writeTest(
      "./ch12-1/data/test.json",
      JSON.stringify({ name: "Jack", age: 32 }, null, 2)
    )
  )
  .catch((e: Error) => console.log(e.message));
