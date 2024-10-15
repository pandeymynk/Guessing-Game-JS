let input = document.getElementById('input');
let btw = document.getElementById('btw');
let wrng = document.querySelector('.wrng')
let guess = document.getElementById("guess");

let answer = Math.floor(Math.random()*100)+1;
let numGuess = 0;

btw.addEventListener("click",()=>{
    guessesNumber();
    
});
function guessesNumber(){
if(input.value <1 || input.value >100 || isNaN(input.value)){
    wrng.innerHTML ="Enter between 1 to 100";
}
else{
    numGuess ++;
    guess.innerHTML = "No . of Guess : " +numGuess;
    if(input.value > answer){
        wrng.innerHTML = "You guessed too High!!";
        input.value = "";

    }
    else if(input.value < answer){
        wrng.innerHTML ="You Guessed too low !"
         input.value = "";

    }
    else{
        wrng.innerHTML ="Congratulation You Guessed the correct Answer";

        setTimeout(()=>{
            resetGame();
        },5000)

   
    }


}
}

function resetGame(){
    numGuess = 0;
    answer = Math.floor(Math.random()*100)+1;
    input.value = "";
    guess.innerHTML= "No. of Guess: 0";
    
}