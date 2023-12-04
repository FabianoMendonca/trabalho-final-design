## Trabalho: Consumindo APIs e Json com JavaScript

 <p>Em uma mesma página HTML (com CSS e JS) mostre os seguintes exercícios. Separe os
exercícios em seções bem distintas.<p>

<p style=' background: rgba(0, 0, 0, 0.2);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(1.7px);
            -webkit-backdrop-filter: blur(1.7px);
            border: 1px solid rgba(0, 0, 0, 0.3);
            padding:16px;
            margin: 6px 0;
            '>
    1- Deixe o arquivo países.json disponível no seu github. Acesse este arquivo Json via o comando
    fetch e gere um campo do tipo select com os nomes de todos países. Quando o usuário escolher um
    país mostre todos dados disponíveis deste país.<br>
<sub>Sobre o arquivo: JSON com lista de Países em pt-BR e seus respectivos Gentílicos, Siglas e Nome Internacional - Possui todos os países do Google Maps. Obtido em: <a href='https://gist.github.com/jonasruth/61bde1fcf0893bd35eea'>github.com/</a></sub>
</p>

<div style=' background: rgba(0, 0, 0, 0.2);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(1.7px);
            -webkit-backdrop-filter: blur(1.7px);
            border: 1px solid rgba(0, 0, 0, 0.3);
            padding:16px;
            margin: 6px 0;
            '>
<p>
2- Faça uma página de utilidade pública baseada em consultas ao  <a href='https://brasilapi.com.br/'>BRASIL API</a>. Em
todos casos (Nos 6 casos) utilize o comando fetch e proteja as chamadas com try/catch ou
then/catch.</p>
    <ul>
        <li>Faça 3 consultas via programação e mostre os resultados na tela</li>
        <li>Faça 3 perguntas para o usuário via formulário. Para cada consulta mostre os resultados.</li>
        <li>Coloque para cada caso uma explicação para o usuário saber o que ele está vendo ou escolhendo</li>
    </ul>
</div>



<div style=' background: rgba(0, 0, 0, 0.2);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(1.7px);
            -webkit-backdrop-filter: blur(1.7px);
            border: 1px solid rgba(0, 0, 0, 0.3);
            padding:16px;
            margin: 6px 0;
            '>
<p>
3- Faça uma página de utilidade pública baseada em consultas ao [IPEADATA](http://www.ipeadata.gov.br/api/) .
Em todos casos utilize o comando fetch e proteja as chamadas com try/catch ou then/catch.
</p>
    <ul>
        <li>Peça para o usuário escolher entre pelo menos 3 tipos de metadados. Para cada tipo de dado
    gere a correspondente tabela. Coloque a explicação completa dos dados e das colunas que
    serão mostradas (Estas informações estão no correspondente metadado e nos nomes das
    colunas)</li>
        <li>Dois alunos não podem utilizar os mesmos tipos de dados </li>
    </ul>
    <ul>Exemplos de URL:
        <li><a href="http://www.ipeadata.gov.br/api/odata4/Metadados/">http://www.ipeadata.gov.br/api/odata4/Metadados/</a></li>
        <li><a href="http://www.ipeadata.gov.br/api/odata4/Metadados('ABATE_ABPEAV')" >http://www.ipeadata.gov.br/api/odata4/Metadados('ABATE_ABPEAV')</a></li>
        <li><a href="http://www.ipeadata.gov.br/api/odata4/Metadados('ABATE_ABPEAV')/Valores/">(http://www.ipeadata.gov.br/api/odata4/Metadados('ABATE_ABPEAV')/Valores/)</a></li>
    </ul>
<!--     <span>Resposta: </span> -->
</div>

<div style=' background: rgba(0, 0, 0, 0.2);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(1.7px);
            -webkit-backdrop-filter: blur(1.7px);
            border: 1px solid rgba(0, 0, 0, 0.3);
            padding:16px;
            margin: 6px 0;
            margin-bottom: 30px;
            '>
<p>4- Desenvolva os códigos citados abaixo. Em todos casos proteja as chamadas com try/catch ou
then/catch.</p>
    <ul>
        <li style='margin: 6px'>Faça um botão que ao ser clicado acesse 3 APIs externas utilizando o comando <span style='background: #FF01013D; padding:3px;'> Promisse.any</span>. Mostrar o retorno da primeira promessa resolvida (o json) ou rejeitada.
        </li>
        <li style='margin: 6px'>Faça um botão que ao ser clicado acesse 3 APIs externas utilizando o comando  <span style='background: #FF01013D; padding:3px;'> Promisse.race</span>. Mostrar o retorno da primeira promessa resolvida (o json) ou rejeitada.</li>
        <li style='margin: 6px'>Faça um botão que ao ser clicado acesse 3 APIs externas utilizando o comando  <span style='background: #FF01013D; padding:3px;'>Promisse.all</span>. Acessar o retorno de Promisse.all e mostrar os dados das 3 apis (não o json). Mostrar o retorno de todas as promessas ou a mensagem de erro da última promessa rejeitada.</li>
    </ul>
</div>


#### Em algum ponto da página (Pode ser em qualquer exercício anterior ou se for necessário pode ser criado um exercício novo):

* Utilize uma atribuição do tipo destructuring.
* Utilize o map em um objeto/array vindo de um fetch e mostre o resultado na tela
* Utilize o filter em um objeto/array vindo de um fetch e mostre o resultado na tela
* Utilize o reduce em um objeto/array vindo de um fetch e mostre o resultado na tela

#### Requisitos gerais:
* Coloque os códigos em uma página HTML responsiva
* As páginas devem passar pelo [validador da w3c](https://validator.w3.org/) sem erros .
* As páginas não devem apresentar erros pegos pelo console do JavaScript(JS) dos
navegadores.
* Evite ou trate os erros das chamadas via fetch. Verifique e trate as situações em que as
chamadas podem retornar erro. Também procure evitar demais erros que possam ser
cometidos pelos usuários.
* Disponibilizar o sistema no Github

#### *Mais APIs:*
* [Esta API mostra dados de preços de carros vendidos no Brasil.](https://deividfortuna.github.io/fipe/)
* [API com dados Fake para testes.](https://jsonplaceholder.typicode.com/guide/)
* Em  tem uma documentação para uma api que conforme o endereço ela retorna a correspondente informação sobre o [universo Star Wars](https://swapi.dev/documentation)

 <sub>(...é só procurar que tem api de tudo por ai….coloque no google “API Marvel” e veja o que acha…).</sub> 

#### *Aqui vai uma lista de APIs interessantes:*

* [https://devporai.com.br/9-apis-para-seu-novo-projeto/](https://devporai.com.br/9-apis-para-seu-novo-projeto/)

* [Lista de APIs](https://github.com/public-apis/public-apis).


<div style='background: rgba(170, 153, 153, 0.71);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(6.2px);
            -webkit-backdrop-filter: blur(6.2px);
            border: 1px solid rgba(170, 153, 153, 0.5);
            margin: 8px;
            padding:8px;
            color:rgb(0,0,0);
'>
<span>O trabalho deve ser entregue até <strong>30/11/2023</strong>. Para tanto deve-se informar no SIGAA o endereço da hospedagem e do repositório das páginas no Github.</span>

<span>No dia <strong>01/12/2023</strong> o trabalho será apresentado em aula.</span>
</div>

[Github pages](https://fabianomendonca.github.io/trabalho-final-design/#)
