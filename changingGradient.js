
const body = document.querySelector('body')

let colorArr = [10, 140, 67, 56, 199, 255]

function getRandomGradiet(){
    
    const colorOne = `rgb(${colorArr[0]},${colorArr[1]},${colorArr[2]})`
    const colorTwo = `rgb(${colorArr[3]},${colorArr[4]},${colorArr[5]})`
    body.style.background = `linear-gradient(45deg, ${colorOne}, ${colorTwo})`
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function changing(){
    const arr = colorArr.map(item =>{
        if(item >= 0 && item <= 255){
            return item + random(1,10)
        }else if(item >= 255){
            return item = item - random(0,255)
        }
        
    })
    return colorArr = arr
}

setInterval(() => {
    changing()
    getRandomGradiet()
    console.log(colorArr)
}, 300)
