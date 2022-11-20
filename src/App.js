import Button from "./Button";
import styles from "./App.module.css";
import {useState} from "react";
import { render } from "@testing-library/react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log(render)
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text={"click me"} />
    </div>
  );
}
 
export default App;
