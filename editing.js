let block = document.getElementsByClassName("block");
let title = document.getElementsByClassName("clickTitle");
let text = document.getElementsByClassName("text");
let height = [14.72,11.66,14.51,15.76,16.11,13.95,15.69,12.84,22.09,15.97,12.56,11.11,10.41,11.66,10.41];
let check = [];
let en=document.getElementsByClassName("en-button");
let ua=document.getElementsByClassName("ukr-button");
let UA=document.getElementsByClassName("UA");
let EN=document.getElementsByClassName("EN");
let comment=document.getElementsByClassName("comment-text");
let circle=document.getElementsByClassName("progress-line");
let video=document.getElementsByClassName("vid");
let videoNum=0;
let commentNum=0;
let line=document.getElementsByClassName("toggle");
let menu=document.getElementsByClassName("menu-mobile");
let body=document.getElementsByTagName("body");
let check1=false;
let maxHeight=[];
let ENcheck=false;
for(let i=0;i<height.length;i++){
  maxHeight.push(height[i]+20)
}
for(let i=0;i<en.length;i++){
  en[i].addEventListener("click", function(){
    ENcheck=true;
    commentNum=2;
      for(let i=0;i<UA.length;i++){
          UA[i].style.display="none";
          EN[i].style.display="block";
          for(let i=0;i<comment.length;i++){
            console.log(i)
            if(i==2){
              comment[i].style.opacity="100%";
              comment[i].style.display="block";
            }
            else{
              comment[i].style.opacity="0%"
              comment[i].style.display="none";
            }
          }
      }
  })
  ua[i].addEventListener("click", function(){
    ENcheck=false;
    commentNum=0;
      for(let i=0;i<UA.length;i++){
          UA[i].style.display="block";
          EN[i].style.display="none";
      }
      for(let i=0;i<comment.length;i++){
        console.log(i)
        if(i==0){
          comment[i].style.opacity="100%";
          comment[i].style.display="block";
        }
        else{
          comment[i].style.opacity="0%"
          comment[i].style.display="none";
        }
      }
  })
}

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
for(let i=0;i<comment.length;i++){
  if(commentNum==i){
    comment[i].style.opacity="100%";
    comment[i].style.display="block";
  }
  else{
    comment[i].style.opacity="0%"
    comment[i].style.display="none";
  }
}
function right(){
  commentNum++;
  if(ENcheck){
    if(commentNum==4){
      commentNum=2;
    }
  }
  else{
    if(commentNum==2){
    commentNum=0;
    }
  }
  
    for(let i=0;i<comment.length;i++){
      if(commentNum==i){
        
        setTimeout(()=>{
          comment[i].style.display="block";
          setTimeout(()=>{
            comment[i].style.opacity="100%";
            
          },100)
        },200)
        

      }
      else{
        comment[i].style.opacity="0%"
        setTimeout(()=>{
          comment[i].style.display="none";
        },200)
        
      }
    }

}
function left(){
  commentNum--;
  if(ENcheck){
    if(commentNum==1){
      commentNum=3;
    }
  }
  else{
    if(commentNum==-1){
    commentNum=1;
    }
  }
    for(let i=0;i<comment.length;i++){
      if(commentNum==i){
        setTimeout(()=>{
          comment[i].style.display="block";
          setTimeout(()=>{
            comment[i].style.opacity="100%";
            
          },100)
        },200)
      }
      else{
        comment[i].style.opacity="0%"
        setTimeout(()=>{
          comment[i].style.display="none";
        },200)
      }
  }
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
        

          video[i].style.display="block";
            video[i].style.opacity="100%";
            


        

      }
      else{
        video[i].style.opacity="0%"
          video[i].style.display="none";        
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
          video[i].style.display="block";
            video[i].style.opacity="100%";
            
      }
      else{
        video[i].style.opacity="0%"
          video[i].style.display="none";
      }
  }
}
function toggle(){
  check1=!check1;
  if(check1){
      line[0].classList.add("line1");
      line[0].classList.remove("line");
      menu[0].style.right="0px";
      body[0].style.position="fixed";
  }
  else{
      line[0].classList.remove("line1");
      line[0].classList.add("line");
      menu[0].style.right="-100%";
      body[0].style.position="static";

  }
}
function off(){
      line[0].classList.remove("line1");
      line[0].classList.add("line");
      body[0].style.position="static";
      menu[0].style.right="-100%";
      check1=!check1;
}