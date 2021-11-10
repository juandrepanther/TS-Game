import "../styles/Basket.css"

import { useDispatch, useSelector } from "react-redux"
import { increment } from "../redux/reducers/statsReducer"
import { RootState } from "src/redux/store/store"
import { sharks, randomSharkNumber } from "src/utils/sharksStore"

export const Basket = () => {
 const dispatch = useDispatch()
 const selectedShark = useSelector(
  (state: RootState) => state.sharkIndex.sharkIndex
 )

 //LOGIC ON RANDOM SHARK START SELECTION

 const countStats = () =>
  selectedShark === 0 ? dispatch(increment(1)) : console.log("not yellow")

 return (
  <div
   onDragOver={(e) => e.preventDefault()}
   onDrop={() => countStats()}
   className="basket"
  >
   DROP YELLOW SHARKS
  </div>
 )
}
