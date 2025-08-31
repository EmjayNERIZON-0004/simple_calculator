     let current = "";
    let main_display = "";
    let first_value = null;
    let operator = "";
    const display = document.getElementById("display");
    const display_result = document.getElementById("display_result");


    function appendNumber(num) {

        current += num; 
        main_display += num; 
        display.value = main_display;

    }
    function appendDisplay(op){
        main_display += op;
        display.value = main_display;
    }
    
    function setOperator(op){
        operator = op;
        console.log(operator);
        first_value = parseFloat(current);
        current = "";
    
        appendDisplay(op);
      


    } 
    function calculate(){

        if(operator === "+"){
            current = first_value + parseFloat(current);
        }else if(operator === "-"){
            current = first_value - parseFloat(current);
        }else if(operator === "*"){
            current = first_value * parseFloat(current);
        }else if(operator === "/"){
            current = first_value / parseFloat(current);
        }
       display_result.value = current;
      console.log(current);
    } 