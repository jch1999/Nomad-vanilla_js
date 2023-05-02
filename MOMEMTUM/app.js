const h1=document.querySelector("div.hello:first-child h1");

console.log(h1);

function handleTitleClick(){
    const clickedClass="clicked";
    // if(h1.classList.contains(clickedClass))
    // {
    //     h1.classList.remove(clickedClass);
    // }else{
    //     h1.classList.add(clickedClass);
    // }
    
    // console.log(h1.className);
    h1.classList.toggle(clickedClass);
}

h1.addEventListener("click",handleTitleClick);