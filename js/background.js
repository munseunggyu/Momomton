const imgs = ['0.jpeg','1.jpeg']
const chosenImage = imgs[Math.floor(Math.random()*imgs.length)]
const bgImg = document.createElement('img')

bgImg.src = `images/${chosenImage}`

document.body.appendChild(bgImg)

bgImg.id = 'bgimage'