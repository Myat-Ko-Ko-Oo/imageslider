slide = document.querySelectorAll(`.slide`)
btn = document.querySelectorAll(`.btn`)
let currentslide = 1
active = (i)=>{
for(el of slide){
    el.classList.remove("active")
 for(el of btn){
    el.classList.remove("active")
 }   
}
slide[i].classList.add("active")
btn[i].classList.add("active")
}
// let i  = 0
// for (el of btn){

// el.addEventListener("click",()=>{
// active(i)
// currentslide = i
// i++
// })


// }

btn.forEach((el,i) => {
   el.addEventListener("click",()=>{
      active(i)
      currentslide  = i 
   
      //console.log(currentslide)
   })
});







// for(i=0;i<slide.length;i++){
  
//    btn[i].click()

// }
//auto click
let i = -1
increasenumber =()=>{
   if (i<slide.length-1){
      i++
    
   }else{
      i=0
   }
btn[i].click()
}



setInterval(() => {
   increasenumber(i)
   

}, 2000);


