let wordbank = [];
let randomWord = wordbank[Math.floor(Math.random() * wordbank.length)];
let keys = 0; 
const gameState = {
    grid: Array(6)
        .fill()
        .map(()=> Array(5).fill('')),
    cRow: 0,
    cCol: 0,
};

function start () {
    const game = document.getElementById("gameboard")
    state.grid = Array(6)
        .fill()
        .map(() => Array(5).fill('A'))
    updateBoard
}

function updateBoard (container) {
    for (let i = 0; i < state.grid.length; i++) {
        for (let j = 0; j < state.grid.length; j++) {
            const box = document.getElementById(`box${i}${j}`);
            box.textContent = state.grid[i][j];
        }
        
    }
}

function registerkeys () {
    document.body.onkeydown = (d) => {
        const key = d.key
        if (key === "Enter") {

        }
        else if (key === "Backspace") {

        }
        else if (insertLetter(key)) {

        }
    };
}

function insertLetter (container, row, col, letter = "") {
    const box = document.createElement("div");
    box.className = "box";
    box.id = `box${row}${col}`;
    box.textContent = letter;
    container.appendChild(box);
    return box;
}

function replay () {

}