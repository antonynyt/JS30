const playIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg>'
const pauseIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/></svg>'
const skipForwardIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="27.5" viewBox="0 0 24 27.5"><path d="M23.5,11.9l-2,0.5c1.1,3.5,0.3,7.4-2.4,10.1c-3.9,3.9-10.2,3.9-14.1,0S1,12.3,4.9,8.4C6.9,6.5,9.4,5.5,12,5.5V9l5.9-4.6L12,0v3.5C8.9,3.5,5.9,4.7,3.5,7c-4.7,4.7-4.7,12.3,0,17c4.7,4.7,12.3,4.7,17,0C23.7,20.7,24.7,16.1,23.5,11.9z"/><path d="M9.6,20v-9H8c0,1.2-0.6,1.5-2.3,1.5V14h1.9V20H9.6z"/><path d="M14.4,10.9c-2.5,0-3.8,1.8-3.8,4.6c0,2.8,1.3,4.6,3.8,4.6c2.5,0,3.8-1.8,3.8-4.6C18.3,12.7,16.9,10.9,14.4,10.9zM14.4,18.5c-1.2,0-1.8-1.1-1.8-3s0.5-3,1.8-3c1.2,0,1.8,1.1,1.8,3S15.7,18.5,14.4,18.5z"/></svg>'
const skipBackwardIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="27.5" viewBox="0 0 24 27.5"><path d="M0.5,11.9l2,0.5c-1.1,3.5-0.3,7.4,2.4,10.1c3.9,3.9,10.2,3.9,14.1,0s3.9-10.2,0-14.1c-1.9-1.9-4.5-2.9-7.1-2.9V9L6.1,4.4L12,0v3.5c3.1,0,6.1,1.2,8.5,3.5c4.7,4.7,4.7,12.3,0,17c-4.7,4.7-12.3,4.7-17,0C0.3,20.7-0.7,16.1,0.5,11.9z"/><path d="M9.6,20v-9H8c0,1.2-0.6,1.5-2.3,1.5V14h1.9V20H9.6z"/><path d="M14.4,10.9c-2.5,0-3.8,1.8-3.8,4.6c0,2.8,1.3,4.6,3.8,4.6c2.5,0,3.8-1.8,3.8-4.6C18.3,12.7,16.9,10.9,14.4,10.9zM14.4,18.5c-1.2,0-1.8-1.1-1.8-3s0.5-3,1.8-3c1.2,0,1.8,1.1,1.8,3S15.7,18.5,14.4,18.5z"/></svg>'
const EnterFullscreenIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-2v-4h-4v-2h6v6zm-6 12v-2h4v-4h2v6h-6zm-18-6h2v4h4v2h-6v-6zm6-12v2h-4v4h-2v-6h6z"/></svg>'
const ExitFullscreenIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 3h2v4h4v2h-6v-6zm6 12v2h-4v4h-2v-6h6zm-18 6h-2v-4h-4v-2h6v6zm-6-12v-2h4v-4h2v6h-6z"/></svg>'
const SoundIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm11.008 2.093c.742.743 1.2 1.77 1.198 2.903-.002 1.133-.462 2.158-1.205 2.9l1.219 1.223c1.057-1.053 1.712-2.511 1.715-4.121.002-1.611-.648-3.068-1.702-4.125l-1.225 1.22zm2.142-2.135c1.288 1.292 2.082 3.073 2.079 5.041s-.804 3.75-2.096 5.039l1.25 1.254c1.612-1.608 2.613-3.834 2.616-6.291.005-2.457-.986-4.681-2.595-6.293l-1.254 1.25z"/></svg>'
const muteIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm15.324 4.993l1.646-1.659-1.324-1.324-1.651 1.67-1.665-1.648-1.316 1.318 1.67 1.657-1.65 1.669 1.318 1.317 1.658-1.672 1.666 1.653 1.324-1.325-1.676-1.656z"/></svg>'

const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const playToggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const volumeBtn = player.querySelector('.player__button.volume')
const ranges = player.querySelectorAll('.player__slider')
const statusDiv = player.querySelector('.status')
const fullscreen = player.querySelector('.fullscreen')
const playerControls = player.querySelector('.player__controls')

function togglePlay() {
    if(video.paused){
        video.play()
        init()
    }else{
        video.pause()
    }
}

function updatePlayBtn() {
    const icon = this.paused ? playIcon : pauseIcon
    playToggle.innerHTML = icon
    showStatus(icon)
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip)
    showStatus(this.innerHTML)
}

function handleRangeUpdate(el){
    if (el.target){el = el.target}

    video[el.name] = el.value
    el.style.backgroundSize = `${(el.value - el.min) * 100 / (el.max - el.min)}% 100%`
    if(el.name == 'volume' && el.value === '0'){
        volumeBtn.innerHTML = muteIcon
    }else if (el.name === 'volume' && el.value > 0){
        volumeBtn.innerHTML = SoundIcon
    }
}

