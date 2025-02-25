
/*PRIMEIRO MAPEO OQUE QUERO CHAMAR, NO CASO O BOTAO PRA DIZER OQ QUERO DELE */
const convertButton = document.querySelector(".convert-button")

function converterValores(){

    const inputValores = document.querySelector(".input-valores").value  //valor do inpunt

    const valorEmReal = document.querySelector(".valor-da-moeda-convertida") //valor em real que qro converter
    const valorConvertido = document.querySelector(".valor-da-moeda") //valor das outras moedas


    const dolarDay = 5.77  
    const dolarConvertido = inputValores/dolarDay

//agora para trocar texto do valor em real para outras moedas
    valorEmReal.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputValores)

    valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(dolarConvertido)


console.log(dolarConvertido)

}
/*DOU UMA FUNÇAO E DEPOIS ADICIONO UM OUVINTE DE EVENTOS*/

convertButton.addEventListener("click", converterValores)

