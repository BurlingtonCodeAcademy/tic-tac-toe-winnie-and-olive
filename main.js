let start = document.getElementById("start"); //to start game and timer?
let stop = document.getElementById("stop"); //this is to stop clock...
// let status = document.getElementById("status"); //this shows who turn it is
let compOMove = document.getElementById("compOMove");
let playerXMove = document.getElementById("playerXMove");

// let interval = 0;
let compWins = 0;
let playerWins = 0;

// changing button color on click (graying it out)
//BUTTON DISAPPEARS NEED TO FIX !!!
// let gameStart = start.addEventListener('click', (evt) => {
//     status.textContent = `it's ${currentPlayer}'s turn!`;
//     // start.disabled = true; //disable button to start
//     start.style.backgroundColor = "gray";
// start.style.borderColor = "lightgray";
//     let time = document.getElementById('clock');
//     // calling the clock and starting the timer
//     time.textContent = parseInt(time.textContent);
//     // makes the 0 which is a string, into a number, so it can add
//     let intervalFunction = setInterval(function () {
//         // this is where a second adds on each time?
//         let counter = parseInt(time.textContent) + 1;
//         time.textContent = counter;
//     }, 1000);
//     // adding 1000 milliseconds aka one second
//     stop.addEventListener("click", (evt) => {
//         clearInterval(intervalFunction)  // stop button stops it from counting
//     });
// });

let status = document.getElementById("status");
let gameActive = true; //whether game is restarted
let currentPlayer = "X"; //this will be changed, but starts with player/user X
let playedCells = ["", "", "", "", "", "", "", "", ""];

gameStart();

function gameStart() {
  status.innerHTML = `It's ${currentPlayer} 's turn`; //this displays current player turn
  start.addEventListener("click", playerTurn);
}

function playerTurn() {
  start.style.backgroundColor = "gray";
  start.style.borderColor = "lightgray";
  start.disabled = true;
  status.textContent = `It's ${currentPlayer} 's turn`;
}

function newPlayerTurn(evt) {
  currentPlayer = currentPlayer === "O" ? "X" : "O";
  status.textContent = `It's ${currentPlayer} 's turn`;
  
}

//   for (let player of currentPlayer) {
//   player.removeEventListener ("click", playerTurn)
//   }


function selectedCell(clickedCell, cellIndex) {
  //gameState[cellIndex] = currentPlayer;
  if (clickedCell.innerHTML != ""){
      window.alert('please select an empty cell');
  } else { 
        clickedCell.innerHTML = currentPlayer; 
        newPlayerTurn();
    }
};
// if selectedCell != '0', then alert(please select an empty cell) & returns to playerTurn (aka their turn doesn't end)

// const winningConditions = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [6, 7, 8],
//   [3, 4, 5],
//   [0, 4, 8],
// ];



// when user clicks a box, an X appears
let cell0 = document.getElementById("cell-0");
cell0.addEventListener("click", (evt) => {
  selectedCell(cell0, 0);
  //playerTurn = "O";
});
let cell1 = document.getElementById("cell-1");
cell1.addEventListener("click", (evt) => {
  selectedCell(cell1, 1);
});
let cell2 = document.getElementById("cell-2");
cell2.addEventListener("click", (evt) => {
  selectedCell(cell2, 2);
});
let cell3 = document.getElementById("cell-3");
cell3.addEventListener("click", (evt) => {
  selectedCell(cell3, 3);
});
let cell4 = document.getElementById("cell-4");
cell4.addEventListener("click", (evt) => {
  selectedCell(cell4, 4);
});
let cell5 = document.getElementById("cell-5");
cell5.addEventListener("click", (evt) => {
  selectedCell(cell5, 5);
});
let cell6 = document.getElementById("cell-6");
cell6.addEventListener("click", (evt) => {
  selectedCell(cell6, 6);
});
let cell7 = document.getElementById("cell-7");
cell7.addEventListener("click", (evt) => {
  selectedCell(cell7, 7);
});
let cell8 = document.getElementById("cell-8");
cell8.addEventListener("click", (evt) => {
  selectedCell(cell8, 8);
});

// cell.addEventListener ('click', (evt) => {
//     cell.evt.target.style.backgroundColor = "red";
// });

// let gameTurn = cell.addEventListener('click', (evt) => {
//     cell.textContent = "x";
// });

// prompting proper player's turn
// let player = document.getElementById()

// // timer functionality
// start.addEventListener("click", (evt) => {
//     //have to call your function & click to make it happen
//     let time = document.getElementById('clock');
//     // calling the clock ...
//     time.textContent = parseInt(time.textContent);
//     // makes the 0 which is a string, into a number, so it can add
//     let intervalFunction = setInterval(function () {
//         // this is where a second adds on each time?
//         let counter = parseInt(time.textContent) + 1;
//         time.textContent = counter;
//     }, 1000);
//     // adding 1000 milliseconds aka one second
//     stop.addEventListener("click", (evt) => {
//         clearInterval(intervalFunction)  // stop button stops it from counting
//     });
// });

// function startGame () {
//     start.disabled = true; //disable button to start
//  status.textContent = `it's ${currentPlayer}'s turn!`
// }
