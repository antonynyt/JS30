const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const playToggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

function togglePlay() {
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

function updatePlayBtn() {
    const playIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M3 22v-20l18 10-18 10z"/></svg>'
    const pauseIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/></svg>'
    const icon = this.paused ? playIcon : pauseIcon
    playToggle.innerHTML = icon
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate(){
    video[this.name] = this.value
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


video.addEventListener('click', togglePlay)
video.addEventListener('play', updatePlayBtn)
video.addEventListener('pause', updatePlayBtn)
video.addEventListener('timeupdate', handleProgress)
playToggle.addEventListener('click', togglePlay)
skipButtons.forEach(btn => btn.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

window.addEventListener('keydown', e => {
    e.preventDefault()

    if (e.key === 'ArrowRight'){
        video.currentTime += 10
    }else if (e.key === 'ArrowLeft'){
        video.currentTime -= 10
    }else if (e.key === ' '){
        togglePlay()
    }
})

progress.addEventListener('click', changeProgress)
progress.addEventListener('mousemove', (e) => mouseDown && changeProgress(e))
progress.addEventListener('mousedown', e => mouseDown = true)
progress.addEventListener('mouseup', e => mouseDown = false)
progress.addEventListener('mouseleave', e => mouseDown = false)