let toggle = document.querySelector('.toggle')
let menu = document.querySelector('.menu')

toggle.addEventListener('click', ()=>{
   menu.classList.toggle('active')

   if(menu.classList.contains('active')){
      toggle.classList.add('open')
   } else{
      toggle.classList.remove('open')
   }
})

