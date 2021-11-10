import { ReactElement, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { changeIsStarted } from "src/redux/reducers/secReducer"
import "../styles/Board.css"
import { useNavigate } from "react-router-dom"
import { selectShark } from "src/redux/reducers/sharkReducer"
import { sharks, randomSharkNumber } from "src/utils/sharksStore"
import { randomParams } from "src/utils/randomParams"

export default function Board(): ReactElement {
 const [show, setShow] = useState(true)
 const dispatch = useDispatch()
 const navigate = useNavigate()

 useEffect(() => {
  const interval = setInterval(() => {
   const count = document.getElementById("timer")?.innerText
   if (count !== "0 sec.") {
    setShow((prevState) => !prevState)
    dispatch(changeIsStarted(false))
   } else {
    clearInterval(interval)
    navigate("/TS-Game-Finish")
   }
  }, 1000)
  return () => clearInterval(interval)
 }, [dispatch, navigate])

 const sharkHandler = (sharkIndex: number) => dispatch(selectShark(sharkIndex))

 const RenderRandomObject = () => {
  const randomNumberClone = randomSharkNumber()
  return (
   <div
    style={{
     top: `${randomParams(0, 470)}px`,
     left: `${randomParams(0, 470)}px`
    }}
    draggable
    className="random-object"
   >
    <img
     src={sharks[randomNumberClone]}
     alt=""
     className="main-shark"
     onMouseDown={() => sharkHandler(randomNumberClone)}
    />
   </div>
  )
 }
 return (
  <div className="board">
   {show &&
    sharks.map((_shark, index) => {
     return <RenderRandomObject key={index} />
    })}
  </div>
 )
}
