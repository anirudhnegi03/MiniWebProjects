const toFar=document.getElementById("toFar");
const toCel=document.getElementById("toCel");
let ans=document.getElementById("answer");
let valEle=document.getElementById("userVal");


function convert(){
    let val=parseFloat(valEle.value);
    if(toFar.checked){
        let temp = val*(9/5) + 32;
        if(temp==0.00){
            temp=Math.abs(temp);
        }
        ans.textContent=temp.toFixed(2)+"° Fahrenheit";
    }else if(toCel.checked){
        let temp = (val - 32)*(5/9);
        if(temp==0.00){
            temp=Math.abs(temp);
        }
        ans.textContent=temp.toFixed(2)+"° Celsius";
    }else{
        ans.textContent="Please select an option!";
    }
}