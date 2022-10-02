// Getting the elements that we going to using it 
const buttonEl = document.querySelector(".btn")
const coloredDivEl = document.querySelector('.colored-div')


// Colors collections
const colors = [ "blueviolet", "black", "teal", "sienna" ]
let i = 0

// Events
buttonEl.addEventListener('click', () => {
    coloredDivEl.style.backgroundColor = colors[i]
    i++

    if (i > colors.length) {
        i = 0
    }
})