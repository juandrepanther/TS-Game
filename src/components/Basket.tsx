import "../styles/Basket.css"

import { useDispatch } from "react-redux"
import { increment } from "../redux/reducers/statsReducer"

export const Basket = () => {
 const dispatch = useDispatch()

 const countStats = () => dispatch(increment(1))

 return (
  <div
   onDragOver={(e) => e.preventDefault()}
   onDrop={() => countStats()}
   className="basket"
  >
   DROP HERE
  </div>
 )
}
