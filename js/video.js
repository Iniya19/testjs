// const player = document.querySelector(".player");
// const video = player.querySelector(".viewer");
// const toggle = player.querySelector(".toggle");
// const skipBtns = player.querySelectorAll('[data-skip]');
// const range = player.querySelectorAll('.player__slider');
// const progressBar = player.querySelector('.progress__filled');
// const progress = player.querySelector('.progress');

// video.addEventListener('click', togglePlay)
// toggle.addEventListener('click', togglePlay)

// function togglePlay() {
//     const mettod = video.paused ? "play" : 'pause' 
//     video[mettod]()
// }

// video.addEventListener('play', updateBtn)
// video.addEventListener('pause', updateBtn)

// function updateBtn() {
//     const icon = this.paused ? '▶️' : '❚ ❚'
//     toggle.textContent = icon;
// }

// skipBtns.forEach(skipBtn => skipBtn.addEventListener('click', skip))

// function skip() {
//     video.currentTime += parseFloat(this.dataset.skip);
// }

// range.forEach(rangeInput => rangeInput.addEventListener('input', handleChgUpdt))

// function handleChgUpdt() {
//     video[this.name] = this.value;
// }

// video.addEventListener('timeupdate', timeProgress)

// function timeProgress() {
//     const prosent = (video.currentTime / video.duration) * 100;
//     progressBar.style.flexBasis = `${prosent}%`
// }

// function scrup(evt) {
//     const scrupTime = (evt.offsetX / progress.offsetWidth) * video.duration;
//     video.currentTime = scrupTime;
// }

// let mouseDown = false;

// progress.addEventListener('click', scrup)
// progress.addEventListener('mousemove', event => mouseDown && scrup(event))
// progress.addEventListener('mousedown', () => (mouseDown = true))
// progress.addEventListener('mouseup', () => (mouseDown = false))
