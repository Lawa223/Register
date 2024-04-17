const btn = document.querySelector(".btn");
const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")



 btn.addEventListener("click",function (){

    const name = document.querySelector(".input1"). value;
    const year = Number(document.querySelector(".input2").value);
    const age = 2024 - year
    
    if(age >= 18){
        alert(`${name} is eligible to vote`)
    }else{
        alert(`${name} is not eligible to vote`)
    }
 })