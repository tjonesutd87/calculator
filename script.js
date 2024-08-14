// declare variables, num1, num2 store numbers as strings for calculating, display value updates the numbers
// display and assigns numbers for calculating, op determines the current operator, and the rest are toggles that
// help the code determine what state it is in for decision making
let num1 = '3';
let num2 ='5.5';
let op = '+';
let displayValue = '';
let isCalculating = false;
let opAssigned = false;
let divideByZero = false;
const displayDiv = document.getElementById("display-text");

// function operate (num1, num2, op)
// 	declare result and initialize to 0
// 	parse num1 and num 2 as float or int
// 	if operator is plus
// 		set result to num1 plus num2
// 	if operator is minus
// 		set result to num1 minus num2
// 	if operator is slash
// 		if num2 = 0
// 			result = snarky string
// 			set is calculating to false
// 			set dividebyzero true
// 		else
// 			set result to num1 divided by num2
// 	if operator is asterisk
// 		set result to num1 times num2
// 	set display value to the result as a string
// 	display div text content = display value
// 	set op to empty string
// 	set num1 to 0
// 	set num2 to 0
function operate(num1, num2, op) {
    if ((num1.indexOf('.')) > -1 || num2 (indexOf('.')) > -1) {
        num1 = num1.parseFloat();
        num2 = num2.parseFloat();
    } else {
        num1 = num1.parseInt();
        num2 = num2.parseInt();
    }
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
    displayValue = result.toString();
    displayDiv.textcontent = displayValue;
    op = '';
    num1 = '';
    num2 = '';
}

// add event listener ac button
// 	assign number 1 to 0
// 	assign number 2 to 0
// 	assign op to empty string
// 	assign displayValue to 0
// 	display div text content = display value
// 	set is calculating to false
// 	set op assigned to false
// 	set dividebyzero to false

// add event listener number button
// 	button pressed  = p element id
// 	if is calculating is true or (display value = 0 and button pressed = 0)
// 		do nothing
// 	else
// 		if op assigned is true
// 			set op assigned flag to false
// 			number 1 = display value
// 			display value = button pressed
// 			display div text content = display value
// 		else if display value = 0 or dividebyzero = true
// 			display value = button pressed
// 			display div text content = display value
//          divide by zero = false
// 		else
// 			display value = display value + button pressed
// 		set is calculating to false

// add event listener backspace button
// 	if is calculating = true
// 		do nothing
// 	else if display value length > 1
// 		slice last character off display value
// 	else if display value length <= 1
// 		display value = 0
// 	display div text content = display value
		
// add event listener operator buttons
// 	if operator not equal to empty string
// 		if display value = empty string
// 			do nothing
// 		else
// 			assign display value to num2
// 			run operate
// 			assign given operator to operator variable
// 			set operator assigned to true
// 	else
// 		assign display value to num1
// 		assign given operator to operar to variable
// 		set operator assigned to true
	
// add event listener percent button
// 	if display value not equal to 0
// 		display value to array
// 		if display value length = 1
// 			shift two zeroes into display value
// 		else if display value length = 2
// 			shift one zero into display value
// 		slice a period before the last character
// 		display value to string
		
// add event listener dot button
// 	display value to array
// 	search for dot character if found do nothing
// 	else
// 		push "." to display value
// 	display value to string
	
// add event listener equals button
// 	set is calulating to true
// 	run operate