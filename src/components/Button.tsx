import "../styles/Button.css"
import { useDispatch } from "react-redux"
import { addSeconds, changeIsStarted } from "src/redux/reducers/secReducer"
import { Link } from "react-router-dom"

type Props = {
 children: string
 option?: string
}

const Button: React.FC<Props> = ({ children, option }) => {
 const seconds = parseInt(children)
 const HTML_text_seconds = `${seconds} seconds`
 const dispatch = useDispatch()

 const setTimerHandler = () => {
  if (option === "setTimer") {
   dispatch(addSeconds(seconds))
   dispatch(changeIsStarted(true))
  } else {
   document.location = "/TS-Game"
  }
 }

 return (
  <Link
   onClick={() => setTimerHandler()}
   className="button-6"
   to={"/DragElements"}
  >
   {!option ? children : HTML_text_seconds}
  </Link>
 )
}

export default Button
