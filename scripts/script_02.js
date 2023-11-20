export async function Exercicio02(){
    let p = document.querySelector('#consulta-taxas-p')
    let taxas = await getTaxas();
    // console.log(taxas)
    let [selic, cdi, ipca] = taxas;
    p.innerHTML = `
        ${selic.nome} : ${selic.valor} <br>
        ${cdi.nome} : ${cdi.valor} <br>
        ${ipca.nome} : ${ipca.valor} <br>
    `
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
