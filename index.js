console.log('HELLO from index.js')

document.getElementById('secondParagraph').innerHTML = 'HELLO from <b>Outer space</b>, yo!'

document.getElementById('mainParagraph').innerText = 'Hello from <b>Outer space</b>'

const thirdParagraphContents = document.getElementById('thirdParagraph').innerText

console.log(thirdParagraphContents)

let newThirdParagraphContents = ''

for (let i = 0; i < 50; i++) {
  newThirdParagraphContents += ' '
  newThirdParagraphContents += thirdParagraphContents
}

document.getElementById('thirdParagraph').innerText = newThirdParagraphContents

for (const header of document.getElementsByClassName('smallHeader')) {
  header.innerText = 'This is a small header'
}

document.getElementsByClassName('smallHeader')[0].innerText = 'This has index 0'