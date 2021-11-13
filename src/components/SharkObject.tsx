import { useState } from "react"
import { useDispatch } from "react-redux"
import { selectShark } from "src/redux/reducers/sharkReducer"
import { randomParams } from "src/utils/randomParams"
import { randomSharkNumber, sharks } from "src/utils/sharksStore"

export const RenderRandomObject = () => {
 const [topDiff, setTopDiff] = useState<number>(0)
 const [leftDiff, setLeftDiff] = useState<number>(0)
 const [sharkToast, setSHarkToast] = useState<string>()
 const randomNumberClone = randomSharkNumber()
 const topPosition = randomParams(0, 470)
 const leftPosition = randomParams(0, 470)

 //SEND TO STORE SHARK INDEX FOR CHECK IF ITS RIGHT

 const dispatch = useDispatch()
 const sharkHandler = (sharkIndex: number) => dispatch(selectShark(sharkIndex))

 //CHECK IF CURSOR IS OVER SHARK OBJECT AND SET DIFFERENCE

 const cursorOverSharkHandler = (e: any) => {
  if (randomNumberClone === 2) {
   setTopDiff(20)
   setLeftDiff(20)
   setSHarkToast("HA HAA!")
  }
 }

 return (
  <div
   style={{
    top: `${topPosition - topDiff}px`,
    left: `${leftPosition - leftDiff}px`
   }}
   draggable
   className={`random-object-${randomSharkNumber()}`}
   id="random-object"
  >
   <p className="shark-toast">{sharkToast}</p>
   <img
    src={sharks[randomNumberClone]}
    alt=""
    className="shark-image"
    onMouseDown={() => sharkHandler(randomNumberClone)}
    onMouseOver={(e) => cursorOverSharkHandler(e)}
   />
  </div>
 )
}
