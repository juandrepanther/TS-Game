function returnValue(elapsedTime: number) {
 const element = document.getElementById("timer")
 element!.innerText = `${elapsedTime - 1} sec.`
}

export default function timer(seconds: number) {
 let counter = seconds

 const intervalId = setInterval(() => {
  counter -= 1
  returnValue(counter)
  if (counter === 1) {
   clearInterval(intervalId)
  }
 }, 1000)
 return
}
