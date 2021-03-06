const hoursHand = document.querySelector('.hours')
const minutesHand = document.querySelector('.minutes')
const secondsHand = document.querySelector('.seconds')

const hands = document.querySelectorAll('.hand')

const digit0 = document.querySelector('#digit-0')
const digit1 = document.querySelector('#digit-1')
const digit2 = document.querySelector('#digit-2')
const digit3 = document.querySelector('#digit-3')

const digits = document.querySelectorAll('.digit div')

setInterval(setTime, 1000)

function setTime(){
    const now = new Date()

    const seconds = now.getSeconds()
    const secondsDegrees = 360/60*seconds - 90
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`

    let minutes = now.getMinutes()
    const minutesDegrees = 360/60*minutes - 90
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`

    let hours = now.getHours()
    const hoursDegrees = (360/12*hours)+(minutes*30/60) - 90
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`

     //we stop the transition when it's 59s beacause it's glitchy
     if (seconds == 59){
        hands.forEach( hand => {
            hand.style.transition = 'none'
        })
    }else if(seconds != 0){
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
        document.querySelector(`#d${i}`).innerHTML = time[i]
        document.querySelector(`#digit-${i} .before`).innerHTML = parseFloat(time[i]) + 1
    }

    //if it's 20h the next number cant be 31h
    if (parseFloat(time[0]) == 2){
        document.querySelector(`#digit-0 .before`).innerHTML = 0
    }
    
    //if it's 09h next is 10h
    if (parseFloat(time[1]) == 9){
        document.querySelector(`#digit-1 .before`).innerHTML = 0
    }

    //if it's 00h59 after 5 is 0 for 01h00
    if (parseFloat(time[2]) == 5){
        document.querySelector(`#digit-2 .before`).innerHTML = 0
    }
    
    //if it's 00h09 next is 01h10
    if (parseFloat(time[3]) == 9){
        document.querySelector(`#digit-3 .before`).innerHTML = 0
    }
    
    //if it's 23h next is 00h
    if (hours == 23) {
        document.querySelector(`#digit-0 .before`).innerHTML = 0
        document.querySelector(`#digit-1 .before`).innerHTML = 0
    }

    //animations for each digit (convert in % of seconds) 59s = the end of the animation / 1s = the start of the next
    digit0.style.transform = `translateY(${(parseFloat(time[1])*60+seconds)*100/35999}%)` //(second digit of hours * 60 + seconds)*100/3599s
    digit1.style.transform = `translateY(${(minutes*60+seconds)*100/3599}%)`
    digit2.style.transform = `translateY(${(parseFloat(time[3])*60+seconds)*100/599}%)`
    digit3.style.transform = `translateY(${seconds*100/59}%)`

    //stop the animation transition for when the seconds reaches 60 (0)
    if (seconds == 0){
         digits.forEach( digit => {
            digit.style.transition = 'none'
        })
    }else if(seconds == 1){ //enable transition again at 1s
        digits.forEach( digit => {
            digit.style.transition = ''
        })
    }

}
