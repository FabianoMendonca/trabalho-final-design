import { selectEx } from "./scripts/utils.js";
import { Exercicio01 } from "./scripts/script_01.js";
import { Exercicio02 } from "./scripts/script_02.js";




let linkEx01 = document.querySelector("#link-Ex01")
let linkEx02 = document.querySelector("#link-Ex02")
let linkEx03 = document.querySelector("#link-Ex03")
let linkEx04 = document.querySelector("#link-Ex04")


linkEx01.addEventListener('click',  ()=>{ selectEx(1) });

linkEx01.addEventListener('click',  ()=>{
    Exercicio01();
});

linkEx02.addEventListener('click', ()=>{selectEx(2)});
    
linkEx02.addEventListener('click', () =>{
    Exercicio02();
    let butn = document.querySelector('#attButtonReq01')
    butn.addEventListener('click', ()=>{Exercicio02()})
});



    
linkEx03.addEventListener('click', ()=>{selectEx(3)})
linkEx04.addEventListener('click', ()=>{selectEx(4)})