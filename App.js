//   calculator
var display = document.getElementById("display"); 

function getbtnValue(a){
    display.value += a;
}
function calculate(){
    display.value = eval(display.value);  
}
function allclear(){
    display.value = "";
}