import { useState } from "react";
import { Empty } from "./components/Empty";
import { Total } from "./components/Total";

function App() {
  const [totalProducts, setTotalProducts] = useState<number>(0);

  function inc() {
    setTotalProducts((s) => s + 1);
  }

  console.log("render", totalProducts);

  return (
    <>
      {totalProducts > 0 ? <Total value={totalProducts} /> : <Empty />}

      <button onClick={inc}>Add</button>
    </>
  );
}

export default App;
