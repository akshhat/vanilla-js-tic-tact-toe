const board = document.querySelector('main');
const currentPlayDisplay = document.querySelector('#current-play');
const reset = document.querySelector('button');
const count = 3;
let cell_id = 1;
let row_id = 1;
let currentPlayer = 1;
let currentMove = 0;

// Winning logic
let ticTacToe = new Array(9);
const calcWinner = () => {
}

// Moves counter Function
const playerMoves = () => {
    currentMove++;
    if (currentMove >= 4) {
        calcWinner();
    }
    if (currentMove >= 9) {
        currentPlayDisplay.innerText = 'Game Over';
    }
}

// Current Player Display Function
const playerChange = () => {
    if (currentPlayer % 2 != 0) {
        currentPlayer = 1;
    } else {
        currentPlayer = 2;
    }
    currentPlayDisplay.innerText = `Player ${currentPlayer}'s Turn`;
    currentPlayer++;
}

// Creating the game board
for (let i = 0; i < count; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    row.id = 'row' + row_id;
    row_id++;
    for (let j = 0; j < count; j++) {
        let cell = document.createElement('div');
        cell.id = cell_id;
        cell_id++;
        cell.classList.add('cell');
        row.appendChild(cell);
    }
    board.appendChild(row);
}

// Adding borders to the game board
document.querySelectorAll('.cell').forEach((cell) => {
    if (cell.id == 1 || cell.id == 4 || cell.id == 7) {
        cell.classList.add('left');
    } else if (Number(cell.id) % 3 == 0) {
        cell.classList.add('right');
    }
})

// Enabling the restart game button
board.addEventListener('click', () => {
    reset.disabled = false;
})

// Game reset
reset.addEventListener('click', () => {
    location.reload();
})

// Game starts
playerChange();

// Game play logic
document.querySelectorAll('.cell').forEach((cell) => {
    cell.addEventListener('click', () => {
        if (!cell.classList.contains('clicked')) {
            playerChange();
            playerMoves();
            if (currentPlayer == 2) {
                ticTacToe.splice(`${cell.id - 1}`, 1, 'O');
                cell.innerText = 'O';
            } else {
                ticTacToe.splice(`${cell.id - 1}`, 1, 'X');
                cell.innerText = 'X';
            }
        }
        cell.classList.add('clicked');
        console.log(ticTacToe);
    })
})