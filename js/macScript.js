let inpColl = document.querySelectorAll('.filter__label-var-not');
let text = document.querySelector('.text-block__price');
let n = 1990
inpColl.forEach(item => {
   item.onclick = () => {
      if (!item.classList.contains('inp-active')) {
         inpColl.forEach(ktem => ktem.classList.remove('inp-active'))
         item.classList.add('inp-active');
         text.innerHTML = `$${addCommas(n + +item.getAttribute('data-price'))}`
      }
   }
});
let labelArr = document.querySelectorAll('.inp');
let img = document.querySelector('.variants__img-block');
let objMapImg = {
   'White': 'url(./img/macOne.png)',
   'Space Grey': 'url(./img/macTwo.png)'
}
labelArr.forEach(item => {
   item.onclick = () => {
      if (!item.classList.contains('active-one')) {
         labelArr.forEach(ktem => ktem.classList.remove('active-one'))
         item.classList.add('active-one');
         img.style.backgroundImage = objMapImg[item.getAttribute('data-indexName')];
      }
   }
})
function addCommas(nStr) {
   // console.log(nStr);

   nStr += '';
   // console.log(nStr);

   var x = nStr.split('.');
   // console.log(x);

   var x1 = x[0];
   // console.log(x1);

   var x2 = x.length > 1 ? '.' + x[1] : '';
   console.log(x2);

   var rgx = /(\d+)(\d{3})/;
   console.log(rgx);

   while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
   }
   return x1 + x2;
}