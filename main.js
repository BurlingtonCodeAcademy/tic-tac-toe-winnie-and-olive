let start = document.getElementById("start"); //to start game and timer?
// let stop = document.getElementById("stop"); //this is to stop clock...
// let status = document.getElementById("status"); //this shows who turn it is
let compOMove = document.getElementById("compOMove");
let playerXMove = document.getElementById("playerXMove");
let playerVSPlayer = document.getElementById("p-v-p");
let playerVSComp = document.getElementById("p-v-c");
// let selectMode = document.getElementById("selectMode");
let submit = document.getElementById("submit");
// let board = document.getElementsByClassName("board")
// let cell = document.getElementsByClassName("cell")

// let interval = 0;
// let compWins = 0;
// let playerWins = 0;

let cell0 = document.getElementById("cell-0");
let cell1 = document.getElementById("cell-1");
let cell2 = document.getElementById("cell-2");
let cell3 = document.getElementById("cell-3");
let cell4 = document.getElementById("cell-4");
let cell5 = document.getElementById("cell-5");
let cell6 = document.getElementById("cell-6");
let cell7 = document.getElementById("cell-7");
let cell8 = document.getElementById("cell-8");

let status = document.getElementById("status");
// let gameActive = true; //whether game is restarted
let currentPlayer = "X"; //this will be changed, but starts with player/user X
let playedCells = ["", "", "", "", "", "", "", "", ""];
let cellArr = [
  "cell-0",
  "cell-1",
  "cell-2",
  "cell-3",
  "cell-4",
  "cell-5",
  "cell-6",
  "cell-7",
  "cell-8",
];
let lowerString1 = "X";
let lowerString2 = "O";
let oStatus = "human";

// gameStart();

console.log(cellArr[1]);

playerVSPlayer.addEventListener("click", selectMode);
playerVSComp.addEventListener("click", selectMode);

start.disabled = true;
// cell.disabled = true;
let userForm = document.getElementById("user-form");
userForm.style.display = "none";

// userForm.disabled = true; //style attribute to make it not display
function selectMode(evt) {
  // evt.preventDefault();
  start.disabled = true;
  if (evt.target.id === "p-v-p") {
    console.log("pvp has been clicked");
    // start.disabled = true;
    playerVSComp.style.display = "none";
    userForm.style.display = "block";
    submit.addEventListener("click", firstTurn);
    //display properties to hide the boxes/ buttons
    // put in code for asking for name and then prompting the click button
    // calling functions we have defined for regular gameplay
    // we could use display properties to hide them from the page (the name inputs) look into disabled and display properties
  } else if (evt.target.id === "p-v-c") {
    oStatus = "computer"; //tells us that when computer button is clicked, the computer is player O
    console.log("pvc has been clicked");
    // start.disabled = true;
    playerVSPlayer.style.display = "none";
    pvcStart();
  }
}

function gameStart() {
  // cell.disabled = false;
  console.log("start working");
  status.innerHTML = `It's ${currentPlayer} 's turn`; //this displays current player turn
  start.addEventListener("click", firstTurn);
}

function firstTurn() {
  // gameStart()
  // cellClick();
  start.style.backgroundColor = "gray";
  start.style.borderColor = "lightgray";
  start.disabled = false;
  // cell.disabled = false;
  console.log("cell enabled");
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
  cell0.addEventListener("click", (evt) => {
    selectedCell(cell0, 0);
  });

  cell1.addEventListener("click", (evt) => {
    selectedCell(cell1, 1);
  });

  cell2.addEventListener("click", (evt) => {
    selectedCell(cell2, 2);
  });

  cell3.addEventListener("click", (evt) => {
    selectedCell(cell3, 3);
  });

  cell4.addEventListener("click", (evt) => {
    selectedCell(cell4, 4);
  });

  cell5.addEventListener("click", (evt) => {
    selectedCell(cell5, 5);
  });

  cell6.addEventListener("click", (evt) => {
    selectedCell(cell6, 6);
  });

  cell7.addEventListener("click", (evt) => {
    selectedCell(cell7, 7);
  });

  cell8.addEventListener("click", (evt) => {
    selectedCell(cell8, 8);
  });
}

function newPlayerTurn(evt) {
  // cellClick();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  if (currentPlayer === "X") {
    status.textContent = `It's ${lowerString1}'s turn!`;
    console.log(lowerString1);
  } else if (currentPlayer === "O" && oStatus === "computer") {
    status.textContent = `It's ${lowerString2}'s turn!`;
    console.log(lowerString2);
    compTurn();
  } else if (currentPlayer === "O" && oStatus === "human") {
    status.textContent = `It's ${lowerString2}'s turn!`;
  }
  winCheck();
}
function compTurn() {
  if (currentPlayer === "O") {
    let compGen = cellArr[Math.floor(Math.random() * cellArr.length)];
    let tempElement = document.getElementById(compGen);
    tempElement.innerText = currentPlayer;
    console.log(tempElement.innerText);
    newPlayerTurn();
    cellArr = cellArr.filter((item) => item !== compGen);
    console.log(cellArr);
    //gameStart();
  }
}

//moves = array of played cells
//function for the computer being a player
function pvcStart() {
  // gameStart();
  firstTurn();
  // compTurn();
  // console.log(compTurn)
}
// computer does a click
// computer picks a square by doing (Math.floor(Math.random) * 8).click * cell
//random cell generator
//displays the cell they selected

// name grabber
let title = document.getElementById("title");
let inputForm = document.getElementById("user-form");

// function nameGrabber() {

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
    console.log(clickedCell.id);
    cellArr = cellArr.filter((item) => item !== clickedCell.id);
    console.log(cellArr);
    newPlayerTurn();
  }
}

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

function winCheck() {
  console.log("winningcheck");
  for (let win of winningConditions) {
    if (
      win[0].textContent !== "" &&
      win[1].textContent !== "" &&
      win[2].textContent !== "" &&
      win[0].textContent === win[1].textContent &&
      win[0].textContent === win[2].textContent
    ) {
      win[0].style.backgroundColor = "lightblue";
      win[1].style.backgroundColor = "lightblue";
      win[2].style.backgroundColor = "lightblue";
      status.textContent = `you win!`; //winning message?
      //timing function to delay the alert (set interval and set timeout)
      // clear the board function? to make the board empty and unclickab
      // function winAnimation(){
      //   document.getElementById("strikethrough")
    }
  }
}
