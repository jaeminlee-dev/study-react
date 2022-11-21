import Button from "./Button";
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  useEffect(()=>{
    if(keyword.length > 5) {
      console.log(keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type={"text"} placeholder="search here.."/>
      <h1>{counter}</h1>
      <Button onClick={onClick} text={"click me"} />
    </div>
  );
}
 
export default App;
