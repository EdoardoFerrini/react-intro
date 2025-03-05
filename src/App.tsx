const yourname = "Edoardo Ferrini";
const url = "https://github.com/EdoardoFerrini";

function App() {
  return (
    <>
      <div>Hello {yourname}</div>
      <a href={url} target="_blank">
        Visit GitHub
      </a>
    </>
  );
}

export default App;
