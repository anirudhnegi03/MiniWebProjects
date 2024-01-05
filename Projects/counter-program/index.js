let count=document.getElementById("cnt").textContent;
Number(count);
document.getElementById("dec").onclick=function(){
    count--;
    document.getElementById("cnt").textContent=count;
}

document.getElementById("res").onclick=function(){ 
    document.getElementById("cnt").textContent=0;
    count=0;
}

document.getElementById("inc").onclick=function(){
    count++;
    document.getElementById("cnt").textContent=count;
}
