// console.log("hi");

// class Cutomer{
//     name;
//     age;
//     address;


// constructor(name , age, address){
//     this.name=name;
//     this.age=age;
//     this.address=address;
// }

// setName(name){
//     this.name=name;
// }

// getName(){
//     return this.name;
//     }   
// }

// let customer01 = new Cutomer("saman",12,"panadura")

// console.log(customer01.getName());
// let randomNumber = Math.floor((Math.random()*10)+1);
// console.log(randomNumber);

// let lblOutput = document.getElementById("output");

// function btnGuess() {
//     let guess = document.getElementById("guessNumber").value;
//     let random = randomNumber;
//     if (guess>10) {
//     console.log("Try Again...Your Number is Invalid...");
//     lblOutput.innerHTML = "Try Again...Your Number is Invalid...";
//     }else if (random==guess) {
//         console.log("You win...Your guessing Number is Correct");
//         lblOutput.innerHTML = "You win...Your guessing Number is Correct";
//     }else if (random>guess) {
//         console.log("Try Again...Your Guessing Number is Too low");
//         lblOutput.innerHTML = "Try Again...Your Guessing Number is Too low";
//     }else if (random<guess) {
//         console.log("Try Again...Your Guessing Number is Too High");
//         lblOutput.innerHTML = "Try Again...Your Guessing Number is Too High";
//     }else if (guess>10) {
//         console.log("Try Again...Your Number is Invalid...");
//         lblOutput.innerHTML = "Try Again...Your Number is Invalid...";
//     }
    
// }

let randomNumber = Math.floor((Math.random()*10)+1);
console.log(randomNumber);

let guessNumber = new Number();



function btnGuess() {
    let guessNumber = document.getElementById("guessNumber").value;
    let randomNumber = document.getElementById("randomNumber").value;

    if(guessNumber>10){
        console.log("Invalid Input! try again :(");
        lblOutput.innerHTML = "Invalid Input! try again :(";
    }else if(randomNumber<guessNumber){
        console.log("Guess again, Number is too High!");
        lblOutput.innerHTML = "Guess again, Number is too High!";
    }else if(randomNumber>guessNumber){
        console.log("Guess again, Number is too Low!");
        lblOutput.innerHTML = "Guess again, Number is too Low!";
    }else if(randomNumber==guessNumber){
        console.log("You Win! Number is correct.");
        lblOutput.innerHTML = "You Win! Number is correct.";
    }
}


