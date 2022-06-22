const countdownDisplay = document.getElementById("countdown-display")
const rocket = document.getElementById("rocket")
let timeRemaining = 10
let counter = 1;
let canRocketLaunch = true;  

// Task: 
// 1. Write the JavaScript to count down from 60 to 0 and display the remaining time
// 2. When the countdown reaches 0, launch the rocket with an animation


// Stretch goals: 
// 1) Add fire under the rocket. 
// 2) Randomly don’t launch the rocket when the timer reaches 0.


var countdown = setInterval(function(){
        
        countdownDisplay.innerHTML = timeRemaining - counter; 
        counter++; 
        
       if(counter > timeRemaining){
               clearInterval(countdown); 
               launch(); 
       }
        
},1000); 

const setLaunch = function(){
        
        let randVal = Math.floor(Math.random() * 10); 
        if(randVal%2 === 0){
                canRocketLaunch = true; 
        }
        else{
                canRocketLaunch = true; 
        }
}

const launch = function(){
        if(canRocketLaunch){
                 rocket.classList.add('move');
                 document.getElementById('smoke').style.display = 'block'; 
        }
        
        else{
                console.log("Ooops. Something went wrong"); 
        }
}


