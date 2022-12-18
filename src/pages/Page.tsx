import { useRef } from "react"
import classes from "./Page.module.css"

export function Page() {
  const divRef = useRef<any>()
  const ref = useRef(0)

  const add = () => {
    ref.current++;
    divRef.current.innerText = ref.current
  }

  return (
    <div className={classes.container}>
      <button
        onClick={() => add()}
      >
        Click
      </button>
      <div
        ref={divRef}
        style={{ margin: 32 }}
      >
      </div>
    </div>
  )
}
