let blue = document.querySelector('.filter__color-input1')
let purple = document.querySelector('.filter__color-input2')
let midnight = document.querySelector('.filter__color-input4')
let starlight = document.querySelector('.filter__color-input5')
let red = document.querySelector('.filter__color-input6')
let yellow = document.querySelector('.filter__color-input3')
let img = document.querySelector('.scroll__img')
let text = document.querySelector('.filter__color-text')

blue.onclick = () => {
   img.style.backgroundImage = "url('./img/blue-iphone.jpg')"
   text.innerHTML = "Color - blue"   
}
purple.onclick = () => {
   img.style.backgroundImage = "url('./img/purple-iphone.jpg')"
   text.innerHTML = "Color - purple"   
}
midnight.onclick = () => {
   img.style.backgroundImage = "url('./img/midknight-iphone.jpg')"
   text.innerHTML = "Color - midnight"   
}
starlight.onclick = () => {
   img.style.backgroundImage = "url('./img/starlight-iphone.jpg')"
   text.innerHTML = "Color - starlight"   
}
red.onclick = () => {
   img.style.backgroundImage = "url('./img/red-iphone.jpg')"
   text.innerHTML = "Color - red"   
}
yellow.onclick = () => {
   img.style.backgroundImage = "url('./img/yellow-phone.jpeg')"
      text.innerHTML = "Color - yellow"   
}














