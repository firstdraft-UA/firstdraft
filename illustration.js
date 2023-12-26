let block = document.getElementsByClassName("block");
let title = document.getElementsByClassName("clickTitle");
let text = document.getElementsByClassName("text");
let height = [26.6,21.86,29.29,22,23.6,23.12,22.91,24.65,28,10];
let check = [];
let en=document.getElementsByClassName("en-button");
let ua=document.getElementsByClassName("ukr-button");
let UA=document.getElementsByClassName("UA");
let EN=document.getElementsByClassName("EN");
let line=document.getElementsByClassName("comments-line");
let comment=document.getElementsByClassName("comment-text");
let circle=document.getElementsByClassName("progress-line");
let position=0;
let line1=document.getElementsByClassName("toggle");
let menu=document.getElementsByClassName("menu-mobile");
let body=document.getElementsByTagName("body");
let check1=false;
let maxHeight=[];
let commentNum=0;
let ENcheck=false;
for(let i=0;i<height.length;i++){
  maxHeight.push(height[i]+40)
  console.log(maxHeight)
}
en[0].addEventListener("click", function(){
  ENcheck=true;
  comm()
    for(let i=0;i<UA.length;i++){
        UA[i].style.display="none";
        EN[i].style.display="block";
    }
})
ua[0].addEventListener("click", function(){
  ENcheck=false;
  comm()
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
        text[i].style.maxHeight = "1000px";
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
function comm(){
  for(let i=0;i<comment.length;i++){
    if(ENcheck){
      commentNum=4;
      if(commentNum==i){
        comment[i].style.opacity="100%";
        comment[i].style.display="block";
      }
      else{
        comment[i].style.opacity="0%"
        comment[i].style.display="none";
      }
    }
    else{
      commentNum=0;
      if(commentNum==i){
      comment[i].style.opacity="100%";
      comment[i].style.display="block";
    }
    else{
      comment[i].style.opacity="0%"
      comment[i].style.display="none";
    }
    }
    
  }
}
comm()
function right(){
  commentNum++;
  console.log("sdf")
  if(ENcheck){
    if(commentNum==8){
      commentNum=4;
    }
  }
  else{
    if(commentNum==4){
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
    if(commentNum==3){
      commentNum=7;
    }
  }
  else{
    if(commentNum==-1){
      commentNum=3;
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
