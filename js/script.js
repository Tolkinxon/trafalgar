const pElelment = document.querySelectorAll('.header-item')

pElelment.forEach(item => {
   let width = getComputedStyle(item).width.slice(0, 4)
   item.style.width =`${+width + 10}px`
   console.log(width);
})



