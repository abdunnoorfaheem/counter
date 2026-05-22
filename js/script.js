let plus=document.getElementById("plus");
let digit=document.getElementById("digit");
let minus=document.getElementById("minus");



let count=0;

plus.addEventListener("click",()=>{
    count++;
    digit.innerText=count;
})  
minus.addEventListener("click",()=>{
    if(count>0){
        count--;
        
    digit.innerText=count;
    }
   
})