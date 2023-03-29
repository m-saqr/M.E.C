let seeMore = document.getElementById("btn");
let count = 4;

seeMore.addEventListener("click", ()=>{
    let box = document.querySelectorAll(".box");
    for(let i = 0 ; i < count + 4 ; i++){
        box[i].style.display = 'block';
    }

    count += 4;

    if(count >= box.length){
     seeMore.style.opacity="0.5";
    }
})