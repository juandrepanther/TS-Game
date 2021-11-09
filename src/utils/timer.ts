function returnValue(elapsedTime: number) {
 const element = document.getElementById("timer")
 element!.innerText = `${elapsedTime - 1} sec.`
}

export default function timer(seconds: number) {
 let counter = seconds

 const intervalId = setInterval(() => {
  returnValue(counter)
  counter -= 1
  if (counter === 0) {
   clearInterval(intervalId)
  }
 }, 1000)
 return
}
