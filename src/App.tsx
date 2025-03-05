const users = [
  { id: 1, name: "Fabio" },
  { id: 2, name: "Lorenzo" },
  { id: 3, name: "Silvia" },
];

function App() {
  return (
    <>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </>
  );
}

export default App;
