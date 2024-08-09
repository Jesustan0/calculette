
const display = document.getElementById('display');

function appendToDisplay(input){
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += input;
}

function calculate(){
    if (display.value === "" || display.value === "Error") {
        display.value = "Error";
        return;
    }
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = "";
}