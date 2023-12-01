export async function Exercicio04(){
    let promisseAnyButton = document.querySelector('#promissesAnyButton');
    let promisseRaceButton = document.querySelector('#promissesRaceButton');
    let promisseAllButton = document.querySelector('#promissesAllButton');
    
    promisseAnyButton.addEventListener('click', ()=>{

        try {
          document.querySelector("#promissesAny").innerHTML = ''  
         Promise.any([promisseUm(),promisseDois(),promisseTres()]).then((values)=>{
            console.log(values)
            document.querySelector("#promissesAny").innerHTML += `Resultado da promisse: ${values.status}<br> ${values.url}`
         })    
        } catch (error) {
            
        }

    });

    promisseRaceButton.addEventListener('click', ()=>{
        try {
            document.querySelector("#promissesRace").innerHTML = ''  
           Promise.race([promisseUm(),promisseDois(),promisseTres()]).then((values)=>{
              console.log(values)
              document.querySelector("#promissesRace").innerHTML += `Resultado da Race: ${values.url} <br>`
           })    
          } catch (error) {
              
          }
    });

    promisseAllButton.addEventListener('click', ()=>{
        try {
            document.querySelector("#promissesAll").innerHTML = ''  
           Promise.all([promisseUm(),promisseDois(),promisseTres()]).then((values)=>{
              values.forEach((value)=>{
                  document.querySelector("#promissesAll").innerHTML += `Resultado da ALL:${value.url}<br>Status:${value.status} <br>`
              })
           })    
          } catch (error) {
              
          }
    });
}

function promisseUm(){
 try {
    return (fetch('https://api.spaceflightnewsapi.net/v4/info/'))
 } catch (error) {
    console.log(error)
    return error
    }
}
function promisseDois(){
 try {
    return (fetch('https://api.quotable.io/random'))
 } catch (error) {
    console.log(error)
    return error
    }
}
function promisseTres(){
   try {
    return (fetch('https://strangerthings-quotes.vercel.app/api/quotes'))
   } catch (error) {
    console.log(error)
    return error
   }  
}