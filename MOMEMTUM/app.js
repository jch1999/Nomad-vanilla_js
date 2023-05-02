// const title = document.querySelector("div.hello:first-child h1 ");

// title.innerText="hello";
// console.dir(title);

// title.style.color="blue";
const h1=document.querySelector("div.hello:first-child h1");

console.log(h1);

function handleTitleClick()
{
    //console.log("title was clicked!");
    h1.style.color="blue";
}

function handleMouseEnter(){
    h1.innerText="Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText="Mouse is gone!";
}

function handleWindowResize(){
document.body.style.backgroundColor="tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("All good");
}

//title.addEventListener("click",handleTitleClick);
h1.onclick=handleTitleClick;

//title.addEventListener("mouseenter",handleMouseEnter);
h1.onmouseenter=handleMouseEnter;
//title.addEventListener("mouseleave",handleMouseLeave);
h1.onmouseleave=handleMouseLeave;

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("onine",handleWindowOnline);