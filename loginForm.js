const buttonElement = document.getElementById('loginButton')
const usernameElement = document.getElementById('usernameInput')
const passwordElement = document.getElementById('passwordInput')

buttonElement.onclick = () => {
  const username = usernameElement.value
  const password = passwordElement.value
  console.log(username, password)
}