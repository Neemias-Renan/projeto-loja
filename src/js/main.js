// Botão limpar
var valorfinal = 0.00

function limpar(){
    let lista = document.getElementsByClassName('lista')
    let quantidade = (lista.length)-1


    for(let cont = quantidade; cont >= 0;){
        x = lista[cont]
        x.remove()
        cont--
    }
}

function remover(id){
    x = document.getElementById(id)
    x.remove()
}

function confirmar(valor,quantidade){
    valordoProduto = parseFloat(valor.value).toFixed(2)
    quantidadedoProduto = parseFloat(quantidade.value).toFixed(2)

    criarNovaTR()

    console.log(valordoProduto)
    console.log(quantidadedoProduto)
}


function criarNovaTR(){
    let lista = document.getElementsByClassName('lista')
    let quantidade = lista.length

    tbody = document.getElementsByTagName('tbody')

    tr = document.createElement('tr')
    tbody.appendChild(tr)
}