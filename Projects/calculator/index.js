const display=document.getElementById("display");

function appendToDisplay(input){
    display.value+=input;
}
function clearDisplay(){
    display.value='';
}
function calc(){
    try{
    if(eval(display.value)==NaN || eval(display.value)==Infinity){
        throw error;
    }
    display.value=eval(display.value);
    }catch(error ){
        display.value='ERROR';
        setTimeout(clearDisplay,1000);
    }
}