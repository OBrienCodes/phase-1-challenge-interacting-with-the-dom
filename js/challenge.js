let counterBox = document.querySelector("h1#counter")
let totalSeconds = counterBox.innerHTML
let seconds =0
let plusButton = document.querySelector("#plus")
let minusButton = document.querySelector("#minus")
let heartButton = document.querySelector("#heart")
let pauseButton = document.querySelector("#pause")




// document.addEventListener("DOMContentLoaded", function(){
//     setInterval(function(){
//         seconds += 1;
//         totalSeconds = seconds;
//         counterBox.append(totalSeconds)
//     }, 1000)})

plusButton.addEventListener("click", function(){
    seconds +=1;
    totalSeconds = seconds;
    counterBox.append(totalSeconds)
})

minusButton.addEventListener("click", function(){
    seconds -=1;
    totalSeconds = seconds;
    counterBox.append(totalSeconds)
})

    
    

