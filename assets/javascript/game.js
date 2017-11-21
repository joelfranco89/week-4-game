$(document).ready(function(){

var randomNumberGenerated = Math.floor(Math.random() *120) + 19;
var currentRandomNumber = $("#randomNumberGenerated").text(randomNumberGenerated);
var wins = 0;
var losses = 0;
var totalScore = 0;

var firstRandomImageNumber = Math.floor(Math.random() * 12) + 1;
var secondRandomImageNumber = Math.floor(Math.random() * 12) + 1;
var thirdRandomImageNumber = Math.floor(Math.random() * 12) + 1;
var fourthRandomImageNumber = Math.floor(Math.random() * 12) + 1;


function reset(){
    randomNumberGenerated = Math.floor(Math.random() *120) + 19;
    firstRandomImageNumber = Math.floor(Math.random() * 12) + 1;
    secondRandomImageNumber = Math.floor(Math.random() * 12) + 1;
    thirdRandomImageNumber = Math.floor(Math.random() * 12) + 1;
    fourthRandomImageNumber = Math.floor(Math.random() * 12) + 1;
    currentRandomNumber = $("#randomNumberGenerated").text(randomNumberGenerated);
    totalScore = 0
    $("#totalScore").text(totalScore);  
}

firstRandomImageNumber;
secondRandomImageNumber;
thirdRandomImageNumber;
fourthRandomImageNumber;
currentRandomNumber;
$("#wins ").text(wins);
$("#losses ").text(losses);




$("#first-image").on("click", function(){
    if (totalScore < randomNumberGenerated){
        totalScore += firstRandomImageNumber;
        $("#totalScore").text(totalScore);  
    }
    if (totalScore == randomNumberGenerated){
        wins += 1;
        alert("You win!");
        reset();
    }
    if (totalScore > randomNumberGenerated){
        losses += 1;
        alert("You lost! Try again.");
        reset();
    }
    $("#wins ").text(wins);
    $("#losses ").text(losses);
});
$("#second-image").on("click", function(){
    if (totalScore < randomNumberGenerated){
        totalScore += secondRandomImageNumber;
        $("#totalScore").text(totalScore);  
    }
    if (totalScore == randomNumberGenerated){
        wins += 1;
        alert("You win!");
        reset();
    }
    if (totalScore > randomNumberGenerated){
        losses += 1;
        alert("You lost! Try again.");
        reset();
    }
    $("#wins ").text(wins);
    $("#losses ").text(losses);
});
$("#third-image").on("click", function(){
    if (totalScore < randomNumberGenerated){
        totalScore += thirdRandomImageNumber;
        $("#totalScore").text(totalScore);
    }
    if (totalScore == randomNumberGenerated){
        wins += 1;
        alert("You win!");
        reset();
    }
    if (totalScore > randomNumberGenerated){
        losses += 1;
        alert("You lost! Try again.");
        reset();
    }
    $("#wins ").text(wins);
    $("#losses ").text(losses);
});
$("#fourth-image").on("click", function(){
    if (totalScore < randomNumberGenerated){
        totalScore += fourthRandomImageNumber;
        $("#totalScore").text(totalScore);  
    }
    if (totalScore == randomNumberGenerated){
        wins += 1;
        alert("You win!");
        reset();
    }
    if (totalScore > randomNumberGenerated){
        losses += 1;
        alert("You lost! Try again.");
        reset();
    } 
    $("#wins ").text(wins);
    $("#losses ").text(losses); 
});

});

