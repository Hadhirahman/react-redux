import { useDispatch, useSelector } from "react-redux"
import { Decrement, Increment } from "./redux/Counter/COunterAction"


function Counter() {
    const count= useSelector((state)=>state.count)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>Count is={count}</h1>
      <button onClick={()=>dispatch(Increment())}>increment</button>
      <button onClick={()=>dispatch(Decrement())}>decrement</button>
    </div>
  )
}

export default Counter
