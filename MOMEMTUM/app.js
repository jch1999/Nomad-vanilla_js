const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");

//링크(a)의 기본동작은 다른페이지로의 이동이다. 그것을 막아보자
const link=document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
    console.log(event);
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    console.dir(event.composedPath());
    alert("clicke");//alert는 특이하게 호출되면 다른 모든 동작을 일시정지시킨다.
    //그래서 아무도 안쓴다고 한다
}

loginForm.addEventListener("submit",onLoginSubmit);

link.addEventListener("click",handleLinkClick);

//이벤트 리스너의 함수는 프로그래머가 실행시키는 것이 아닌 js가 실행시키는 것이다.
//우리는 js에게 함수의 이름만 주고 실행하는 것은 js의 몫이다.
//그러나 가끔은 그 실행을 멈춰야 할 때가 있다.
//뭐가 클릭됐는지 어디가 클릭됐는지 등 정보를 알고 싶을 때이다.

//js는 단지 함수를 실행시키기만 하는 것이 아닌,
//js는 함수를 실행시키는 동시에 그 함수의 첫 번째 인자로 object를 넣어 준다.
//그리고 이 object에는 방금 일어난 event에 대한 여러 정보가 담겨있다.
//handleLinkClick({information about the event that just happend})
//이건 js가 우리에게 공짜로 주는 것이다.
//우리가 할 것은 받아들일 공간(매개변수)을 만드는 것이다.