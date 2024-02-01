let slides=document.querySelectorAll(".slide");
let counter=0;
slides.forEach((slide,index)=>{
  slide.style.left=`${index*100}%`;
})

function goprev() {
  if(counter<=0) {
    return;
  }
  counter--
slideimage()
}

function gonext() {
  if(counter>2) {
    return;
  }
counter++
slideimage()
}


let slideimage=()=>{
  console.log(counter)
  slides.forEach(value=>{
    console.log("hello")
    value.style.transform=`translateX(-${counter*100}%)`
  })

}

let number=0;

setInterval(()=>{
 number++
  if(number>3) {
    return number=-1;
  }
  slides.forEach(value=>{
    console.log("hello")
    value.style.transform=`translateX(-${number*100}%)`
  })
},2000)