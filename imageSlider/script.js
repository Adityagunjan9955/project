const images=[
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1020/600/400"
];
let currentIndex=0;
const slider=document.getElementById("slide");
const btn1=document.querySelector(".prev");
const btn2=document.querySelector(".next");

function showImage(){
  slider.src=images[currentIndex];
}
function nextImage(){
  currentIndex++;
  if(currentIndex>=images.length){
    currentIndex=0;
  }
  showImage();
}

function prevImage(){
  currentIndex--;
  if(currentIndex<0){
    currentIndex=images.length-1;
  }
  showImage();
}

setInterval(nextImage,3000)
btn1.addEventListener("click",prevImage);
btn2.addEventListener("click",nextImage);
showImage();