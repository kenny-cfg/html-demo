const buttonElement = document.getElementById('button')
const inputElement = document.getElementById('inputBox')
const listElement = document.getElementById('list')

buttonElement.addEventListener('click', () => {
  const nameEntered = inputElement.value
  const newListItem = document.createElement('li')
  newListItem.innerText = nameEntered
  listElement.append(newListItem)
})

// buttonElement.onclick = () => {
//   const nameEntered = inputElement.value
//   console.log(nameEntered)
// }