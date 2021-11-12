import { useState } from "react"
import { useDispatch } from "react-redux"
import { selectShark } from "src/redux/reducers/sharkReducer"
import { randomParams } from "src/utils/randomParams"
import { randomSharkNumber, sharks } from "src/utils/sharksStore"

export const RenderRandomObject = () => {
 const [diffX, setDiffX] = useState<number>()
 const [diffY, setDiffY] = useState<number>()

 const dispatch = useDispatch()
 const sharkHandler = (sharkIndex: number) => dispatch(selectShark(sharkIndex))

 const randomNumberClone = randomSharkNumber()
 return (
  <div
   style={{
    top: `${randomParams(0, 470)}px`,
    left: `${randomParams(0, 470)}px`
   }}
   draggable
   className="random-object"
   id="random-object"
  >
   <img
    src={sharks[randomNumberClone]}
    alt=""
    className={`main-shark-${randomSharkNumber()}`}
    onMouseDown={() => sharkHandler(randomNumberClone)}
   />
  </div>
 )
}
