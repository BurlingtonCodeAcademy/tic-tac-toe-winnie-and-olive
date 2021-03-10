let start = document.getElementById("start"); //to start game and timer?
let compOMove = document.getElementById("compOMove");
let playerXMove = document.getElementById("playerXMove");
let playerVSPlayer = document.getElementById("p-v-p");
let playerVSComp = document.getElementById("p-v-c");
let submit = document.getElementById("submit");
//these are our basic element functions. Moves, players, submit and start buttons


//these are our cells
let cell0 = document.getElementById("cell-0");
let cell1 = document.getElementById("cell-1");
let cell2 = document.getElementById("cell-2");
let cell3 = document.getElementById("cell-3");
let cell4 = document.getElementById("cell-4");
let cell5 = document.getElementById("cell-5");
let cell6 = document.getElementById("cell-6");
let cell7 = document.getElementById("cell-7");
let cell8 = document.getElementById("cell-8");
//status displaying who's turn/winner
let status = document.getElementById("status");
let currentPlayer = "X"; 
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
//X and O player... and starting status as human 


console.log(cellArr[1]);
//buttons clicked to select which mode is going to start (PVP or PVC)
playerVSPlayer.addEventListener("click", selectMode);
playerVSComp.addEventListener("click", selectMode);
//disables once button is clicked cannot be clicked again
start.disabled = true;

let userForm = document.getElementById("user-form");
userForm.style.display = "none";

//start of selecting mode before game
function selectMode(evt) {
 
  start.disabled = true;
  if (evt.target.id === "p-v-p") {
    console.log("pvp has been clicked");
 
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
   
    playerVSPlayer.style.display = "none";
    pvcStart();
  }
}
//game start function. waits for start button to be clicked then goes to firstTurn function
function gameStart() {
 
  console.log("start working");
  status.innerHTML = `It's ${currentPlayer} 's turn`; //this displays current player turn
  start.addEventListener("click", firstTurn);
}
//firstTurn function after game is started and player selected
function firstTurn() {
  //this changes clicked button colors
  start.style.backgroundColor = "gray";
  start.style.borderColor = "lightgray";
  start.disabled = false;
  
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

  //event listener for each cell to tell when button is clicked so computer knows to change color and not pick these selected cells
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
//second turn/ makes sure opposite character goes (when not X, O goes)
function newPlayerTurn(evt) {
  
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
//if computer turn, this insures computer doesn't go to cell that has been clicked already and goes back to newPlayerTurn afterwards
function compTurn() {
  if (currentPlayer === "O") {
    let compGen = cellArr[Math.floor(Math.random() * cellArr.length)];
    let tempElement = document.getElementById(compGen);
    tempElement.innerText = currentPlayer;
    console.log(tempElement.innerText);
    newPlayerTurn();
    cellArr = cellArr.filter((item) => item !== compGen);
    console.log(cellArr);
    
  }
}

//moves = array of played cells
//function for the computer being a player
function pvcStart() {
  
  firstTurn();
  
}
// computer does a click
// computer picks a square by doing (Math.floor(Math.random) * 8).click * cell
//random cell generator
//displays the cell they selected

// name grabber
let title = document.getElementById("title");
let inputForm = document.getElementById("user-form");


//this is what displays name in status bar also cleans up name to be same format each time
inputForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let userInput1 = document.getElementById("name1").value;
  let userInput2 = document.getElementById("name2").value;
  //name 1 & 2 input --- deleted .trim() after lowercase
  lowerString1 = userInput1.toString().toLowerCase();
  lowerString2 = userInput2.toString().toLowerCase();
  title.textContent = `Hello, ${lowerString1} and ${lowerString2}!`;
});


//this alerts if cell that is clicked is already occupied, or allows click and enacts newPlayerTurn
function selectedCell(clickedCell, cellIndex) {
  
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
//all possible winning condition combos
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
//checking for win, seeing that both 3 cells are clicked in a row and that they are possible winning combo. then changes winning cells to diff color
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
     
  }
}
