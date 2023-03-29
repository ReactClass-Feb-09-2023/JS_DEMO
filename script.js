// DOM
// selecting an element from the documents
const title = document.querySelector('#title')
title.innerHTML = 'New Header'
const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(paragraph => {
  paragraph.innerHTML = 'New Text'
})
console.log(paragraphs)

// creating elements
const newParagraph = document.createElement('p')
newParagraph.innerText = 'Virtual P tag'

const body = document.querySelector('body')
body.appendChild(newParagraph)

const unorderedList = document.createElement('ul')
const listItem1 = document.createElement('li')
listItem1.innerHTML = 'list item #1'
const listItem2 = document.createElement('li')
listItem2.innerHTML = 'list item #2'
body.appendChild(unorderedList)
unorderedList.appendChild(listItem1)
unorderedList.appendChild(listItem2)

// Manipulating CSS

title.style.backgroundColor = 'blue'
title.style.color = 'white'
title.style.cssText = `
  font-size: 4rem;
  color: red;
`

// Attributes

const input = document.querySelector('input')
input.setAttribute('type', 'date')
input.removeAttribute('type')
console.log(input.getAttribute('id'))

// removing elements

body.removeChild(input)

// other ways to select elements

const title = document.getElementById('title')
// console.log(title)

const paras = document.getElementsByClassName('para')
// console.log(paras)

const tags = document.getElementsByTagName('input')
// console.log(tags)

// classes

console.log(paras[0].classList)
