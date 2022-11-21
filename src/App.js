import { useState, useEffect } from "react";

function Hello() {
  function effectFn() {
    console.log("Created :)");
    return byFn;
  }
  function byFn() {
    console.log("bye :(");
  }
  useEffect(effectFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(!showing);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
