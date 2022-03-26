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

        //if the digit is 9 the next must be 0
        if (parseFloat(time[i]) == 9){
            document.querySelector(`#digit-${i} .before`).innerHTML = 0;
        }else{
            document.querySelector(`#digit-${i} .before`).innerHTML = parseFloat(time[i]) + 1;
        }
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
