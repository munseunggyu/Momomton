const loginFrom = document.querySelector('#login-form')
const LoginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'
function onLoginSubmit(event){

  event.preventDefault();
  loginFrom.classList.add(HIDDEN_CLASSNAME)
  const userName = LoginInput.value
  paintGreetings(userName)
  localStorage.setItem(USERNAME_KEY,userName)
}
const savedUsername = localStorage.getItem(USERNAME_KEY)

function paintGreetings(username){
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

if(savedUsername === null){
  loginFrom.classList.remove(HIDDEN_CLASSNAME)
  loginFrom.addEventListener('submit',onLoginSubmit)
}else{
  paintGreetings(savedUsername)
}


