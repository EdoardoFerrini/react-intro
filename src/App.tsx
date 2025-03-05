function App() {
  const totalProducts = 10;

  return (
    <>
      {totalProducts > 0 ? (
        <h1>There are {totalProducts} products</h1>
      ) : (
        <div>No items in cart</div>
      )}
    </>
  );
}

export default App;
