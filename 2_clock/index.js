const hoursHand = document.querySelector('.hours')
const minutesHand = document.querySelector('.minutes')
const secondsHand = document.querySelector('.seconds')

setInterval(setDate, 1000)

function setDate(){
    const now = new Date()

    const seconds = now.getSeconds()
    const secondsDegrees = 6*seconds - 90
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = now.getMinutes()
    const minutesDegrees = 6*minutes - 90
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = now.getHours()
    const hoursDegrees = 6*hours - 90
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`

    let time = (""+hours).split("")
    time = time.concat((""+minutes).split(""))

    for(let i = 0; i < 4; i++){
        document.querySelector(`#d${i}`).innerHTML = time[i];
    }

}
