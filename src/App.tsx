import { Empty } from "./components/Empty";
import { Total } from "./components/Total";

function App() {
  const totalProducts = 5;

  return <>{totalProducts > 0 ? <Total value={totalProducts} /> : <Empty />}</>;
}

export default App;
