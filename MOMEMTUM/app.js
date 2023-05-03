const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");

function onLoginSubmit(event) {
    //form의 기본 동작을 막아라
    //브라우저는 form을 submit할 경우 기보적으로 페이지를 새로고침하도록 되어 있다.
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
    console.log(event);
}

loginForm.addEventListener("submit",onLoginSubmit);

//이벤트 리스너를 추가했을 때
//이벤트가 발생하면 브라우저가 function을 실행시키기는 하지만
//브라우저는 함수에 정보를 주고있다.
//onLoginsubmit(infomation)
//브라우저는 브라우저 내에서 event로부터 정보를 잡아내서
//onLoginsubmit() 실행 버튼을 누른다
//매개변수가 비어있는채로가 아닌 추가적인 정보를 자긴 채로 호출하게 한다.
//첫번째 매개변수로 주어진다.

//모든 EventListenr function의 첫번째 argument는 항상
//방금 발생한 이벤트의 정보가 된다.
