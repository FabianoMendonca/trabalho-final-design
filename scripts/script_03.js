export async function Exercicio03(){
    let res = await getSearch()
    document.querySelector('#cardHeader').innerHTML = `${res.FNTNOME}`
    document.querySelector('#cardHeaderTittle').innerHTML = `${res.SERNOME}`
    document.querySelector('#cardEx03P').innerHTML = `${res.SERCOMENTARIO}`


    let values = await getSearchValues();
    let select = document.querySelector('#selectDate');
    values.value.forEach(value => {
        // console.log(value)
        select.innerHTML += `<option>${value.VALDATA.substring(0,10)}</option>`
    });
    select.addEventListener('change', ()=>{
        document.querySelector('#responseDate').innerHTML = ''

        let selectedDate = select.children[select.selectedIndex].value
        let dateInfo =  values.value.filter((element) => (element.VALDATA.substring(0,10) == selectedDate));
        dateInfo = dateInfo[0]
        // console.log(dateInfo)

        document.querySelector('#responseDate').innerHTML += `<span>Valor Total da data<br><strong>${dateInfo.VALDATA.substring(0,10)}</strong> : R$${dateInfo.VALVALOR.toFixed(2)}.</span>`
    })
}



async function getSearch(){
   try {
        let res = await fetch(`http://www.ipeadata.gov.br/api/odata4/Metadados('BM12_TPFTN12')/`)
        let resJson = await res.json()
        resJson = resJson.value[0]
        // console.log(resJson)
        return resJson;
    } catch (error) {
        console.log(error)
   }
}
async function getSearchValues(){
    try {
        let res = await fetch(`http://www.ipeadata.gov.br/api/odata4/Metadados('BM12_TPFTN12')/Valores`)
        let resJson = await res.json()
        // console.log(resJson)
        return resJson
    } catch (error) {
        
    }
}