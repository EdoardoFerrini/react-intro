function App() {
  const totalProducts = 10; // 0 or 10

  const renderTotal = () => (
    <div>
      <h1>There are {totalProducts} products</h1>
    </div>
  );

  return <>{totalProducts ? renderTotal() : <Empty />}</>;
}

export default App;

// Empty Component
function Empty() {
  return (
    <div>
      <em>No items in cart</em>
    </div>
  );
}
