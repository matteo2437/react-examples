import { ReactNode, useContext, useEffect, useState } from "react"
import { CounterContext } from "../App";
import { GenericComponent } from "../components/GenericComponent";

export function HookPage() {
  return (
    <Counter 
      initialValue={44}
      onChange={count => console.log(count)}
    >
      <div>Questo conta</div>
    </Counter>
  )
}


interface CounterProps {
  readonly initialValue?: number;
  readonly onChange?: (count: number) => void;
  readonly children?: ReactNode
}

const useCounterContext = () => {
  return useContext(CounterContext)
}

function Counter(props: CounterProps) {
  const context = useCounterContext()
  const counter = useCounter(props.initialValue)

  useEffect(() => {
    console.log('ciao')

    return () => console.log('distrutto')
  }, [])

  useEffect(() => {
    props.onChange?.(counter.count)
    context.setCount(counter.count)
  }, [counter.count])

  const handleAdd = () => {
    counter.add()
  }

  return (
    <div>
      <button onClick={handleAdd}>
        Add
      </button>
      <button onClick={() => counter.reduce()}>
        Reduce
      </button>
      {counter.count}
      {props.children}

      <GenericComponent
        initialValue={['1', '2', '3']}
        onAdd={() => Math.random().toString()}
      />
    </div>
  )
}



const useCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue)

  const add = () => {
    setCount(count => count + 1);
  }

  const reduce = () => {
    setCount(count => count - 1);
  }

  return {
    add,
    reduce,
    count
  }
}