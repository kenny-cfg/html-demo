const buttonElement = document.getElementById('loginButton')
const usernameElement = document.getElementById('usernameInput')
const passwordElement = document.getElementById('passwordInput')

// buttonElement.addEventListener('click, () => {
//   blah
// })
buttonElement.onclick = () => {
  const username = usernameElement.value
  const password = passwordElement.value
  if (username === 'username' && password === 'password') {
    console.log('You have logged in')
  } else {
    console.log('You are trying to hack me')
  }
}