let intervalId; // Declare a variable to store the interval ID
let timer = 60; // Initial value of the timer
var scoreval=0;
var num=0;
document.querySelector("#start").addEventListener("click", () => {
    // Start the timer and store the interval ID
    intervalId = setInterval(runTimer, 1000);
    hit();
    makeBubble();

    // Show the "Stop" button
    document.querySelector("#stop").style.display = "block";

    // Set the initial timer value
    document.querySelector("#timer").innerHTML = timer;
});

document.querySelector("#stop").addEventListener("click", () => {
    // Clear the interval
    clearInterval(intervalId);

    // Reset the timer to 60
    timer = 60;

    // Update the timer display
    document.querySelector("#timer").innerHTML = timer;

    // Hide the "Stop" button
    document.querySelector("#stop").style.display = "none";
});

function runTimer() {
    // Decrease the timer value by 1
    timer--;

    // Update the timer display
    document.querySelector("#timer").innerHTML = timer;

    // Check if the timer has reached 0
    if (timer === 0) {
        // Clear the interval
        clearInterval(intervalId);

        // Hide the "Stop" button
        document.querySelector("#stop").style.display = "none";
    }
}
function hit() {
    // Your hit function logic here
    num = Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent=num
}

function makeBubble() {
    // Your makeBubble function logic here
    var cur="";
    for(var i=1;i<=136;++i){
        var num=Math.floor(Math.random()*10)
        cur+=`<div class="bubble">${num}</div>`;
    }
    document.querySelector("#bottom").innerHTML=cur;
}
document.querySelector("#bottom")
.addEventListener("click",(dets)=>{
    var clicked_num=Number(dets.target.textContent)
    if(clicked_num===num){
        increaeScore();
        makeBubble();
        hit();
    }
})
function increaeScore(){
        scoreval+=10;
        document.querySelector("#scoreval").textContent=scoreval;
    }