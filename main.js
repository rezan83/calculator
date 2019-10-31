import {
    resetValue,
    specialCalculate,
    calculate,
    naturalLog,
    addValue 
} from './operators.js';

import {input, allButtons} from './ui.js';



allButtons.forEach(button => {
    button.addEventListener('click', (e)=> buttonHandel(e.target.value))
});


//**** main click handler function
function buttonHandel(btnValue){
    if (btnValue === "C") {
        resetValue()
    }else if (btnValue === "**2" || btnValue === "**0.5") {
        specialCalculate(btnValue)
    }else if(btnValue === "="){
        calculate();
    }else if(btnValue === "ln"){
        naturalLog()
    }else{
        addValue(btnValue)
    }
}