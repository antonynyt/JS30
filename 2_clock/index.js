const hoursHand = document.querySelector('.hours')
const minutesHand = document.querySelector('.minutes')
const secondsHand = document.querySelector('.seconds')

const hands = document.querySelectorAll('.hand')

setInterval(setTime, 1000)

function setTime(){
    const now = new Date()

    const seconds = now.getSeconds()
    const secondsDegrees = 6*seconds - 90
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`

    let minutes = now.getMinutes()
    const minutesDegrees = 6*minutes - 90
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`

    let hours = now.getHours()
    const hoursDegrees = 6*hours - 90
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`

     //we stop the transition when it's 59s beacause it's glitchy
     if (seconds == 59){
        hands.forEach( hand => {
            hand.style.transition = 'none'
        })
    }else if (seconds == 1){
        hands.forEach( hand => {
            hand.style.transition = ''
        })
    }

    //split the hours in an array 16h = ['1','6']
    let time = (""+hours).split("")

    //if the time is < 10h then we add a 0 at the begining
    if (hours < 10 && time.length < 4){
        time.unshift('0')
    }

    //split the hours and add it to the time array
    time = time.concat((""+minutes).split(""))
    
    //if the minutes < 10 we add a 0 before the last item of the array
    if (minutes < 10 && time.length < 4){
        time.push(time[time.length - 1]) //we push the last number again
        time[2] = "0" //replace the first number of minutes with '0'
    }

    //replace the text in each digit span #d0 #d1 ...
    for(let i = 0; i < 4; i++){
        document.querySelector(`#d${i}`).innerHTML = time[i];
    }
}
