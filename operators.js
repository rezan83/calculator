//****functions to handel every situation ****/

// the delete C button
export function resetValue(){
    input.value = "";
}

// main calculation
export function calculate() {
	input.value = eval(input.value)
}

// add value to the input
export function addValue(btnValue){
    input.value+=btnValue;
}

// natural logarithem by "ln"
export function naturalLog(){
    calculate();
    input.value = Math.log(input.value)
}

// claculation by the square-root and square-power buttons
export function specialCalculate(btnValue){
    if(input.value){
        calculate();
        addValue(btnValue);
        calculate();
    } 
}

// not in use now but was for saving a value from input with 'ln' button
// function saveValue(){
//     if(input.value && Number(input.value[input.value.length-1])){
//         saved = eval(input.value);
//     }else{
//         input.value+=saved;
//     } 
// }

