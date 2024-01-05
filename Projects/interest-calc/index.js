function calc(){
    const totalAmt=document.getElementById("amt");
    const princ=document.getElementById("pInp");
    const int=document.getElementById("iInp");
    const years=document.getElementById("yInp");
    

    let p=Number(princ.value);
    let r=Number(int.value/100);
    let t=Number(years.value); 

    if(p<0 || isNaN(p)){
        p=0;
    }
    if(r<0 || r==isNaN(r)){
        r=0;
    }
    if(t<0 || t==isNaN(t)){
        t=0;
    }
    const res=p* Math.pow((1+r/1),1*t);
    totalAmt.textContent=res.toLocaleString('en-IN',{style:"currency",currency:"INR"});
   
}