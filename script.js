let count=0;

const btn1=document.getElementById("e1");
const btn2=document.getElementById("e2");
const btn3=document.getElementById("e3");
const res=document.getElementById("out");




//for starting the count

let fun2=()=>{
    count=count+1;
    res.innerText=count;
}
let fun1=()=>{
    count=count-1;
    res.innerText=count;
}
let fun3=()=>{
    count=0;
    res.innerText=count;
}

btn1.addEventListener("click",fun1);
btn2.addEventListener("click",fun2);
btn3.addEventListener("click",fun3);