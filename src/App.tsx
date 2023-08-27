import { useState } from "react";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <Counter setCount={setCount}>
        <p>Counter: <b>{count}</b></p>
      </Counter>
      <List items={["Cofee", "Tacos", "Code"]} render={(item: string) => <span className="list__item">{ item }</span>}/>
    </div>
  )
}

export default App
