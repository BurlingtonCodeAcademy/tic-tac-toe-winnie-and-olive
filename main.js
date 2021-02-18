let start = document.getElementById('start'); //to start game and timer?
let stop = document.getElementById('stop'); //this is to stop clock...
// let status = document.getElementById("status"); //this shows who turn it is
let compOMove = document.getElementById("compOMove");
let playerXMove = document.getElementById("playerXMove");


// let interval = 0;
let compWins = 0;
let playerWins = 0;



// changing button color on click (graying it out)
//BUTTON DISAPPEARS NEED TO FIX !!!
let gameStart = start.addEventListener('click', (evt) => {
    status.textContent = `it's ${currentPlayer}'s turn!`;
    // start.disabled = true; //disable button to start
    start.style.backgroundColor = "gray";
    start.style.borderColor = "lightgray";
    let time = document.getElementById('clock');
    // calling the clock and starting the timer  
    time.textContent = parseInt(time.textContent);
    // makes the 0 which is a string, into a number, so it can add 
    let intervalFunction = setInterval(function () {
        // this is where a second adds on each time? 
        let counter = parseInt(time.textContent) + 1;
        time.textContent = counter;
    }, 1000); 
    // adding 1000 milliseconds aka one second 
    stop.addEventListener("click", (evt) => {
        clearInterval(intervalFunction)  // stop button stops it from counting
    });
});
// when user clicks a box, an X appears
let cell = document.getElementsByClassName('cell');
cell.addEventListener('click', (evt) => {
    cell.style.backgroundColor = "red";
});
 
// cell.addEventListener ('click', (evt) => {
//     cell.evt.target.style.backgroundColor = "red";
// });


// let gameTurn = cell.addEventListener('click', (evt) => {
//     cell.textContent = "x";
// });

// prompting proper player's turn 
// let player = document.getElementById()

let status = document.getElementById('status');
let gameActive = true;
let currentPlayer = "X";   



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
