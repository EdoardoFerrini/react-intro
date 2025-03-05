import { Empty } from "./components/Empty";
import { Total } from "./components/Total";

function App() {
  const totalProducts = 5;

  function inc(e: React.MouseEvent) {
    console.log("inc", e.clientY);
  }

  return (
    <>
      {totalProducts > 0 ? <Total value={totalProducts} /> : <Empty />}

      <button onClick={inc}>Add</button>
    </>
  );
}

export default App;
