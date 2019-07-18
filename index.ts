const COUNT = 200000

const setTotalCount = () => {
  document.querySelector("#count")!.innerHTML = COUNT.toString()
}

const setJSTotalTime = (endTime: number) => {
  document.querySelector("#js-time")!.innerHTML = (endTime - start).toString()
}

const setDomTotalTime = (endTime: number) => {
  document.querySelector("#dom-time")!.innerHTML = (endTime - start).toString()
}

const createItem = () => {
  const item = document.createElement("li")
  item.innerText = "item"
  return item
}

const render = () => {
  const loop = Array.from(new Array(COUNT))
  loop.forEach((v, i) => {
    const item = createItem()
    document.querySelector("#root")!.appendChild(item)
  })
}



const start = window.performance.now()

render()

const jsEnd = window.performance.now()


setTotalCount()
setJSTotalTime(jsEnd)

window.onload = () => {
  const domEnd = window.performance.now()
  setDomTotalTime(domEnd)
}