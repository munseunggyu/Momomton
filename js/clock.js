const clockEl = document.querySelector('#clock')


function getClock() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2,"0")
  const min = String(date.getMinutes()).padStart(2,"0")
  clockEl.innerText = `${hours}:${min}`
}
getClock()
setInterval(getClock,'1000')
