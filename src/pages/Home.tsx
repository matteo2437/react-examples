import { useState } from "react"
import classes from './Home.module.css'

export function Home() {
  const [ count, setCount ] = useState(0)

  const add = () => {
    setCount(count + 1)
    //setCount(count => count + 1)
    //setCount(count => count + 1)
  }

  const containerClassName = count > 5 
    ? classes['container-red'] 
    : classes['container-blue']

  return (
    <div className={containerClassName}>
      <button
        onClick={() => add()}
      >
        Click
      </button>
      <div style={{ margin: 32 }}>
        {count}
      </div>
    </div>
  )
}
