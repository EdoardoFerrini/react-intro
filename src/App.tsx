import { useEffect, useState } from "react";
import { User } from "./model/user";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  function addUser() {
    fetch("https://jsonplaceholder.typicode.com/users", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name: `user ${Math.random()}` }),
    })
      .then((res) => res.json())
      .then((res) => setUsers((s) => [...s, res]));
  }

  return (
    <>
      {users.map((user) => {
        return (
          <li key={user.id}>
            {user.id} - {user.name}
          </li>
        );
      })}
      <button onClick={addUser}>Add</button>
    </>
  );
}

export default App;
