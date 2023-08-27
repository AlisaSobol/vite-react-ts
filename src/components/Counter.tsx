import { ReactNode } from "react";

type CounterProps ={
  setCount:  React.Dispatch<React.SetStateAction<number>>,
  children: ReactNode
}

const Counter = ({ setCount, children } : CounterProps) => {
  // const [data, setData] = useState<object | null>(null) // just an example 

  // const [count, setCount] = useState(0) // it allowed not to explicetly write <number>
  // TS will define the type from useState default value


  return (
    <div>
      {children}
      <button onClick={() => setCount(prev => prev + 1)}>
        +
      </button>
      <button onClick={() => setCount(prev => prev - 1)}>
        -
      </button>
    </div>
  )
}

export default Counter