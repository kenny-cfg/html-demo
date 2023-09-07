console.log('HELLO from index.js')

document.getElementById('secondParagraph').innerHTML = 'HELLO from <b>Outer space</b>, yo!'

document.getElementById('mainParagraph').innerText = 'Hello from <b>Outer space</b>'

for (let i = 0; i < 50; i++) {
  document.write(i)
}
document.write('HELLO')