let lastVolumeValue
function toggleMute(){
    const volumeSlider = document.querySelector('.player__slider.volume')
    
    if(volumeSlider.value === '0'){
        volumeSlider.value = lastVolumeValue
        video.volume = lastVolumeValue
        handleRangeUpdate(volumeSlider)
    }else{
        lastVolumeValue = volumeSlider.value
        volumeSlider.value = 0
        video.volume = 0
        handleRangeUpdate(volumeSlider)
    }
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
}

let mouseDown = false
function changeProgress(e){
    const percent = (e.offsetX / progress.offsetWidth)
    video.currentTime = percent * video.duration

}

function showStatus(icon){
    
    statusDiv.innerHTML = icon
    statusDiv.style.transition = 'all 0.2s'
    statusDiv.classList.add('visible')
    statusDiv.addEventListener('transitionend', e => {
        statusDiv.style.transition = "opacity 2s ease 1s"
        statusDiv.classList.remove('visible')
    })
    
}

function toogleFullscreen(){
    if(!document.fullscreenElement){
        player.requestFullscreen()
        fullscreen.innerHTML = ExitFullscreenIcon
    }else{
        document.exitFullscreen()
        fullscreen.innerHTML = EnterFullscreenIcon
    }
}


video.addEventListener('click', togglePlay)
video.addEventListener('play', updatePlayBtn)
video.addEventListener('pause', updatePlayBtn)
video.addEventListener('timeupdate', handleProgress)
playToggle.addEventListener('click', togglePlay)
skipButtons.forEach(btn => btn.addEventListener('click', skip))
volumeBtn.addEventListener('click', toggleMute)
ranges.forEach(range => range.addEventListener('input', handleRangeUpdate))
fullscreen.addEventListener('click', toogleFullscreen)
video.addEventListener('dblclick', toogleFullscreen)

window.addEventListener('keydown', e => {
    e.preventDefault()

    if (e.key === 'ArrowRight'){
        video.currentTime += 10
        showStatus(skipForwardIcon)
    }else if (e.key === 'ArrowLeft'){
        video.currentTime -= 10
        showStatus(skipBackwardIcon)
    }else if (e.key === ' '){
        togglePlay()
    }
})

progress.addEventListener('click', changeProgress)
progress.addEventListener('mousemove', (e) => mouseDown && changeProgress(e))
progress.addEventListener('mousedown', e => mouseDown = true)
progress.addEventListener('mouseup', e => mouseDown = false)
progress.addEventListener('mouseleave', e => mouseDown = false)

const timeInterval = 6000
let hideInterval = setInterval(handleHideControls, timeInterval)

    
function handleHideControls (){
    if(playerControls.matches(':hover')){
        clearInterval(hideInterval)
        hideInterval = setInterval(handleHideControls, timeInterval)
        return false
    }else{
        player.style.cursor = 'none'
        playerControls.style.transform = 'translateY(100%) translateY(-5px)'
    }
    player.addEventListener('mousemove', () => {
        clearInterval(hideInterval)
        hideInterval = setInterval(handleHideControls, timeInterval)
        player.style.cursor = null
        playerControls.style.transform = null
    })
}


//change the controls color based on the video content

video.crossOrigin = "Anonymous";

const colorCanvas = document.getElementById('video-color')
const ctx = colorCanvas.getContext('2d')

function init(){
    colorCanvas.width = video.offsetWidth/2
    colorCanvas.height = video.offsetHeight/2
    controlsColor()
}

function controlsColor(){
    if(video.paused || video.ended){
        return false;
    }

    ctx.drawImage(video, 0, 0, video.offsetWidth/2, video.offsetHeight/2)
    const frameData = ctx.getImageData(0, 0, video.offsetWidth/2, video.offsetHeight/2).data
    const frameDataLength = (frameData.length /4) /4

    let pixelCount = 0
    let rgbSums = [0, 0, 0]
    for(let i = 0; i < frameDataLength; i += 4){
        rgbSums[0] += frameData[i*4]
        rgbSums[1] += frameData[i*4+1]
        rgbSums[2] += frameData[i*4+2]
        pixelCount++
    }
    
    // Average the rgb sums to get the average color of the frame in rgb
    rgbSums[0] = Math.floor(rgbSums[0]/pixelCount)
    rgbSums[1] = Math.floor(rgbSums[1]/pixelCount)
    rgbSums[2] = Math.floor(rgbSums[2]/pixelCount)
    
    // Set the background color to the new color
    let newRgb = 'rgb(' + rgbSums.join(',') + ')'
    document.documentElement.style.setProperty('--mainColor', newRgb)
    setTimeout(controlsColor, 100);
}