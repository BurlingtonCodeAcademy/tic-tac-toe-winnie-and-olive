let start = document.getElementById("start"); //to start game and timer?
let stop = document.getElementById("stop"); //this is to stop clock...
// let status = document.getElementById("status"); //this shows who turn it is
let compOMove = document.getElementById("compOMove");
let playerXMove = document.getElementById("playerXMove");

// let interval = 0;
let compWins = 0;
let playerWins = 0;

let cell0 = document.getElementById("cell-0");
let cell1 = document.getElementById("cell-1");
let cell2 = document.getElementById("cell-2");
let cell3 = document.getElementById("cell-3");
let cell4 = document.getElementById("cell-4");
let cell5 = document.getElementById("cell-5");
let cell6 = document.getElementById("cell-6");
let cell7 = document.getElementById("cell-7");
let cell8 = document.getElementById("cell-8");

// changing button color on click (graying it out)
//BUTTON DISAPPEARS NEED TO FIX !!!
// let gameStart = start.addEventListener('click', (evt) => {
//     status.textContent = `it's ${currentPlayer}'s turn!`;
//     // start.disabled = true; //disable button to start
//     start.style.backgroundColor = "gray";
// start.style.borderColor = "lightgray";
// let time = document.getElementById('clock');
// // calling the clock and starting the timer
// time.textContent = parseInt(time.textContent);
// // makes the 0 which is a string, into a number, so it can add
// let intervalFunction = setInterval(function () {
//     // this is where a second adds on each time?
//     let counter = parseInt(time.textContent) + 1;
//     time.textContent = counter;
// }, 1000);
//     // adding 1000 milliseconds aka one second
//     stop.addEventListener("click", (evt) => {
//         clearInterval(intervalFunction)  // stop button stops it from counting
//     });
// });

let status = document.getElementById("status");
let gameActive = true; //whether game is restarted
let currentPlayer = "X"; //this will be changed, but starts with player/user X
let playedCells = ["", "", "", "", "", "", "", "", ""];
let lowerString1 = "X";
let lowerString2 = "O";

gameStart();

function gameStart() {
  status.innerHTML = `It's ${currentPlayer} 's turn`; //this displays current player turn
  start.addEventListener("click", firstTurn);
}

function firstTurn() {
  start.style.backgroundColor = "gray";
  start.style.borderColor = "lightgray";
  start.disabled = true;
  status.textContent = `It's ${currentPlayer} 's turn`;
  let time = document.getElementById("clock");
  // calling the clock and starting the timer
  time.textContent = parseInt(time.textContent);
  // makes the 0 which is a string, into a number, so it can add
  let intervalFunction = setInterval(function () {
    // this is where a second adds on each time?
    let counter = parseInt(time.textContent) + 1;
    time.textContent = counter;
  }, 1000);
}

function newPlayerTurn(evt) {
  currentPlayer = currentPlayer === "O" ? "X" : "O";
  if (currentPlayer === "X") {
    status.textContent = `It's ${lowerString1}'s turn!`;
    console.log(lowerString1);
  } else if (currentPlayer === "O") {
    status.textContent = `It's ${lowerString2}'s turn!`;
    console.log(lowerString2);
  }
  winCheck();
}

// name grabber
let title = document.getElementById("title");
let inputForm = document.getElementById("user-form");

inputForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let userInput1 = document.getElementById("name1").value;
  let userInput2 = document.getElementById("name2").value;
  //name 1 & 2 input --- deleted .trim() after lowercase
  lowerString1 = userInput1.toString().toLowerCase();
  lowerString2 = userInput2.toString().toLowerCase();
  title.textContent = `Hello, ${lowerString1} and ${lowerString2}!`;
});

//   for (let player of currentPlayer) {
//   player.removeEventListener ("click", firstTurn)
//   }

function selectedCell(clickedCell, cellIndex) {
  //gameState[cellIndex] = currentPlayer;
  if (clickedCell.innerHTML != "") {
    window.alert("please select an empty cell");
  } else {
    clickedCell.innerHTML = currentPlayer;
    newPlayerTurn();
  }
}
// if selectedCell != '0', then alert(please select an empty cell) & returns to firstTurn (aka their turn doesn't end)

///WINNING CONDITIONS COMMENTED OUT FOR NOWWW

const winningConditions = [
  [cell0, cell1, cell2],
  [cell0, cell3, cell6],
  [cell1, cell4, cell7],
  [cell2, cell5, cell8],
  [cell2, cell4, cell6],
  [cell6, cell7, cell8],
  [cell3, cell4, cell5],
  [cell0, cell4, cell8],
];

function winCheck(){
  console.log("winnningcheck")
for (let win of winningConditions) {
  if (
    win[0].textContent !== "" &&
    win[1].textContent !== "" &&
    win[2].textContent !== "" &&
  win[0].textContent === win[1].textContent && win[0].textContent === win[2].textContent
   ) {
    window.alert("you win!");
  }
  
}}


// if (playedCells[selectedCell] !== '' )
// let win1 = ['cell-0', 'cell-1', 'cell-2']
// let cellArray = ["X"]

// if (evt.target.id === "cell-0") {
// cellArray.push("X")
// }

//  winningMessage () => {
// if(cell1.textContent === cell2.textContent && cell1.textContent === cell0.textContent) {
//   window.alert ("you win!")
// }
// if (cell0.textContent === cell3.textContent && cell0.textContent === cell6.textContent) {
//   window.alert ("you win!")
// }
// if (cell1.textContent === cell4.textContent && cell1.textContent === cell7.textContent) {
//   window.alert ("you win!")
// }
// if (cell2.textContent === cell5.textContent && cell2.textContent === cell8.textContent) {
//   window.alert ("you win!")
// }
// if (cell2.textContent === cell4.textContent && cell2.textContent === cell6.textContent) {
//   window.alert ("you win!")
// }
// if (cell6.textContent === cell7.textContent && cell6.textContent === cell8.textContent) {
//   window.alert ("you win!")
// }
// if (cell3.textContent === cell4.textContent && cell3.textContent === cell5.textContent) {
//   window.alert ("you win!")
// }
// if (cell0.textContent === cell4.textContent && cell0.textContent === cell8.textContent) {
//   window.alert("you win!")
// } else if {
//   window.alert ("you lose!")
// }

//else lose message
//}

//NAME FUNCTION
//and then disable the buttons once they are entered...

// when user clicks a box, an X appears
// let cell0 = document.getElementById("cell-0");
cell0.addEventListener("click", (evt) => {
  selectedCell(cell0, 0);
  //playerTurn = "O";
});
// let cell1 = document.getElementById("cell-1");
cell1.addEventListener("click", (evt) => {
  selectedCell(cell1, 1);
});
// let cell2 = document.getElementById("cell-2");
cell2.addEventListener("click", (evt) => {
  selectedCell(cell2, 2);
});
// let cell3 = document.getElementById("cell-3");
cell3.addEventListener("click", (evt) => {
  selectedCell(cell3, 3);
});
// let cell4 = document.getElementById("cell-4");
cell4.addEventListener("click", (evt) => {
  selectedCell(cell4, 4);
});
// let cell5 = document.getElementById("cell-5");
cell5.addEventListener("click", (evt) => {
  selectedCell(cell5, 5);
});
// let cell6 = document.getElementById("cell-6");
cell6.addEventListener("click", (evt) => {
  selectedCell(cell6, 6);
});
// let cell7 = document.getElementById("cell-7");
cell7.addEventListener("click", (evt) => {
  selectedCell(cell7, 7);
});
// let cell8 = document.getElementById("cell-8");
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
