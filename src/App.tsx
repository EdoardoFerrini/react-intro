import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  function addUser() {
    const newUser = { id: Date.now(), name: `user ${Math.random()}` };
    setUsers((s) => [...s, newUser]);
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
