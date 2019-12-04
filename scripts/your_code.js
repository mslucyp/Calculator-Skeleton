let allButtons = document.getElementsByTagName("button");
let equation = "";

for (let i = 0; i < allButtons.length; i++){

    let button = allButtons[i]; 
    let buttonValue = button.innterHTML;

    if (buttonValue === "=" ){
        button.addEventListener("click", function(){
            let answer = Calculator.calculate(equation);
            Calculator.setDisplayValue(answer);
        });
    }
    else if ( buttonValue === "DEL" ){
        button.addEventListener("click", function(){
            equation = equation.subtr(0, equation.length -1); 
            Calculator.setDisplayValue(equation);
        });
    }
    else if ( buttonValue === "AC" ){
        button.addEventListener("click", function(){
            equation = "";
            Calculator.clearDisplay();
        });
    }
    else {
        button.addEventListener("click", function(){
            equation += buttonValue;
            Calculator.setDisplayValue(equation);
        });

    }
}


