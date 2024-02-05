// Get the display element
var display = document.getElementById('display');

// Function to append characters to the display
function appendToDisplay(value) {
    display.value += value;
}
// Function to clear the entire display
function clearDisplay() {
    display.value = '';
}

// Function to clear the last entry from the display
function clearEntry() {
    display.value = display.value.slice(0, -1);
}

// Function to handle backspace (remove last character)
function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculateResult(value){
    display.value=eval(display.value).toString();}
    function converter(){
        const binaryInt = display.value;
        const decimal = parseInt(binaryInt, 10);
    
        if (!isNaN(decimal)) {
            display.value = decimal.toString(2);
        } else {
            alert("Invalid binary number");
        }}
        function binaryConverter(){
            binaryInt = display.value;
            decimal = parseInt(binaryInt, 2);
       
           if (!isNaN(decimal)) {
               display.value = decimal.toString();
           } else {
               alert("Invalid binary number");
           }}
switch(display.value){
    case '+':
         calculateResult();
        case '-':
            calculateResult();
            case '*':
                 calculateResult();
                case '/':
                     calculateResult();
                    case 'Bc':
                        converter();
                        case 'Dc':
                             binaryConverter();

                  
}



