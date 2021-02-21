const board = document.querySelector('main');
const count = 3;
let cell_id = 1;
let row_id = 1;

for(let i = 0; i < count; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    row.id = 'row' + row_id;
    row_id++;
    for(let j = 0; j < count; j++) {
        let cell = document.createElement('div');
        cell.id = cell_id;
        cell_id++;
        cell.classList.add('cell');
        row.appendChild(cell);
    }
    board.appendChild(row);
}

document.querySelectorAll('.cell').forEach((cell) => {
    if (cell.id == 1 || cell.id == 4 || cell.id == 7) {
        cell.classList.add('left');
    } else if (Number(cell.id) % 3 == 0) {
        cell.classList.add('right');
    }
})