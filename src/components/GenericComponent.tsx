import { useState } from "react"

interface GenericComponentProps<T> {
  readonly initialValue: T[];
  readonly onAdd: () => T;
}

export function GenericComponent<T>(props: GenericComponentProps<T>) {
  const [array, setArray] = useState(props.initialValue)

  const onAdd = () => {
    const value = props.onAdd()
    const newArray = [...array]
    newArray.push(value)

    setArray(newArray)
  }

  const onPop = () => {
    const newArray = [...array]
    newArray.pop()

    setArray(newArray)
  }

  return (
    <div>
      <button onClick={onAdd}>Add</button>
      <button onClick={onPop}>Pop</button>
      <ul>
        {
          array.map(a => (
            <p>{`${a}`}</p>
          ))
        }
      </ul>
    </div>
  )
}