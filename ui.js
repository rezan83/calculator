//getting buttonsDiv and input
export const input = document.getElementById("input");
const buttonsDiv = document.getElementById("buttonsDiv")

//*******adding buttons to buttonsDiv
const buttonNames = [
    {value:"**2", inHTML:'x&sup2;'},
    {value:"**0.5", inHTML:'&radic;'},
    {value:'C', inHTML:'C'},
    {value:'ln', inHTML:'ln'},
    {value:7, inHTML:7},
    {value:8, inHTML:8},
    {value:9 , inHTML:9},
    {value:'+' , inHTML:'+'},
    {value:4 , inHTML:4},
    {value:5 , inHTML:5},
    {value:6, inHTML:6},
    {value:'-' , inHTML:'-'},
    {value:1 , inHTML:1},
    {value:2 , inHTML:2},
    {value:3, inHTML:3},
    {value:'*', inHTML:'x'},
    {value:0, inHTML:0},
    {value:'.', inHTML:'.'},
    {value:'=', inHTML:'='},
    {value:'/', inHTML:'%'},
];

const buttonHtml = buttonNames.map(btn => {
    return(
        `<button class="editor" id="${btn.value}" value="${btn.value}">
            ${btn.inHTML}
        </button>`
    );
});

buttonsDiv.innerHTML+=buttonHtml.join('');

//***** selecting buttons and adding event listener
export const allButtons = document.querySelectorAll(".editor");

