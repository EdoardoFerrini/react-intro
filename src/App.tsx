import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "./model/user";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  function addUser() {
    axios
      .post<User>("https://jsonplaceholder.typicode.com/users", {
        name: `name ${Math.random()}`,
      })
      .then((res) => setUsers((s) => [...s, res.data]));
  }

  return (
    <>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
      <button onClick={addUser}>Add User</button>
    </>
  );
}

export default App;
