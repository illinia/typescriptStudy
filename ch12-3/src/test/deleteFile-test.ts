import { deleteFile } from "../fileApi/deleteFile";
import { rmdir } from "../fileApi/rmdir";

const deleteTest = async (filename: string) => {
  const result = await deleteFile(filename);
  console.log(`delete ${result} file.`);
};

Promise.all([
  deleteTest("./ch12-1/data/hello.txt"),
  deleteTest("./ch12-1/data/test.json"),
])
  .then((s) => rmdir("./ch12-1/data"))
  .then((dirname) => console.log(`delete ${dirname} dir`))
  .catch((e: Error) => console.log(e.message));
