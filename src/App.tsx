function App() {
  const totalProducts = 10;

  const renderTotal = () => (
    <div>
      <h1>There are {totalProducts} products</h1>
    </div>
  );

  function renderEmpty() {
    return (
      <div>
        <em>No items</em>
      </div>
    );
  }

  return <>{totalProducts > 0 ? renderTotal() : renderEmpty()}</>;
}

export default App;
