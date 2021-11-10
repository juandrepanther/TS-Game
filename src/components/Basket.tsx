import "../styles/Basket.css"
import shark_bed from "../assets/images/shark-bed.png"
import { useDispatch, useSelector } from "react-redux"
import { increment } from "../redux/reducers/statsReducer"
import { RootState } from "src/redux/store/store"
import { sharksColor } from "src/utils/sharksStore"

export const Basket = () => {
 const dispatch = useDispatch()
 const { sharkIndex, randomStartShark } = useSelector(
  (state: RootState) => state.sharkIndex
 )

 //LOGIC ON COLLECTION FROM RANDOM SHARK START INDEX
 const countStats = () =>
  sharkIndex === randomStartShark && dispatch(increment(1))

 return (
  <div
   onDragOver={(e) => e.preventDefault()}
   onDrop={() => countStats()}
   className="basket"
  >
   <img src={shark_bed} alt="" className="shark-bed" />
   <div className="shark-bed-title">{`Drop ${sharksColor[
    randomStartShark
   ].toUpperCase()} baby-sharks`}</div>
  </div>
 )
}
