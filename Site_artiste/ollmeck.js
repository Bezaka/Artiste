                   // Animation

window.addEventListener('scroll', function(){
  const header =document.querySelector('header');
  header.classList.toggle("sticky",window.scrollY > 0);
})

//  let Animation = anime({
//     targets:'h3'
//     translateX: '40%'

//  })