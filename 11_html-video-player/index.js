const playIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M3 22v-20l18 10-18 10z"/></svg>'
const pauseIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/></svg>'
const skipForwardIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="27.5" viewBox="0 0 24 27.5" fill="#fff"><path d="M23.5,11.9l-2,0.5c1.1,3.5,0.3,7.4-2.4,10.1c-3.9,3.9-10.2,3.9-14.1,0S1,12.3,4.9,8.4C6.9,6.5,9.4,5.5,12,5.5V9l5.9-4.6L12,0v3.5C8.9,3.5,5.9,4.7,3.5,7c-4.7,4.7-4.7,12.3,0,17c4.7,4.7,12.3,4.7,17,0C23.7,20.7,24.7,16.1,23.5,11.9z"/><path d="M9.6,20v-9H8c0,1.2-0.6,1.5-2.3,1.5V14h1.9V20H9.6z"/><path d="M14.4,10.9c-2.5,0-3.8,1.8-3.8,4.6c0,2.8,1.3,4.6,3.8,4.6c2.5,0,3.8-1.8,3.8-4.6C18.3,12.7,16.9,10.9,14.4,10.9zM14.4,18.5c-1.2,0-1.8-1.1-1.8-3s0.5-3,1.8-3c1.2,0,1.8,1.1,1.8,3S15.7,18.5,14.4,18.5z"/></svg>'
const skipBackwardIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="27.5" viewBox="0 0 24 27.5" fill="#fff"><path d="M0.5,11.9l2,0.5c-1.1,3.5-0.3,7.4,2.4,10.1c3.9,3.9,10.2,3.9,14.1,0s3.9-10.2,0-14.1c-1.9-1.9-4.5-2.9-7.1-2.9V9L6.1,4.4L12,0v3.5c3.1,0,6.1,1.2,8.5,3.5c4.7,4.7,4.7,12.3,0,17c-4.7,4.7-12.3,4.7-17,0C0.3,20.7-0.7,16.1,0.5,11.9z"/><path d="M9.6,20v-9H8c0,1.2-0.6,1.5-2.3,1.5V14h1.9V20H9.6z"/><path d="M14.4,10.9c-2.5,0-3.8,1.8-3.8,4.6c0,2.8,1.3,4.6,3.8,4.6c2.5,0,3.8-1.8,3.8-4.6C18.3,12.7,16.9,10.9,14.4,10.9zM14.4,18.5c-1.2,0-1.8-1.1-1.8-3s0.5-3,1.8-3c1.2,0,1.8,1.1,1.8,3S15.7,18.5,14.4,18.5z"/></svg>'

const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const playToggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const volumeBtn = player.querySelector('.player__button.volume')
const ranges = player.querySelectorAll('.player__slider')
const statusDiv = player.querySelector('.status')

function togglePlay() {
    if(video.paused){
        video.play()
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

function handleRangeUpdate(){
    video[this.name] = this.value
}

let lastVolumeValue
function toggleMute(){
    const volumeSlider = document.querySelector('.player__slider.volume')
    
    if(volumeSlider.value === '0'){
        console.log(lastVolumeValue)
        volumeSlider.value = lastVolumeValue
        video.volume = lastVolumeValue
    }else{
        lastVolumeValue = volumeSlider.value
        volumeSlider.value = 0
        video.volume = 0
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


video.addEventListener('click', togglePlay)
video.addEventListener('play', updatePlayBtn)
video.addEventListener('pause', updatePlayBtn)
video.addEventListener('timeupdate', handleProgress)
playToggle.addEventListener('click', togglePlay)
skipButtons.forEach(btn => btn.addEventListener('click', skip))
volumeBtn.addEventListener('click', toggleMute)
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

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