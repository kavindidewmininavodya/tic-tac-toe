let playerO = "O";
let playerX = "X";
let currPlayer = playerO;

let gameBoard = Array(25).fill("");
let gameCells;

let scoreO = 0;
let scoreX = 0;

let winningPatterns = []; 
let countedPatterns = new Set();
let gameOver = false;

window.onload = function () {
    gameCells = document.getElementsByClassName("game-cell");

    generatePatterns();

    for (let cell of gameCells) {
        cell.addEventListener("click", placeCell);
    }

    document.getElementById("game-restart-button").addEventListener("click", restartGame);
};

function generatePatterns() {
    winningPatterns = [];

    for (let r = 0; r < 5; r++) {
        for (let c = 0; c <= 2; c++) {
            winningPatterns.push([
                r * 5 + c,
                r * 5 + (c + 1),
                r * 5 + (c + 2)
            ]);
        }
    }

    for (let c = 0; c < 5; c++) {
        for (let r = 0; r <= 2; r++) {
            winningPatterns.push([
                r * 5 + c,
                (r + 1) * 5 + c,
                (r + 2) * 5 + c
            ]);
        }
    }

    for (let r = 0; r <= 2; r++) {
        for (let c = 0; c <= 2; c++) {
            winningPatterns.push([
                r * 5 + c,
                (r + 1) * 5 + (c + 1),
                (r + 2) * 5 + (c + 2)
            ]);
        }
    }

    for (let r = 2; r < 5; r++) {
        for (let c = 0; c <= 2; c++) {
            winningPatterns.push([
                r * 5 + c,
                (r - 1) * 5 + (c + 1),
                (r - 2) * 5 + (c + 2)
            ]);
        }
    }
}

function placeCell() {
    if (gameOver) return;

    const index = parseInt(this.getAttribute("data-cell-index"));
    if (gameBoard[index] !== "") return;

    gameBoard[index] = currPlayer;
    this.innerText = currPlayer;

    for (let cell of gameCells) 
        cell.classList.remove("winning-game-cell");

    checkThreeWins(currPlayer);

    currPlayer = (currPlayer === playerO) ? playerX : playerO;

    if (!gameBoard.includes("")) {
        finalResult();
    }
}

function checkThreeWins(player) {
    for (let pattern of winningPatterns) {

        if (pattern.every(i => gameBoard[i] === player)) {

            let key = pattern.toString();

            if (!countedPatterns.has(key)) {
                countedPatterns.add(key);

                pattern.forEach(i => gameCells[i].classList.add("winning-game-cell"));

                if (player === "O") {
                    scoreO++;
                    document.getElementById("scoreO").innerText = scoreO;
                } else {
                    scoreX++;
                    document.getElementById("scoreX").innerText = scoreX;
                }
            }
        }
    }
}

function finalResult() {
    gameOver = true;

    let message = "";

    if (scoreO > scoreX) message = "🏆 Player O Wins!";
    else if (scoreX > scoreO) message = "🏆 Player X Wins!";
    else message = "🤝 It's a Draw!";

    Swal.fire({
        title: message,
        html: `
            <div style="
                font-size: 16px;
                margin-top: 5px;
                line-height: 1.6;
            ">
                <b style="color:#0d6efd;">O:</b> ${scoreO} points<br>
                <b style="color:#dc3545;">X:</b> ${scoreX} points
            </div>
        `,
       
        toast: true,
        position: "center",     
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,

        customClass: {
            popup: "modern-toast"
        }
    });
}


function restartGame() {
    gameOver = false;
    gameBoard = Array(25).fill("");

    scoreO = 0;
    scoreX = 0;

    countedPatterns.clear(); 

    document.getElementById("scoreO").innerText = 0;
    document.getElementById("scoreX").innerText = 0;

    for (let cell of gameCells) {
        cell.innerText = "";
        cell.classList.remove("winning-game-cell");
    }

    currPlayer = playerO;
}
