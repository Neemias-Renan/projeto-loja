ids = 0
somadosvalores = 0

function atualizarvalor(){
    document.getElementById('somatotal').innerHTML = somadosvalores
    calculartroco()
}

function addvalor(valor){
    valor = parseFloat(document.getElementById(valor).value).toFixed(2)
    quantidade = parseInt(document.getElementById("inputquantidade").value)

    valor = parseFloat(valor*quantidade).toFixed(2)
    
   
    if(valor!="NaN" & valor>0){
        ul = document.getElementById('listadeprodutos')
        li = document.createElement('li')
        li.setAttribute('id','li_'+ids+'')
        li.setAttribute('class','listadeprodutos-li')
        ul.append(li)

        p = document.createElement('p')
        p.setAttribute('id','p_'+ids+'')
        p.setAttribute('class','listadeprodutos_li-p')
        p.innerText = "R$"+valor
        li.append(p)

        button = document.createElement('input')
        button.setAttribute('type','button')
        button.setAttribute('value','x')
        button.setAttribute("onclick","apagarvalor('li_"+ids+"','p_"+ids+"')")
        li.append(button)

        somadosvalores = (parseFloat(somadosvalores)+parseFloat(valor)).toFixed(2)
        ids = ids+1
        atualizarvalor()
        document.getElementById('inputvalor').value=''
        document.getElementById('inputquantidade').value='1'
    }
}

function apagarvalor(id,valor){
     id_element = document.getElementById(id)
    quantidadedevalor = document.getElementById(valor).innerHTML
    quantidadedevalor = quantidadedevalor.substr(1)
    quantidadedevalor = quantidadedevalor.substr(1)
    somadosvalores = (somadosvalores-parseFloat(quantidadedevalor)).toFixed(2)
  
    id_element.remove()
    atualizarvalor()
}

function calculartroco(){
    troco = document.getElementById('inputtroco').value
    if(parseFloat(troco) >= 0.00){
        quantidadedevolver = parseFloat(troco-somadosvalores).toFixed(2)
        if(quantidadedevolver<0){
            document.getElementById('acaoasertomada').innerHTML = "Falta "
            document.getElementById('quantidadedetroco').innerHTML = quantidadedevolver.substr(1)

        }
        else if(quantidadedevolver==0){
            document.getElementById('acaoasertomada').innerHTML = "Valor Exato "
            document.getElementById('quantidadedetroco').innerHTML = "00,00"
        }
        else{
            document.getElementById('acaoasertomada').innerHTML = "Devolva "
            document.getElementById('quantidadedetroco').innerHTML = quantidadedevolver
        }

        // document.getElementById('quantidadedetroco').innerHTML = quantidadedevolver
    }
    else{
        document.getElementById('acaoasertomada').innerHTML = ""
        document.getElementById('quantidadedetroco').innerHTML = "00,00"
    }
    

}

function limparlistadecompras(){
    document.getElementById("listadeprodutos").innerHTML = ""
    document.getElementById('inputtroco').value=""
    somadosvalores = 0
    atualizarvalor()
    calculartroco()

}

function atualizarquantidadepadrao(){
    quant = document.getElementById('inputquantidade').value
    if(quant <= 0){
    document.getElementById('inputquantidade').value = "1"
    }
}

var produtos = []
var codigos = []
function addcodigo(nome){
    code = Math.random().toString(16).substr(2, 3)
    const procurar = codigos.find(element => element == code);
    
    document.getElementById('inputcodigo').value = code

    codigos.push(code)


    console.log(code, procurar)
}

function procurar(){
    
}

// produto = document.getElementById(nome).value
// produtos.push(produto)
// console.log(produtos)