function App() {
  const totalProducts = 0;

  return (
    <>
      {totalProducts > 0 && <h1>There are {totalProducts} products</h1>}
      {totalProducts === 0 && <div>No items in cart</div>}
    </>
  );
}

export default App;
