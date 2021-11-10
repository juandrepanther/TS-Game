import shark_small from "../assets/images/shark-small.png"
import shark_daddy from "../assets/images/shark-daddy.png"
import shark_papa from "../assets/images/shark-papa.png"
import shark_grand from "../assets/images/shark-grand.png"

export const sharks = [shark_small, shark_papa, shark_daddy, shark_grand]

export const randomSharkNumber = () => Math.floor(Math.random() * sharks.length)