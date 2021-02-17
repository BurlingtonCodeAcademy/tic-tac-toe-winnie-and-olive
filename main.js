let start = document.getElementById('start'); //have to call in your variables from your JS 
let stop = document.getElementById('stop');

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
    // adding 1000 milliseconds aka one second ? 
    stop.addEventListener("click", (evt) => {
        clearInterval(intervalFunction)  // stop button stops it from counting
    });
});