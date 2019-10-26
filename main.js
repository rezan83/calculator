
const editorsDiv = document.getElementById("editors")
const input = document.getElementById("input");


const editor = ['C','+','-','*','/',1,2,3,4,5,6,7,8,9, 0,'.','=']
const editorButtons = editor.map(item => {
    return(`<button class="editor" id="${item}" value="${item}">${item}</button>`)
})

editorButtons.forEach(editorButton => editorsDiv.innerHTML+=editorButton )

const allEditors = document.querySelectorAll(".editor");
console.log(allEditors)
allEditors.forEach(editor => {
    editor.addEventListener('click', (e)=> editorHandel(e.target.value))
})

function editorHandel(btnValue){
    if (btnValue === "C") {
        resetValue()
    }else if (btnValue === "**2" || btnValue === "**0.5") {
        specialCalculate(btnValue)
    }else if(btnValue === "="){
        calculate();
    }
    else{
        addValue(btnValue)
    }
}

function resetValue(){
    input.value = '';
}
function calculate() {
	input.value = eval(input.value)
}

function addValue(btnValue){
    input.value+=btnValue;
}

function specialCalculate(btnValue){
    calculate();
    addValue(btnValue);
    calculate();
}