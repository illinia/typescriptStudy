import { IUser } from "./IUser";

type GetDatePromiseCallback = (a: IUser[]) => void;
export const getDataPromise =
  (fn: GetDatePromiseCallback) => (skip: number, limit: number) =>
    fetch(`http://localhost:4000/users/${skip}/${limit}`)
      .then((res) => res.json())
      .then(fn);
