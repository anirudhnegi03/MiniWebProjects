
function rollDice(){
    let arr=[];
    let images=[];
    const input=Number(document.getElementById("inp").value);
    let res=document.getElementById("diceResult");
    let rim=document.getElementById("diceImages");
    if(input==NaN){
        res.textContent="Enter valid numbers!";
    }
    for(let i=0;i<input;i++){
        let num=Math.floor(Math.random()*6)+1;
        arr.push(num);
        images.push(`<img src="./D-images/${num}.png">`);
    }
    
    res.textContent=`dice: ${arr.join(', ')}`;
   
    rim.innerHTML=images.join('  ');
    
}
