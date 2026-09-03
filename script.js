// THYLAN SERVICES NIGERIA 5.0

// Testimonial Slider
const slides=document.querySelectorAll(".testimonial");
let current=0;

function showSlide(){
slides.forEach(s=>s.classList.remove("active"));
slides[current].classList.add("active");
current=(current+1)%slides.length;
}

if(slides.length>0){
showSlide();
setInterval(showSlide,4000);
}

// Animated Statistics
const counters=document.querySelectorAll(".stats h2");

counters.forEach(counter=>{
const target=counter.innerText.replace("+","").replace("%","");
let count=0;

const update=()=>{
count+=1;
if(count<=target){
counter.innerText=count+(counter.innerText.includes("%")?"%":"+");
requestAnimationFrame(update);
}
}
update();
});
