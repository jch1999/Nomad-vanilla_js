// const title = document.querySelector("div.hello:first-child h1 ");

// title.innerText="hello";
// console.dir(title);

// title.style.color="blue";

const title=document.querySelector("div.hello:first-child h1");

function handleTitleClick()
{
    //console.log("title was clicked!");
    title.style.color="blue";
}
title.addEventListener("click",handleTitleClick);