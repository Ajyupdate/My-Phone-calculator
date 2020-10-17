var btn1 = document.getElementById('btn-1');
var btn2 = document.getElementById('btn-2');
var btn3 = document.getElementById('btn-3');
var btn4 = document.getElementById('btn-4');
var btn5 = document.getElementById('btn-5');
var btn6 = document.getElementById('btn-6');
var btn7 = document.getElementById('btn-7');
var btn8 = document.getElementById('btn-8');
var btn9 = document.getElementById('btn-9');

var delbtn = document.getElementById('btn-del');
var btndecimalpoint = document.getElementById('btn-decimal-point');
var displayCol = document.getElementById('display-col');

var valuedisplay = "0"
var pendingvalue = ""
var arrayEvaluation = []

var inputBtn = document.getElementsByClassName('col-num')
var inputOperator = document.getElementsByClassName('col-operator')

function updateVAluesDisplay(clickobj){
    var textbtn = clickobj.target.innerText;

    if(valuedisplay === 0);
    valuedisplay == '';
    
    valuedisplay +=textbtn;
    displayCol.innerHTML = valuedisplay;
}
function evaluateOperation(clickobj){
    var operator = clickobj.target.innerText;

    switch(operator){
        case '+':
            pendingvalue = valuedisplay;
            valuedisplay = '0'
            displayCol.innerText = valuedisplay;
            arrayEvaluation.push(pendingvalue);
            arrayEvaluation.push('+');
        break;    
        case '-':
            pendingvalue = valuedisplay;
            valuedisplay = '0'
            displayCol.innerText = valuedisplay;
            arrayEvaluation.push(pendingvalue);
            arrayEvaluation.push('-');
        break;    
        case 'x':
            pendingvalue = valuedisplay;
            valuedisplay = '0'
            displayCol.innerText = valuedisplay;
            arrayEvaluation.push(pendingvalue);
            arrayEvaluation.push('*');
        break;    

        case '/':
            pendingvalue = valuedisplay;
            valuedisplay = '0'
            displayCol.innerText = valuedisplay;
            arrayEvaluation.push(pendingvalue);
            arrayEvaluation.push('/');
        break;    

        case '=':
                   arrayEvaluation.push(valuedisplay);
                   var evaluation = eval(arrayEvaluation.join(''));
                   valuedisplay = evaluation + '';
                   displayCol.innerText = valuedisplay;
                   arrayEvaluation = [];
        break;
        
        
    }
    
}

for(let i = 0; i<inputBtn.length; i++){
    inputBtn[i].addEventListener('click', updateVAluesDisplay, false)
}
for(let i = 0; i<inputOperator.length; i++){
    inputOperator[i].addEventListener('click', evaluateOperation, false)
}
function del(){
    let displayLengthValue = valuedisplay.length;
    valuedisplay = valuedisplay.slice(0, displayLengthValue -  1)

    displayCol.innerText = valuedisplay;
}
function decimalpoint(){
    if(!valuedisplay.includes('.'))
    valuedisplay += '.';
    displayCol.innerText = valuedisplay;
}