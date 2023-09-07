const buttonElement = document.getElementById('button')
const inputElement = document.getElementById('inputBox')

buttonElement.addEventListener('click', () => {
  const nameEntered = inputElement.value
  console.log(nameEntered)
})

// buttonElement.onclick = () => {
//   const nameEntered = inputElement.value
//   console.log(nameEntered)
// }