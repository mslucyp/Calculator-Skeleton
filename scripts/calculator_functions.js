
const Calculator = {

    setDisplayValue : function(newValue){
        document.querySelector(".display").innerHTML = newValue;
    },

    clearDisplay : function(){
        document.querySelector(".display").innerHTML = "";
    },

    calculate : function(equation){

        let answer = new Function("return " + equation);

        return answer();

    }

};
