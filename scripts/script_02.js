export async function Exercicio02(){
    consulta1();
    consulta2();
    consulta3();
    consulta4();
    consulta5();
    consulta6();
}

async function consulta1(){
    let p = document.querySelector('#consulta-taxas-p')
    let taxas = await getTaxas();

    //destructuring
    let [selic, cdi, ipca] = taxas;
    p.innerHTML = `
        ${selic.nome} : ${selic.valor} <br>
        ${cdi.nome} : ${cdi.valor} <br>
        ${ipca.nome} : ${ipca.valor} <br>
        `

}
async function consulta2(){
    let feriados = await getFeriados();
    let p = document.querySelector('#consultaFeriadosP');
    p.innerHTML = '<br>';
    feriados.forEach(element => {
        p.innerHTML += `<span class='d-flex '><h6>${element.name}</h6> : ${element.date}  [<span style='color:green'>${element.type}</span>]</span><br>`
    });
}

async function consulta3(){
    let previsao = await getClima();
    // console.log(previsao)
    let p = document.querySelector('#consultaClimaP');
    p.innerHTML = `<h6>${previsao.cidade}, ${previsao.estado}.</h6>`
    p.innerHTML += `<span>Atualizada em : ${previsao.atualizado_em}</span>`
    previsao.clima.forEach( element => {
        p.innerHTML += `<div class="border border-light rounded bg-secondary text-white" style="padding:8px; margin: 4px;">
            <h6>Dia : ${element.data}</h6>
            condição : ${element.condicao_desc}<br>
            indice UV: ${element.indice_uv}<br>
            minima : ${element.min}<br>
            </div>
            `
    })
}

function consulta4(){
    let buttonSearch = document.querySelector("#searchButtonC4");

    buttonSearch.addEventListener('click', async ()=>{
        let inputSearch = document.querySelector("#searchInputC4").value;
        let res = await getCEP(inputSearch);

        let p = document.querySelector('#consulta-04');
        // console.log(res)

        p.innerHTML = `
        <div class="border border-light rounded bg-secondary text-white" style="padding:8px; margin: 4px;">
            <h5>${res.city}</h5>
            <p>
            Rua: ${res.street}<br>
            Bairro: ${res.neighborhood}<br>
            <span>cep consultado: ${res.cep}</span>
            <p>
        </div>
        `

        return false;
    });
}
// cep: "96202650"
// city: "Rio Grande"
// neighborhood: "Nossa Senhora dos Navegantes"
// service: "correios"
// state: "RS"
// street: "Rua Américo Vespucio"
function consulta5(){
    
    let select = document.querySelector("#ufSelect")
    let selectUfButton = document.querySelector("#searchButtonC5")
    let p = document.querySelector("#consulta-05")

    selectUfButton.addEventListener('click', async ()=>{
        p.innerHTML = '';
        let selectedUF = select.children[select.selectedIndex].value
        // console.log(selectedUF)
        let muni = await getMuni(selectedUF);

        muni.map(element =>{
            p.innerHTML += `<span>Nome: <strong>${element.nome}</strong>; codigo IBGE:  <strong>${element.codigo_ibge}</strong><span> <br>`
        })


        return false;
    })

}

function consulta6 (){
    let buttonSearch = document.querySelector("#searchButtonEx02");
    
    buttonSearch.addEventListener('click', async ()=>{
        let inputSearch = document.querySelector("#searchInputEx02").value;
        let res = await getDomain(inputSearch);
        // console.log( res);
        if(res.status == "AVAILABLE"){
            let p = document.querySelector('#consultaDomainP');
            p.innerHTML = `
                <h6>Status : <span style='color:green'>${res.status}</span></h6>
                <span>Parabéns esse nome está disponivel</span>
                `
        }else if(res.status = "REGISTERED"){
            
            let p = document.querySelector('#consultaDomainP');
            p.innerHTML = `
                <h6>Status : <span style='color:red'>${res.status}</span></h6>
                fqdn : ${res.fqdn} <br>
                hosts : 
            `
            for (let i = 0; i < res.hosts.length ; i++){
                p.innerHTML += ` ${res.hosts[i]}; `
            }
            p.innerHTML +=`<br>`
        }
        return false;
    });
}

async function getTaxas (){
    try {
        let res = await fetch('https://brasilapi.com.br/api/taxas/v1');
        let taxas = res.json()
        return taxas;
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function getDomain (name) {
    try {
        let res = await fetch(`https://brasilapi.com.br/api/registrobr/v1/${name}`);
        return res.json();
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function getCEP(cep){
try {
    let res = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
    return res.json();
} catch (error) {
    console.log(error);
    return error;
}
}

async function getMuni(UF){
    try {
        let res = await fetch (`https://brasilapi.com.br/api/ibge/municipios/v1/${UF}?providers=dados-abertos-br,gov,wikipedia`)
        return res.json();
    } catch (error) {
        
    }
}

async function getFeriados(){
    try {
        let res = await fetch('https://brasilapi.com.br/api/feriados/v1/2023');
        let feriados = res.json();
        return feriados;
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function getClima(){
    const cidadeID = 4397;
    
    try {

        let res = await fetch (`https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cidadeID}/5`);
        let clima = res.json();
        return clima;
    } catch (error) {
        
    }
}