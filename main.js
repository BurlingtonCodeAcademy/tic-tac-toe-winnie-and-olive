let start = document.getElementById('start'); //to start game and timer?
let stop = document.getElementById('stop'); //this is to stop clock...
// let status = document.getElementById("status"); //this shows who turn it is
let compOMove = document.getElementById("compOMove");
let playerXMove = document.getElementById("playerXMove");


// let interval = 0;
let compWins = 0;
let playerWins = 0;
let gameActive = true;
let currentPlayer = 


// changing button color on click (graying it out)
let changeColor = start.addEventListener('click', (evt) => {
    start.style.backgroundColor = "gray";
    start.style.borderColor = "lightgray";
});
// prompting proper player's turn 
let player = document.getElementById()
let status = document.getElementById('status');

   

// timer functionality 
start.addEventListener("click", (evt) => {   
    //have to call your function & click to make it happen 
    let time = document.getElementById('clock');
    // calling the clock ... 
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

function startGame () {
    start.disabled = true; 

 status.textContent = `it's ${currentPlayer}'s turn!`
]
