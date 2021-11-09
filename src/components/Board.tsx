import { ReactElement, useEffect, useState } from "react"

import "../styles/Board.css"

export default function Board(): ReactElement {
 const [show, setShow] = useState(true)

 useEffect(() => {
  const interval = setInterval(() => {
   const count = document.getElementById("timer")?.innerText
   if (count !== "0 sec.") {
    setShow((prevState) => !prevState)
   } else {
    console.log("STOP fr Trigger final modal")
    clearInterval(interval)
   }
  }, 1000)
  return () => clearInterval(interval)
 }, [])

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
