var txtDisplay = document.getElementById('txtInput');
var calOperation = new Array();
var displayResultMode = false;
function buttonPressed(btnVar) {
    if(displayResultMode){
        txtDisplay.value = "";
        displayResultMode = false;
    }
    
    switch (btnVar) {
    case 1:
        txtDisplay.value += "1";
        break;
    case 2:
        txtDisplay.value += "2";
        break;
    case 3:
        txtDisplay.value += "3";
        break;
    case 4:
        txtDisplay.value += "4";
        break;
    case 5:
        txtDisplay.value += "5";
        break;
    case 6:
        txtDisplay.value += "6";
        break;
    case 7:
        txtDisplay.value += "7";
        break;
    case 8:
        txtDisplay.value += "8";
        break;
    case 9:
        txtDisplay.value += "9";
        break;
    case 0:
        txtDisplay.value += "0";
        break;
    case ".":
        if(!checkRepeatOperator() && txtDisplay.value != "")
            txtDisplay.value += ".";
        break;
    case "/":
        if(!checkRepeatOperator() && txtDisplay.value != "")
            txtDisplay.value += "/";
        break;
    case "*":
        if(!checkRepeatOperator() && txtDisplay.value != "")
            txtDisplay.value += "x";
        break;
    case "+":
        if(!checkRepeatOperator() && txtDisplay.value != "")
            txtDisplay.value += "+";
        break;
    case "-":
        if(!checkRepeatOperator() && txtDisplay.value != "")
            txtDisplay.value += "-";
        break;
    case "c":
        //calOperation.length = 0;//empty array
        txtDisplay.value = "";
        break;
    case "bac":
        if(txtDisplay.value != "")
            txtDisplay.value = txtDisplay.value.slice(0,-1);
        break;
    default:
        break;
    }
}

var multiplePos;
var dividePos;
var plusPos;
var minusPos;

function executeOperation() {
    if (txtDisplay.value != "" && !checkRepeatOperator()) {
        multiplePos = 0;
        dividePos = 0;
        plusPos = 0;
        minusPos = 0;
        var lastPos = 0;
        //debugger;
        for (var i = 0; i < txtDisplay.value.length; i++) {
            
            if (txtDisplay.value.charAt(i) != '+' &&
                txtDisplay.value.charAt(i) != '-' &&
                txtDisplay.value.charAt(i) != '/' &&
                txtDisplay.value.charAt(i) != 'x') {
                if (calOperation[lastPos] === undefined ) {
                    calOperation[lastPos] = "";
                }
                calOperation[lastPos] += txtDisplay.value.charAt(i);
            } else if(txtDisplay.value.charAt(i) == '+' ||
                      txtDisplay.value.charAt(i) == '-' ||
                      txtDisplay.value.charAt(i) == '/' ||
                      txtDisplay.value.charAt(i) == 'x') {
                lastPos++;
                if (txtDisplay.value.charAt(i) == 'x') {
                    calOperation[lastPos] = '*';
                    multiplePos = lastPos;
                    lastPos++;
                } else if(txtDisplay.value.charAt(i) == '/') {
                    calOperation[lastPos] = txtDisplay.value.charAt(i);
                    dividePos = lastPos;
                    lastPos++;
                } else if(txtDisplay.value.charAt(i) == '+') {
                    calOperation[lastPos] = txtDisplay.value.charAt(i);
                    plusPos = lastPos;
                    lastPos++;
                } else if(txtDisplay.value.charAt(i) == '-') {
                    calOperation[lastPos] = txtDisplay.value.charAt(i);
                    minusPos = lastPos;
                    lastPos++;
                }
            }
        }
        doOperation();
        txtDisplay.value = calOperation[0];
        displayResultMode = true;
        calOperation.length = 0;//empty array
    }
}

function checkFloat(ind){
    if(calOperation[ind].indexOf('.') == -1){
        return parseInt(calOperation[ind]);
    }
    else{
        return parseFloat(calOperation[ind]);
    }
}

function doOperation(){
    var pos;
    var operand1;
    var operand2;
    var equation;
    if(calOperation.indexOf('*') != -1){
        pos = calOperation.indexOf('*');
        operand1 = checkFloat(pos-1);
        operand2 = checkFloat(pos+1);
        equation = operand1 * operand2;
        calOperation.splice((pos-1), 3, equation.toString());
    }
    if(calOperation.indexOf('/') != -1){
        pos = calOperation.indexOf('/');
        operand1 = checkFloat(pos-1);
        operand2 = checkFloat(pos+1);
        equation = operand1 / operand2;
        calOperation.splice((pos-1), 3, equation.toString());
    }
    if(calOperation.indexOf('+') != -1){
        pos = calOperation.indexOf('+');
        operand1 = checkFloat(pos-1);
        operand2 = checkFloat(pos+1);
        equation = operand1 + operand2;
        calOperation.splice((pos-1), 3, equation.toString());
    }
    if(calOperation.indexOf('-') != -1){
        pos = calOperation.indexOf('-');
        operand1 = checkFloat(pos-1);
        operand2 = checkFloat(pos+1);
        equation = operand1 - operand2;
        calOperation.splice((pos-1), 3, equation.toString());
    }
}

function checkRepeatOperator(){
    if (txtDisplay.value.charAt(txtDisplay.value.length - 1) == 'x' || 
        txtDisplay.value.charAt(txtDisplay.value.length - 1) == '/' || 
        txtDisplay.value.charAt(txtDisplay.value.length - 1) == '+' || 
        txtDisplay.value.charAt(txtDisplay.value.length - 1) == '-' || 
        txtDisplay.value.charAt(txtDisplay.value.length - 1) == '.'){
        return true;
    }else{
        return false;
    }
}
document.addEventListener('keydown',function(e) {
    switch (e.keyCode) {
    case 8:
        buttonPressed('bac');
        break;
    case 27:
        buttonPressed('c');
        break;    
    default:
        break;
    }
});
document.addEventListener('keypress',function(e) {
    switch (e.keyCode) {
        case 8:
            buttonPressed('bac');
            break;
        case 27:
            buttonPressed('c');
            break;
        case 42:
            buttonPressed('*');
            break;
        case 43:
            buttonPressed("+");
            break;
        case 45:
            buttonPressed("-");
            break;
        case 46:
            buttonPressed(".");
            break;
        case 47:
            buttonPressed("/");
            break;
        case 48:
            buttonPressed(0);
            break;
        case 49:
            buttonPressed(1);
            break;
        case 50:
            buttonPressed(2);
            break;
        case 51:
            buttonPressed(3);
            break;
        case 52:
            buttonPressed(4);
            break;
        case 53:
            buttonPressed(5);
            break;
        case 54:
            buttonPressed(6);
            break;
        case 55:
            buttonPressed(7);
            break;
        case 56:
            buttonPressed(8);
            break;
        case 57:
            buttonPressed(9);
            break;
        case 61:
        case 13:
            executeOperation();
            break;
        default:
            break;
    }
})