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
window.addEventListener('scroll', scroll)
function scroll() {
   let fixed;
   let el = document.querySelector('.scroll__img');
   fixed = (el.style.position == "fixed")
   let top = window.pageYOffset || document.documentElement.scrollTop;
   console.log(top);

   if (top > 430 && !fixed && top < 1138) {
      el.style.position = 'fixed';
      el.style.top = "50px";
   } else if (top < 430 && fixed) {
      el.style.position = "static";
      el.style.top = "0px";
   }
   if (top < 1050) {
      el.style.transition = "0.5s ease"
   }
   if (top < 1138) {
      el.style.marginTop = '0px'
   }
   if (top > 1138 && fixed) {
      el.style.position = "static";
      el.style.top = "0px";
      el.style.marginTop = '799px';
      el.style.transition = "none";
   }
}





