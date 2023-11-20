export function selectEx (number){

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