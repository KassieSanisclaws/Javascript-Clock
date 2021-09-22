setInterval(setClock, 1000)

const secondsPointer = document.querySelector("[data-seconds-pointer]");
const minutePointer = document.querySelector("[data-minute-pointer]");
const hourPointer = document.querySelector("[data-hour-pointer]");

function setClock(){
    const cuurrentDate = new Date()
    const secondsRotate = cuurrentDate.getSeconds() / 60
    const minutesRotate = (secondsRotate + cuurrentDate.getMinutes()) / 60
    const hoursRotate =  (minutesRotate + cuurrentDate.getHours()) / 12
 
    setRotation(secondsPointer, secondsRotate)
    setRotation(minutePointer, minutesRotate)
    setRotation(hourPointer, hoursRotate)
}

function setRotation(element, rotationRatio){
    element.style.setProperty("--rotation", rotationRatio * 360)
}

setClock()