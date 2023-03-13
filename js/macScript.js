let inpColl = document.querySelectorAll('.filter__label-var-not');
let text = document.querySelector('.text-block__price');
let inpArr = [];
for (let i of inpColl) {
   inpArr.push(i);
}
let objPrice = {
   '512 GB SSD': '$1,999',
   '1 TB SSD': '$2 199',
   '2 TB SSD': '$2 599',
   '4 TB SSD': '$3 199'
}
for (let i of inpArr) {
   i.onclick = () => {
      if (!i.classList.contains('inp-active')) {
         i.classList.add('inp-active');
         i.querySelector('.box-text') ? text.innerHTML = objPrice[i.querySelector('.box-text').innerHTML.trim()] : text.innerHTML = objPrice[i.innerHTML];
         inpArr.splice(inpArr.indexOf(i), 1)
         for (let k of inpArr) {
            k.classList.remove('inp-active');
         }
         inpArr.splice(inpArr.indexOf(i), 0, i);
      }
   }
}
let labelOne = document.querySelector('.filter__label-one');
let labelTwo = document.querySelector('.filter__label-two');
let textImg = document.querySelector('.text-block__sup');
let img = document.querySelector('.variants__img-block');
let labelArrFace = [labelOne,labelTwo];
let labelArr = [];
for (let i of labelArrFace){
   labelArr.push(i);
}
let objMapImg = {
   'White':'url(./img/macOne.png)',
   'Space Grey':'url(./img/macTwo.png)'
}
for (let i of labelArr){
   i.onclick = () =>{
      i.classList.add('active-one');
      textImg.innerHTML = i.innerHTML;
      img.style.backgroundImage = objMapImg[i.innerHTML];
      labelArr.splice(labelArr.indexOf(i),1);
      for (let k of labelArr){
         k.classList.remove('active-one')
      }
      labelArr.splice(labelArr.indexOf(i),0,i);
   }
}