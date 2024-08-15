// declare variables, num1, num2 store numbers as strings for calculating, display value updates the numbers
// display and assigns numbers for calculating, op determines the current operator, and the rest are toggles that
// help the code determine what state it is in for decision making. Lastly declare variables tied to all buttons in the html document
let num1 = '0';
let num2 ='0';
let op = '';
let isCalculating = false;
let opAssigned = false;
let divideByZero = false;
const displayValue = document.getElementById('display-text');
const clearBtn = document.getElementById('clear');
const numBtn = Array.from(document.getElementsByClassName('number'));
const bckSpcBtn = document.getElementById('backspace');
const operatorBtn = Array.from(document.getElementsByClassName('operator'));
const equalBtn = document.getElementById('equals');
const percentBtn = document.getElementById('percent');
const dotBtn = document.getElementById('dot');

// takes the given operator and num1 num2 values, then turns the num1, num2 string values into a floating point num
// switch case determines what the current operator is and does an equation based on the current operator
// finally it updates the display with the calculated number and sets the iscalculating toggle to be true
function operate(num1, num2, op) {
    let result = 0;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch(op){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            if (num2 == 0){
                result = 'Error! Cannot divide by zero!';
                isCalculating = false;
                divideByZero = true;
            } else {
                result = num1 / num2;
            }
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
            console.log('Error: operator unassigned');
            break;
    }
    displayValue.textContent = result.toString();
    isCalculating = true;
}

// clears the display and all memory of toggles and numbers
clearBtn.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    op = '';
    displayValue.textContent = '0';
    isCalculating = false;
    opAssigned= false;
    divideByZero = false;
});

//  numBtn adds listeners to each digit button that will update the display by adding the digit pressed to the end of the display string
//  but only if the display isn't set to 0 and the button pressed is 0, or if the isCalculating toggle is true
//  if there is a current operator assigned, then it will replace the display with the button pressed and set opAssigned to false
numBtn.forEach(number => {
    number.addEventListener('click', () => {
        let btnNum = number.innerHTML;
        if(isCalculating === true || (displayValue.textContent === '0' && btnNum === 0)){
            return;
        } else {
            if (opAssigned === true) {
                opAssigned = false;
                num1 = displayValue.textContent;
                displayValue.textContent = btnNum.toString();
            } else if(displayValue.textContent === '0' || divideByZero === true) {
                displayValue.textContent = btnNum.toString();
                divideByZero = false;
            } else {
                displayValue.textContent += btnNum.toString();
            }
            isCalculating = false;
        }
    });
});



//  backspace button checks if isCalculating is true, and if not it will update the display with
//  a new string with the last character sliced off. if there is only a single character, then set display to 0
bckSpcBtn.addEventListener('click', ()=> {
    if(isCalculating === true){
        return;
    } else if(displayValue.textContent.length > 1) {
        displayValue.textContent = displayValue.textContent.slice(0, (displayValue.textContent.length - 1));
    } else {
        displayValue.textContent = '0';
    }
});
		
// this adds an event listener for each operator button that will either assign the value of the display
//  to num1 or if a different operator button was pressed recently, it will assign the display value
//  to num2 and run an operation, then it will set the current operator symbol to op and set opAssigned true
operatorBtn.forEach(operator => {
    operator.addEventListener('click', () => {
        let opSymbol = operator.id;
        if(op !== '') {
            num2 = displayValue.textContent;
            operate(num1, num2, op);
            console.log('num1: ' + num1);
            console.log('num2: ' + num2);
        } else {
            num1 = displayValue.textContent;
        }
        op = opSymbol;
        opAssigned = true;
        isCalculating = false;
    });
});
	
// add event listener percent button
// 	if display value not equal to 0
// 		display value to array
// 		if display value length = 1
// 			shift two zeroes into display value
// 		else if display value length = 2
// 			shift one zero into display value
// 		slice a period before the last character
// 		display value to string

percentBtn.addEventListener('click', ()=> {
    let neg = false;
    if(displayValue.textContent == '0') {
        return;
    } else {
        let arr = displayValue.textContent.split('');
        if(displayValue.textContent < 0) {
            arr.shift();
            neg = true;
        }
        if(displayValue.textContent < 10) {
            arr.unshift('0', '0');
        } else if(displayValue.textContent < 100) {
            arr.unshift('0');
        }
        if(arr.indexOf('.') == -1) {
            arr.splice((arr.length-2), 0, '.');
        } else {
            let i = arr.indexOf('.');
            arr.splice((i), 1);
            arr.splice((i-2), 0, '.'); 
        }
        if(neg == true) {
            arr.unshift('-');
            displayValue.textContent = arr.join('');
        } else {
            displayValue.textContent = arr.join('');
        }

    }
})
		
//  add event listener dot button that converts display value to a new array with each character as a separate array item
//  it then searches for an existing dot symbol and adds one if none is found
dotBtn.addEventListener('click', ()=> {
    let arr = displayValue.textContent.split('');
    console.log(arr);
    if((arr.indexOf('.')) !== -1){
        return;
    } else {
        displayValue.textContent += '.';
    }
});
// add event listener equals button which assigns the current display value to num2 and then runs operate
// after operate is run it sets num1, num2, and op back to empty strings
equalBtn.addEventListener('click', ()=>{
    if(op !== '') {
        num2 = displayValue.textContent;
        operate(num1, num2, op)
        num1 = '', num2 = '', op = '';
    }
});