const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let IntervalId = null

const trafficLght = (event) => {
   stopAutomatic() 
   turnOn[event.target.id]()
    
}

const nextIndex = () => {
    if (colorIndex < 2) {
        colorIndex++
    } else{
        colorIndex = 0
    }
}

const changecolor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}

const stopAutomatic = () => {
    clearInterval( IntervalId)
}

const turnOn = {
    'red': () => img.src = 'imgs/vermelho.png',
    'yellow': () => img.src = 'imgs/amarelo.png',
    'green': () => img.src = 'imgs/verde.png',
    'automatic': () => IntervalId = setInterval(changecolor, 1000) 
}


buttons.addEventListener('click', trafficLght)