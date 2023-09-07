const buttonElement = document.getElementById('button')
const inputElement = document.getElementById('inputBox')

buttonElement.onclick = () => {
  const nameEntered = inputElement.value
  console.log(nameEntered)
}