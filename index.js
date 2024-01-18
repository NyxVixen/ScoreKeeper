const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1display'),
}

const p2 = {
    score: 0,
    button: p2button = document.querySelector('#p2button'),
    display: p2display = document.querySelector('#p2display'),
}

const resetBtn = document.querySelector('#reset')
const playingTo = document.querySelector('#play-to')
const section = document.querySelector('.section')
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) { 
    if (!isGameOver) { 
        player.score += 1; 
        if (player.score === winningScore) {
            player.button.disabled = true
            opponent.button.disabled = true

            setTimeout(() => {
                section.innerHTML = `
        <div id="modal" class="modal is-active">
            <div class="modal-background"></div>
                <div class="modal-content">
            <p class="image is-1by1">
        <img src="https://media1.giphy.com/media/vk0AsKNOcAC55NmOGi/giphy.gif?cid=ecf05e477f7mvlxw6uofyykv5nlp12avlup8yqhvf0bcd7eb&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Man holding up a glass with fireworks going off in the background">
            </p>
        </div>
    <button id="modal-close" class="modal-close is-large" aria-label="close"></button>
</div>
    `
                const modalClose = document.getElementById('modal-close')
                const modal = document.getElementById('modal')
                modalClose.addEventListener("click", () => {
                    location.reload()
                })
            }, 1000)
        }
    }
    player.display.textContent = player.score;
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

playingTo.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    reset()
})

resetBtn.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false
    }
}





