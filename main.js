ids = 0
somadosvalores = 0

function atualizarvalor(){
    document.getElementById('somatotal').innerHTML = somadosvalores
    calculartroco()
}

function addvalor(valor){
    valor = parseFloat(document.getElementById(valor).value).toFixed(2)
    
    if(valor!="NaN"){
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
    }
}

function apagarvalor(id,valor){
    id_element = document.getElementById(id)
    quantidadedevalor = document.getElementById(valor).innerHTML
    
    somadosvalores = (parseFloat(somadosvalores)-parseFloat(quantidadedevalor)).toFixed(2)

    id_element.remove()
    atualizarvalor()
}

function calculartroco(){
    troco = document.getElementById('inputtroco').value
    if(parseFloat(troco) >= 0.00){
        quantidadedevolver = parseFloat(troco-somadosvalores).toFixed(2)
        document.getElementById('quantidadedetroco').innerHTML = quantidadedevolver
    }
    

}