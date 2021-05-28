
const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');
const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');
const select = document.querySelector('select');

let winningScore = 3;
let player1 = 0;
let player2 = 0;
let isGameOver = false;

btnOne.addEventListener('click', function (e) {
    if (!isGameOver) {
        player1 += 1;
        if (player1 === winningScore) {
            isGameOver = true;
            playerOne.classList.add('winner');
            playerTwo.classList.add('loser');
        }
        playerOne.innerText = player1;
    }
})

btnTwo.addEventListener('click', function (e) {
    if (!isGameOver) {
        player2 += 1;
        if (player2 === winningScore) {
            isGameOver = true;
            playerTwo.classList.add('winner');
            playerOne.classList.add('loser');
        }
        playerTwo.innerText = player2;
    }
})

select.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

btnReset.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    player1 = 0;
    player2 = 0;
    playerOne.innerText = player1;
    playerTwo.innerText = player2;
    playerOne.classList.remove('winner', 'loser');
    playerTwo.classList.remove('winner', 'loser');
}