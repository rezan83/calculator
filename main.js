//getting buttonsDiv and input
const buttonsDiv = document.getElementById("buttonsDiv")
const input = document.getElementById("input");

// saved value by In button
var saved = 0;

// adding buttons to buttonsDiv
const buttonNames = ['C','In',7,8,9,'+',4,5,6,'-',1,2,3,'*',0,'.','=','/']
const buttonHtml = buttonNames.map(item => {
    return(
        `<button class="editor" id="${item}" value="${item}">
            ${item}
        </button>`
        );
})

buttonHtml.forEach(btnHtml => buttonsDiv.innerHTML+=btnHtml )

// selecting buttons and ading event listener
const allButtons = document.querySelectorAll(".editor");
allButtons.forEach(button => {
    button.addEventListener('click', (e)=> buttonHandel(e.target.value))
})


// main click handler function
function buttonHandel(btnValue){
    if (btnValue === "C") {
        resetValue()
    }else if (btnValue === "**2" || btnValue === "**0.5") {
        specialCalculate(btnValue)
    }else if(btnValue === "="){
        calculate();
    }else if(btnValue === "In"){
        saveValue()
    }
    else{
        addValue(btnValue)
    }
}

//****functions to handel every situation ****/

// the delete C button
function resetValue(){
    input.value = '';
}

// main calculation
function calculate() {
	input.value = eval(input.value)
}

// add value to the input
function addValue(btnValue){
    input.value+=btnValue;
}

// saving a value from input to use it later with 'In' button
function saveValue(){
    if(input.value && Number(input.value[input.value.length-1])){
        saved = eval(input.value);
    }else{
        input.value+=saved;
    } 
}

// claculation by the square-root and square-power buttons
function specialCalculate(btnValue){
    if(input.value){
        calculate();
        addValue(btnValue);
        calculate();
    } 
}

//***** removing text node after buttons (html problem!!)
var power = document.getElementById("square-power");
power.nextSibling.parentNode.removeChild(power.nextSibling);
var sqRoot = document.getElementById("square-root");
sqRoot.nextSibling.parentNode.removeChild(sqRoot.nextSibling);