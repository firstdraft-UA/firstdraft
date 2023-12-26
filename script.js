let en=document.getElementsByClassName("en-button");
let ua=document.getElementsByClassName("ukr-button");

let UA=document.getElementsByClassName("UA");
let EN=document.getElementsByClassName("EN");
let check=false;
let line=document.getElementsByClassName("toggle");
let menu=document.getElementsByClassName("menu-mobile");
let body=document.getElementsByTagName("body");
let username=document.getElementById("username");
let email=document.getElementById("email");
let content=document.getElementById("content");
let submit=document.getElementById("send")
for(let i=0; i<en.length;i++){
    en[i].addEventListener("click", function(){
    for(let i=0;i<UA.length;i++){
        UA[i].style.display="none";
        EN[i].style.display="block";
    }
})
ua[i].addEventListener("click", function(){
    for(let i=0;i<UA.length;i++){
        UA[i].style.display="block";
        EN[i].style.display="none";
    }
})
}

function toggle(){
    check=!check;
    if(check){
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
        check=!check;
}



