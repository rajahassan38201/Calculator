let clr=document.querySelector("#clr");
let input=document.querySelector("input");
let mode=document.querySelector("#mode");
let cal=document.querySelector(".calculator");
// let btn=document.querySelectorAll(".btn");
let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let btn3=document.querySelector("#btn3");
let btn4=document.querySelector("#btn4");
let btn5=document.querySelector("#btn5");
let btn6=document.querySelector("#btn6");
let btn7=document.querySelector("#btn7");
let btn8=document.querySelector("#btn8");
let btn9=document.querySelector("#btn9");
let btn0=document.querySelector("#btn0");
let btnsum=document.querySelector("#btnsum");
let btnsub=document.querySelector("#btnsub");
let btnmul=document.querySelector("#btnmul");
let btndiv=document.querySelector("#btndiv");
let btnpt=document.querySelector("#btnpt");
let btneq=document.querySelector("#btneq");
let btnp=document.querySelector("#btnp");
let btns=document.querySelector("#btns");
let btnc=document.querySelector("#btnc");
let btnt=document.querySelector("#btnt");
let bk=document.querySelector("#bk");
clr.addEventListener("click",()=>{
    input.value="";

})
let curr_mode="dark";
mode.addEventListener("click",()=>{
    let element = document.body;

    if(curr_mode==="dark"){
        element.className = "light";
        curr_mode="light";
    }
    else if(curr_mode==="light"){
        element.className = "dark";
        curr_mode="dark";
    }
    
})

// btn.forEach((bt)=>{
//     bt.addEventListener("click",()=>{
//         input.value=input.value+bt.value;}
//     )
// })
btn1.addEventListener("click",()=>{
    input.value=input.value+btn1.value;
})
btn2.addEventListener("click",()=>{
    input.value=input.value+btn2.value;
})
btn3.addEventListener("click",()=>{
    input.value=input.value+btn3.value;
})
btn4.addEventListener("click",()=>{
    input.value=input.value+btn4.value;
})
btn5.addEventListener("click",()=>{
    input.value=input.value+btn5.value;
})
btn6.addEventListener("click",()=>{
    input.value=input.value+btn6.value;
})
btn7.addEventListener("click",()=>{
    input.value=input.value+btn7.value;
})
btn8.addEventListener("click",()=>{
    input.value=input.value+btn8.value;
})
btn9.addEventListener("click",()=>{
    input.value=input.value+btn9.value;
})
btn0.addEventListener("click",()=>{
    input.value=input.value+btn0.value;
})
btnsum.addEventListener("click",()=>{
    input.value=input.value+btnsum.value;
})
btnsub.addEventListener("click",()=>{
    input.value=input.value+btnsub.value;
})
btnmul.addEventListener("click",()=>{
    input.value=input.value+btnmul.value;
})
btndiv.addEventListener("click",()=>{
    input.value=input.value+btndiv.value;
})
btnpt.addEventListener("click",()=>{
    input.value=input.value+btnpt.value;
})
btnp.addEventListener("click",()=>{
    input.value=input.value+btnp.value;
})
btneq.addEventListener("click",()=>{
    input.value=eval(input.value);
})
btns.addEventListener("click",()=>{
    input.value=Math.sin(input.value * (Math.PI / 180));

})
btnc.addEventListener("click",()=>{
    input.value=Math.cos(input.value * (Math.PI / 180));
})
btnt.addEventListener("click",()=>{
    input.value=Math.tan(input.value * (Math.PI / 180));
})
bk.addEventListener("click",()=>{
    input.value=input.value.slice(0, -1)
})

