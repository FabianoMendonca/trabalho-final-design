import { Exercicio01 } from "./scripts/script_01.js"



function selectEx (number){

    let main01 = document.querySelector("#mainEx-01")
    let main02 = document.querySelector("#mainEx-02")
    let main03 = document.querySelector("#mainEx-03")
    let main04 = document.querySelector("#mainEx-04")

    if(number == 1){
        main01.style.display = 'block';
        main02.style.display = 'none';
        main03.style.display = 'none';
        main04.style.display = 'none';
    }
    if(number == 2){
        main01.style.display = 'none';
        main02.style.display = 'block';
        main03.style.display = 'none';
        main04.style.display = 'none';
    }
    if(number == 3){
        main01.style.display = 'none';
        main02.style.display = 'none';
        main03.style.display = 'block';
        main04.style.display = 'none';
    }
    if(number == 4){
        main01.style.display = 'none';
        main02.style.display = 'none';
        main03.style.display = 'none';
        main04.style.display = 'block';
    }

}

let linkEx01 = document.querySelector("#link-Ex01")
let linkEx02 = document.querySelector("#link-Ex02")
let linkEx03 = document.querySelector("#link-Ex03")
let linkEx04 = document.querySelector("#link-Ex04")


// let select = document.querySelector("#selectCountrys")

linkEx01.addEventListener('click',  ()=>{
    selectEx(1);
    Exercicio01();
})
    




    
    linkEx02.addEventListener('click', ()=>{selectEx(2)})
    linkEx03.addEventListener('click', ()=>{selectEx(3)})
    linkEx04.addEventListener('click', ()=>{selectEx(4)})
    // console.log(countryList)