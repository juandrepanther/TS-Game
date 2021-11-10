import { ReactElement, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { changeIsStarted } from "src/redux/reducers/secReducer"
import "../styles/Board.css"
import { useNavigate } from "react-router-dom"

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
    console.log("here must be trigger to final page")
    clearInterval(interval)
    navigate("/TS-Game-Finish")
    //window.history.pushState({}, "", "/TS-Game-Finish")
   }
  }, 1000)
  return () => clearInterval(interval)
 }, [dispatch, navigate])

 //RANDOM WIDTH & HEIGHT

 const randomParams = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
 }

 const RenderRandomObject = () => {
  return (
   <div
    style={{
     top: `${randomParams(0, 470)}px`,
     left: `${randomParams(0, 470)}px`
    }}
    draggable
    className="random-object"
   ></div>
  )
 }
 return <div className="board">{show && <RenderRandomObject />}</div>
}
