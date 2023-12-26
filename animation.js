let block = document.getElementsByClassName("block");
let title = document.getElementsByClassName("clickTitle");
let text = document.getElementsByClassName("text");
let height = [14.58,14.58,14.58,12,11,13.54,10.41,12,12,10];
let check = [];
let en=document.getElementsByClassName("en-button");
let ua=document.getElementsByClassName("ukr-button");
let UA=document.getElementsByClassName("UA");
let EN=document.getElementsByClassName("EN");
let line=document.getElementsByClassName("comments-line");
let circle=document.getElementsByClassName("progress-line");
let video=document.getElementsByClassName("vid");
let videoNum=0;
let position=0;
let line1=document.getElementsByClassName("toggle");
let menu=document.getElementsByClassName("menu-mobile");
let body=document.getElementsByTagName("body");
let check1=false;
let maxHeight=[];
for(let i=0;i<height.length;i++){
  maxHeight.push(height[i]+20)
}
en[0].addEventListener("click", function(){
    for(let i=0;i<UA.length;i++){
        UA[i].style.display="none";
        EN[i].style.display="block";
    }
})
ua[0].addEventListener("click", function(){
    for(let i=0;i<UA.length;i++){
        UA[i].style.display="block";
        EN[i].style.display="none";
    }
})
function open(i){
  if (check[i]) {
    check[i] = false;
    for (let i = 0; i < block.length; i++) {
      if (block[i].id == event.target.id) {
        if(window.innerWidth<500){
          block[i].style.height = maxHeight[event.target.id] + "vw";
        }
        else{
        block[i].style.height = height[event.target.id] + "vw";

        }
      }
    }
    for (let i = 0; i < text.length; i++) {
      
      if (text[i].id == event.target.id) {
        text[i].style.maxHeight = "500px";
      }
    }
  } else {
    check[i] = true;
    for (let i = 0; i < block.length; i++) {
      if (block[i].id == event.target.id) {
        if(window.innerWidth<500){
          block[i].style.height = "14.29vw";
          }
          else{
            block[i].style.height = "7.29vw";
          }
      }
    }
    for (let i = 0; i < text.length; i++) {
      if (text[i].id == event.target.id) {
        text[i].style.maxHeight = "0px";
      }
    }
  }
}
for (let i = 0; i < block.length; i++) {
  check.push(true);
  block[i].addEventListener("click", function () {
    open(i);
  });
}
for(let i=0;i<video.length;i++){
  if(i!=videoNum){
    video[i].style.display="none";
    video[i].style.opacity="0%";
  }
}
function rightV(){
  videoNum++;
  if(videoNum==3){
    videoNum=0;
  }
    for(let i=0;i<video.length;i++){
      if(videoNum==i){
        
        setTimeout(()=>{
          video[i].style.display="block";
          setTimeout(()=>{
            video[i].style.opacity="100%";
            
          },100)
        },200)
        

      }
      else{
        video[i].style.opacity="0%"
        setTimeout(()=>{
          video[i].style.display="none";
        },200)
        
      }
    }

}
function leftV(){
  videoNum--;
  if(videoNum==-1){
    videoNum=2;
  }
    for(let i=0;i<video.length;i++){
      if(videoNum==i){
        setTimeout(()=>{
          video[i].style.display="block";
          setTimeout(()=>{
            video[i].style.opacity="100%";
            
          },100)
        },200)
      }
      else{
        video[i].style.opacity="0%"
        setTimeout(()=>{
          video[i].style.display="none";
        },1000)
      }
  }
}
function toggle(){
  check1=!check1;
  if(check1){
      line1[0].classList.add("line1");
      line1[0].classList.remove("line");
      menu[0].style.right="0px";
      body[0].style.position="fixed";
  }
  else{
      line1[0].classList.remove("line1");
      line1[0].classList.add("line");
      menu[0].style.right="-100%";
      body[0].style.position="static";

  }
}
function off(){
      line1[0].classList.remove("line1");
      line1[0].classList.add("line");
      body[0].style.position="static";
      menu[0].style.right="-100%";
      check1=!check1;
}