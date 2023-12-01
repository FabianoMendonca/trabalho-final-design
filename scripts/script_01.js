

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
    
    //map
    countryList.map(country => select.innerHTML += `<option>${country.nome_pais}</option>`)
    select.addEventListener('change', ()=>{
        let select_country = select.children[select.selectedIndex].value
        let selectField = document.querySelector('#selectField');

        //filter
        let country =  countryList.filter((country) => (country.nome_pais == select_country));

        selectField.innerHTML = 
                `
                <div class="card" style='margin-top:10px'>
                <div class="card-header">
                  Informações sobre o Pais
                </div>
                <div class="card-body">
                  <h5 class="card-title">${country[0].nome_pais}</h5>
                  <p class="card-text">
                  Nome Internacional: ${country[0].nome_pais_int} <br>
                  Gentilico: ${country[0].gentilico}<br>
                  Sigla: ${country[0].sigla}<br>
                  </p>
                </div>
              </div>
                `
    });
}
// Nome Internacional: ${element.nome_pais_int} <br>
// Nome do pais: ${element.nome_pais}<br>
// Gentilico: ${element.gentilico}<br>
// Sigla: ${element.sigla}<br>

// console.log(countrys)