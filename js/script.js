let blue = document.querySelector('.filter__color-input1')
let purple = document.querySelector('.filter__color-input2')
let midnight = document.querySelector('.filter__color-input4')
let starlight = document.querySelector('.filter__color-input5')
let red = document.querySelector('.filter__color-input6')
let yellow = document.querySelector('.filter__color-input3')
let img = document.querySelectorAll('.scroll__img')
let text = document.querySelector('.filter__color-text')

blue.onclick = () => {
   img[0].style.backgroundImage = "url('./img/blue-iphone.jpg')";
   img[1].style.backgroundImage = "url('./img/blue-iphone.jpg')";
   text.innerHTML = "Color - blue";
}
purple.onclick = () => {
   img[0].style.backgroundImage = "url('./img/purple-iphone.jpg')";
   img[1].style.backgroundImage = "url('./img/purple-iphone.jpg')";
   text.innerHTML = "Color - purple";
}
midnight.onclick = () => {
   img[0].style.backgroundImage = "url('./img/midknight-iphone.jpg')";
   img[1].style.backgroundImage = "url('./img/midknight-iphone.jpg')";
   text.innerHTML = "Color - midnight";
}
starlight.onclick = () => {
   img[0].style.backgroundImage = "url('./img/starlight-iphone.jpg')";
   img[1].style.backgroundImage = "url('./img/starlight-iphone.jpg')";
   text.innerHTML = "Color - starlight";
}
red.onclick = () => {
   img[0].style.backgroundImage = "url('./img/red-iphone.jpg')";
   img[1].style.backgroundImage = "url('./img/red-iphone.jpg')";
   text.innerHTML = "Color - red";
}
yellow.onclick = () => {
   img[0].style.backgroundImage = "url('./img/yellow-phone.jpeg')";
   img[1].style.backgroundImage = "url('./img/yellow-phone.jpeg')";
   text.innerHTML = "Color - yellow";
}

// window.addEventListener('scroll', scroll)
// function scroll() {
//    let fixed;
//    let el = document.querySelectorAll('.metka');
//    el = el[0];
//    fixed = (el.style.position == "fixed")
//    let top = document.documentElement.scrollTop;
//    if (top > 430 && !fixed && top < 1138) {
//       el.style.position = 'fixed';
//       el.style.top = "50px";
//    } else if (top < 430 && fixed) {
//       el.style.position = "static";
//       el.style.top = "0px";
//    }
//    if (top > 1050) {
//       el.style.transition = "none";
//    }
//    if (top < 1050) {
//       el.style.transition = "0.5s ease";
//    }
//    if (top < 1138) {
//       el.style.marginTop = '0px';
//    }
//    if (top > 1138 && fixed) {
//       el.style.position = "static";
//       el.style.top = "0px";
//       el.style.marginTop = '799px';
//    }
// }





