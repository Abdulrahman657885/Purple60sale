// Scroll To Top Functionality Start:
var scrollbtn = document.querySelector('#scroll-to-top');

window.addEventListener('scroll', () =>{
  if(window.pageYOffset > 1000){
    scrollbtn.style.display = "block";
  }else{
    scrollbtn.style.display = "none";
  }
})

scrollbtn.addEventListener(('click'), () =>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})
// Scroll To Top Functionality End.
