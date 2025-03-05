import { Empty } from "./components/Empty";
import { Total } from "./components/Total";

function App() {
  const totalProducts = 0;

  function inc(e: React.MouseEvent) {
    console.log("inc", e.clientY);
  }

  console.log("render App", totalProducts);

  return (
    <>
      {totalProducts > 0 ? <Total value={totalProducts} /> : <Empty />}

      <button onClick={inc}>Add</button>
    </>
  );
}

export default App;
