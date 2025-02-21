import "./App.css";
const VARIABLE = import.meta.env.VITE_VARIABLE;

function App() {
  return (
    <>
      <h1>Demo project</h1>
      <p>I am using env variable here: {VARIABLE}</p>
    </>
  );
}

export default App;
