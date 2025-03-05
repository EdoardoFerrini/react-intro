function App() {
  const totalProducts = 10; // 0 or 10

  return <>{totalProducts ? <Total value={totalProducts} /> : <Empty />}</>;
}

export default App;

// Total Component
interface TotalProps {
  value: number;
}
const Total = (props: TotalProps) => (
  <div>
    <h1>There are {props.value} products</h1>
  </div>
);

// Empty Component
function Empty() {
  return (
    <div>
      <em>No items in cart</em>
    </div>
  );
}
