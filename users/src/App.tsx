import React, { useState, useEffect } from "react";
import { IUser } from "./IUser";
import { getDataPromise } from "./getDataPromise";
import { Card } from "./Card";
import "./App.css";

const App: React.FC = () => {
  const limit = 2;
  const [skip, setSkip] = useState(0);
  const [users, setUsers] = useState<IUser[]>([]);
  const onClick = () => {
    getDataPromise((receivedUsers: IUser[]) => {
      setSkip((skip) => skip + limit);
      setUsers((users) => [...users, ...receivedUsers]);
    })(skip, limit);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(onClick, []);
  return (
    <div className="App">
      {users.map((user: IUser, key: number) => (
        <Card click={onClick} user={user} key={key.toString()} />
      ))}
    </div>
  );
};

export default App;
