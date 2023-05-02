const h1=document.querySelector("div.hello:first-child h1");

console.log(h1);

function handleTitleClick()
{
    const currentColor=h1.style.color;
    let newColor;
    console.log(h1.style.color);
    if(currentColor==="tomato"){
        newColor="blue";
    }else{
        newColor="tomato";
    }
    h1.style.color=newColor;
}

h1.addEventListener("click",handleTitleClick);