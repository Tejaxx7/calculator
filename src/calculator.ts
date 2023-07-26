console.log("hello I am calc..")

function clearDisplay(){
    display.innerHTML = "0";
}

let display = document.getElementById("text")!;
let deleteButton = document.getElementById("del-btn")!;
let buttons = Array.from(document.getElementsByClassName("body-btn"));
let equalsButton = document.getElementById("eql-btn")!;

equalsButton.addEventListener("click",function func(){
    let input = document.getElementById("text")?.innerHTML!;
    const breakpoint = /[x\-\+÷]/;
    let inputs = input.split(breakpoint);
    let input1 = Number(inputs[0]);
    let input2 = Number(inputs[1]);
    if(typeof input1 === 'number' && typeof input2 === 'number' && inputs.length == 2 && inputs[0] != '' && inputs[1] !=''){
        let operator: string = '+';
        let result: number = 0;
        for(let i = 0; i < input.length;i++){
            if(input[i] == 'x' || input[i] == '-' || input[i] == '+' || input[i] == '÷'){
                operator = input[i];
                break;
            }
        }
        switch(operator) {
            case 'x':
                result = input1 * input2;
                break;
            case '-':
                result = input1 - input2;
                break;
            case '÷':
                result = input1 / input2;
                break;
            case '+':
                result = input1 + input2;
                break;
            default:
                alert("something went wrong");
          }
        console.log(result);
    }else{
        alert("invalid expression!! supports only binary expression.\n ex: a x b = ");
    }
});


buttons.forEach(element => {
    let symbol = element.innerHTML;
    element.addEventListener("click",function addToDisplay(){
        display.innerHTML += symbol;
    })
});



deleteButton.addEventListener("click",clearDisplay);

//del button functionality
//TODO click button text appear in display
//TODO = button press evaluate expression
