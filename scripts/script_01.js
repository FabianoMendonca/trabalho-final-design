

async function fetchCountrys(){
    try {
        let req = await fetch("../json/paises-gentilicos-google-maps.json");
        let countryList = req.json()
        return countryList
    } catch (error) {
        return error
    }
}

export async function Exercicio01(){

    let countryList = await fetchCountrys();
    let select = document.querySelector("#selectCountrys")
    
    countryList.forEach(element => {
        // console.log(element)
        select.innerHTML += `<option>${element.nome_pais}</option>`
    });
    select.addEventListener('change', ()=>{
        let select_country = select.children[select.selectedIndex].value
        let selectField = document.querySelector('#selectField');
        
        countryList.forEach((element)=>{
            if(element.nome_pais == select_country){
                console.log(element)
                selectField.innerHTML = 
                `
                Nome Internacional: ${element.nome_pais_int} <br>
                Nome do pais: ${element.nome_pais}<br>
                Gentilico: ${element.gentilico}<br>
                Sigla: ${element.sigla}<br>
                `
            } 
        })
    })
}
// console.log(countrys)