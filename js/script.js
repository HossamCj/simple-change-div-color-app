// Getting the elements that we going to using it 
const buttonEl = document.querySelector(".btn")
const coloredDivEl = document.querySelector('.colored-div')


// Events
buttonEl.addEventListener('click', () => {
    coloredDivEl.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8)
})