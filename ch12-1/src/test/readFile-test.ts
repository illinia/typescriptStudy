import { readFile } from "../fileApi/readFile";

const readTest = async (filename: string) => {
  const result = await readFile(filename);
  console.log(`read '${result}' from ${filename} file.`);
};

readTest("./ch12-1/data/hello.txt")
  .then((s) => readTest("./ch12-1/data/test.json"))
  .catch((e: Error) => console.log(e.message));
