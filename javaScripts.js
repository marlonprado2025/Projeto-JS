
/*PRIMEIRO MAPEO OQUE QUERO CHAMAR, NO CASO O BOTAO PRA DIZER OQ QUERO DELE */
const convertButton = document.querySelector(".convert-button")

const moedaDoselect = document.querySelector(".moeda-select")

function converterValores(){

    const inputValores = document.querySelector(".input-valores").value  //valor do inpunt
    const valorEmReal = document.querySelector(".valor-da-moeda-convertida") //valor em real que qro converter
    const valorConvertido = document.querySelector(".valor-da-moeda") //valor das outras moedas

    console.log(moedaDoselect.value)

    const dolarDay = 5.75 
    const euroDay  = 6.04
    const dolarConvertido = inputValores/dolarDay

if (moedaDoselect.value == "dolar"){
    valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputValores / dolarDay)
}    //SE O SELECT TIVER SELECIONADO o valor de Dolar


if (moedaDoselect.value == "euro"){
    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputValores / euroDay)
}     //SE O SELECT TIVER SELECIONADO o valor de Euro



//agora para trocar texto do valor em real para outras moedas, New Intl é pra formatar e simplificar os valores
    valorEmReal.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputValores)

}



function mudarMoeda(){
    const nomeDaMoeda = document.getElementById("nome-da-moeda")
    const imgMoeda = document.querySelector(".img-EUA")


if(moedaDoselect.value == "dolar"){
    nomeDaMoeda.innerHTML = "Dólar Americano"
    imgMoeda.src = "./assets/EUA.png"
}

if(moedaDoselect.value == "euro"){
    nomeDaMoeda.innerHTML = "Euro"
    imgMoeda.src = "./assets/EUR.png"
}
converterValores()
}
/*DOU UMA FUNÇAO E DEPOIS ADICIONO UM OUVINTE DE EVENTOS*/
moedaDoselect.addEventListener("change", mudarMoeda )
convertButton.addEventListener("click", converterValores)

