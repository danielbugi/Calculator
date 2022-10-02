// function that display numbers 

function display(value) {
    document.getElementById("result").value += value;
} 

// function that clear all the values 

function clearScreen() {
    document.getElementById("result").value = "";
}


//function that evaluates the expressions and return result 

function calculate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
}