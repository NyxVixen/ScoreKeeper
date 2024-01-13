const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const p1display = document.querySelector('#p1display')
const p2display = document.querySelector('#p2display')
const resetBtn = document.querySelector('#reset')
const playingTo = document.querySelector('#play-to')

let p1score = 0;
let p2score = 0;
let winningScore = 3;
let isGameOver = false;

p1button.addEventListener('click', function () {
    if (!isGameOver) {
        p1score += 1;
        if (p1score === winningScore) {
            isGameOver = true;
            p1display.classList.add('winner')
            p2display.classList.add('loser')
        }
    }
    p1display.textContent = p1score;
})

p2button.addEventListener('click', function () {
    if (!isGameOver) {
        p2score += 1;
        if (p2score === winningScore) {
            isGameOver = true;
            p2display.classList.add('winner')
            p1display.classList.add('loser')
        }
    }
    p2display.textContent = p2score;
})

playingTo.addEventListener('change', function () {
    // console.log(playingTo.value)
    winningScore = parseInt(this.value)
    reset()
})

resetBtn.addEventListener('click', reset)

function reset() {

    isGameOver = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('winner', 'loser')
    p2display.classList.remove('winner', 'loser')
}





