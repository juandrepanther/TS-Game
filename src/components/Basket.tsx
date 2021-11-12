import "../styles/Basket.css"
import shark_bed from "../assets/images/shark-bed.png"
import { useDispatch, useSelector } from "react-redux"
import { increment } from "../redux/reducers/statsReducer"
import { RootState } from "src/redux/store/store"
import { sharksColor, sharks } from "src/utils/sharksStore"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const Basket = () => {
 const dispatch = useDispatch()
 const { sharkIndex, randomStartShark } = useSelector(
  (state: RootState) => state.sharkIndex
 )
 const notify = () => toast.success("Hey, Well Done!")

 //LOGIC ON COLLECTION FROM RANDOM SHARK START INDEX
 const countStats = () => {
  if (sharkIndex === randomStartShark) {
   dispatch(increment(1))
   notify()
  }
 }

 return (
  <>
   <ToastContainer position="top-center" autoClose={1000} />
   <div
    onDragOver={(e) => e.preventDefault()}
    onDrop={() => countStats()}
    className="basket"
   >
    <img src={shark_bed} alt="" className="shark-bed" />
    <div className="shark-bed-title">
     Drop
     <div
      className="title-color"
      style={{ color: `${sharksColor[randomStartShark]}` }}
     >
      {`${sharksColor[randomStartShark].toUpperCase()}`}
      <img src={sharks[randomStartShark]} alt="" className="title-shark" />
     </div>
     baby-sharks
    </div>
   </div>
  </>
 )
}
