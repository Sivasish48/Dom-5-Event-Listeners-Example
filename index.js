// 1. WE CAN COMBINE EVENT LISTENERS WITH CSS


 const revealBtn = document.querySelector(".reveal-btn");

 const hiddenContent = document.querySelector(".hidden-content");

 function reContent (){
    if(hiddenContent.classList.contains("reveal-btn")){
        hiddenContent.classList.remove("reveal-btn");
    } else {
        hiddenContent.classList.add("reveal-btn");
    }
 };

revealBtn.addEventListener("click", reContent);
 