// let answer; 
let storedValue;

let operators = document.getElementsByClassName("operator");
let numbers = document.getElementsByClassName("number");
let equalsButton = document.getElementById("equals");
let allClearButtons = document.getElementById("allClear");
let deleteButton = document.getElementById("delete");

let decimalButton = document.getElementById("decimal").innerHTML;

/* Display output */
let historyDisplay = document.getElementById("history");
let currentDisplay = document.getElementById("current");

/* Buttons */
let one = document.getElementById("btn-1").innerHTML;
let two = document.getElementById("btn-2").innerHTML;
let three = document.getElementById("btn-3").innerHTML;
let four = document.getElementById("btn-4").innerHTML;
let five = document.getElementById("btn-5").innerHTML;
let six = document.getElementById("btn-6").innerHTML;
let seven = document.getElementById("btn-7").innerHTML;
let eight = document.getElementById("btn-8").innerHTML;
let nine = document.getElementById("btn-9").innerHTML;
let zero = document.getElementById("btn-0").innerHTML;

/* Operators */
let divideSign = document.getElementById("divide").innerHTML;
let plus = document.getElementById("add").innerHTML;
let minus = document.getElementById("subtract").innerHTML;
let times = document.getElementById("multiply").innerHTML;
let storedOperator;
let storedDisplay;

/* Clears the calculator screen when AC is clicked */
allClearButtons.addEventListener("click", function clear(){
    location.reload(true); 
})

/* This function deletes the last number in the display using the slice method on the string.*/
function delBtn() {
    currentDisplay.innerHTML = currentDisplay.innerHTML.slice(0, -1);
    return currentDisplay;
}

/* This function allows the user to include a decimal place, but only one. */

function decimalPlace() { 
    let n = currentDisplay.indexOf(".");
    alert(n);
    if (n == -1) {
        currentDisplay.innerHTML += decimalButton.innerHTML;
    return currentDisplay;
    }

}

/* Equals button code */

function equalsOperation() {

}

operators.addEventListener("click", function determineOperator(n){
    let newOperator = n.innerHTML;
    switch(newOperator) {
        case "x":
            storedOperator = "*"
            multiply(); 
            break;
        case "÷":
            storedOperator = "/"
            divide() 
            break;
        case "-":
            storedOperator = "-"
            subtract() 
            break;
        case "+":
            storedOperator = "+"
            add();
            break;  
    }
})


/* These functions display the operator icon */

function displayAdd() {
    storedOperator = plus;
    historyDisplay.innerHTML = currentDisplay.innerHTML + plus;
    currentDisplay.innerHTML = '';
}

function displayDivide() {
    storedOperator = divideSign;
    historyDisplay.innerHTML = currentDisplay.innerHTML + divi;
    currentDisplay.innerHTML = '';
}

function displayMinus() {
    storedOperator = minus;
    historyDisplay.innerHTML = currentDisplay.innerHTML;
    currentDisplay.innerHTML = '';
}

function displayMultiply() {
    storedOperator = times;
    historyDisplay.innerHTML = currentDisplay.innerHTML;
    currentDisplay.innerHTML = '';
}

/* These functions display the button number that is clicked on in the display bar */
function calc1() {
    currentDisplay.innerHTML += one;
    return currentDisplay;
}

function calc2() {
    currentDisplay.innerHTML += two;
    return currentDisplay;
}

function calc3() {
    currentDisplay.innerHTML += three;
    return currentDisplay;
}

function calc4() {
    currentDisplay.innerHTML += four;
    return currentDisplay;
}

function calc5() {
    currentDisplay.innerHTML += five;
    return currentDisplay;
}

function calc6() {
    currentDisplay.innerHTML += six;
    return currentDisplay;
}

function calc7() {
    currentDisplay.innerHTML += seven;
    return currentDisplay;
}

function calc8() {
    currentDisplay.innerHTML += eight;
    return currentDisplay;
}

function calc9() {
    currentDisplay.innerHTML += nine;
    return currentDisplay;
}

function calc0() {
    currentDisplay.innerHTML += zero;
    return currentDisplay;
}

/* Operator functionality */
function add() {
    answer = historyDisplay + storedOperator + currentDisplay;
    let solution = eval(answer); 
    historyDisplay = answer;
    currentDisplay = solution;

}

function multiply() {
    answer = a * b;
    return answer;
}

function subtract() {
    answer = a - b;
    return answer;
}

function divide() {
    answer = a / b;
    return answer;
}
