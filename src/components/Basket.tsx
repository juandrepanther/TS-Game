import "../styles/Basket.css"

import { useDispatch, useSelector } from "react-redux"
import { increment } from "../redux/reducers/statsReducer"
import { RootState } from "src/redux/store/store"
import { sharksColor } from "src/utils/sharksStore"

export const Basket = () => {
 const dispatch = useDispatch()
 const { sharkIndex, randomStartShark } = useSelector(
  (state: RootState) => state.sharkIndex
 )

 //LOGIC ON RANDOM SHARK START SELECTION
 const countStats = () =>
  sharkIndex === randomStartShark
   ? dispatch(increment(1))
   : console.log(`Not ${sharksColor[randomStartShark]} baby-shark`)

 return (
  <div
   onDragOver={(e) => e.preventDefault()}
   onDrop={() => countStats()}
   className="basket"
  >
   {`Drop ${sharksColor[randomStartShark].toUpperCase()} baby-sharks`}
  </div>
 )
}
