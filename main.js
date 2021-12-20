ids = 0
somadosvalores = 0



var dadosdosprodutos = 
['613|Papel Toalha Essencial|10.50', '828|Papel Aluminio|4.50', 'c64|Arames - Amarrilho|29.00', '947|Caixa de Pizza n30|41.00', '172|Caixa de Pizza n35|42.00', '585|Filme PVC 38*600mt|66.00', '735|Filme PVC 100m|12.50', '660|Filme PVC 300m|29.90', '422|Etiqueta de Preço 1uni|1.80', 'd08|Etiqueta de Preço 10uni|16.50', '88b|Etiqueta de Preço 5uni|8.50', '507|Etiqueta de Peso 5uni|27.50', '024|Etiqueta de Peso 1uni|6.00', '475|Guardanapos Solis|0.85', '44e|Guardanapos Reserva|0.90', '221|Papel PVC 30*600mt|53.00', '094|Marmitex T090 - 10uni|3.50', '196|Marmitex TP30 - 10uni|5.99', '399|Prato fundo 23cm - 10uni|4.80', '615|Prato fundo 15cm|1.80', '156|Prato fundo 12cm |1.45', '084|Prato raso 15cm|1.65', '490|Prato raso 17,5cm|1.80', '121|Prato raso 21cm|2.55', '249|Prato raso 23cm|4.20', '35a|Colher Sobremesa Cristal|265.00', '7d0|Colher Sobremesa Branca|2.35', 'cb3|Colher Refeição Cristal|3.15', '8f7|Parzinha de Sorvete|4.25', 'f71|Faca Refeição Branca|3.15', '2ff|Faca Refeição Cristal|2.30', 'bba|Garfo Refeição Branco|2.50', 'd46|Garfo Refeição Cristal|2.90', 'ad3|Sacolas Recicladas 50*60 G  - 1kg|14.40', '9ce|Sacolas Recicladas 40*50 M - 1kg|14.40', '58a|Sacolas Recicladas 30*45 P - 1kg|14.40', '0dd|Sacos de Papel Branco 100uni - 2kg|6.70', "d6c|Sacos de Pipoca '1' 100uni |6.90", 'da5|Sacos de Papel Branco - 1kg|5.99', '8e3|Sacos de Papel - 1kg|5.00', '2bc|Sacos de Papel -2kg|7.30', 'a83|Sacos de Papel - 5kg|12.50', 'd1d|Sacos de Papel - 7,5kg|14.00', '77e|Sacos de Lixo 70*80|20.00', 'be3|Sacos de Lixo 82*92|15.00', 'f91|Sacola Boca Reta 30*45 Vermelha - 25uni |15.00', 'ef9|Sacola Boca Reta 25*35 Azul- 25uni|7.50', 'bc9|Sacola Boca Reta 20*30 M - 25uni|5.00', '93d|Sacola Boca Reta 16*20 P -25uni|3.25', '50d|Sacolas Volte Sempre P 29*44 - 100uni|5.60', 'e0e|Sacolas Brancas G 50*60|8.90', '174|Sacolas Recicladas P 30*45 - 25uni|2.05', '4d0|Sacolas Volte Sempre M 38*48|8.00', '5d8|Sacolas Brancas M 38*48|5.35', '79f|Sacolas Verdes M 38*48|6.85', '1e8|Sacolas Verdes 30*45 P|4.50', '9fc|Sacolas Brancas P 29*44|3.70']

var codigos = 
['613', '828', 'c64', '947', '172', '585', '735', '660', '422', 'd08', '88b', '507', '024', '475', '44e', '221', '094', '196', '399', '615', '156', '084', '490', '121', '249', '35a', '7d0', 'cb3', '8f7', 'f71', '2ff', 'bba', 'd46', 'ad3', '9ce', '58a', '0dd', 'd6c', 'da5', '8e3', '2bc', 'a83', 'd1d', '77e', 'be3', 'f91', 'ef9', 'bc9', '93d', '50d', 'e0e', '174', '4d0', '5d8', '79f', '1e8', '9fc']


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
        p.innerText = "==="
        li.append(p)

        p = document.createElement('p')
        p.setAttribute('id','p_'+ids+'')
        p.setAttribute('class','listadeprodutos_li-p')
        p.innerText = "==="
        li.append(p)

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

function addproduto(produto){
    codigodoproduto =document.getElementById(produto).value
    
    informacoesdoproduto = procurarproduto(codigodoproduto)

    arrayinfodoproduto = informacoesdoproduto.split('|')

    console.log(arrayinfodoproduto)

    nomedoproduto = arrayinfodoproduto[1]
    valor = parseFloat(arrayinfodoproduto[2]).toFixed(2)
    quantidade = parseInt(document.getElementById("inputquantidadepelocodigo").value)

    valor = parseFloat(valor*quantidade).toFixed(2)
    
    if(valor!="NaN" & valor>0){
        ul = document.getElementById('listadeprodutos')
        li = document.createElement('li')
        li.setAttribute('id','li_'+ids+'')
        li.setAttribute('class','listadeprodutos-li')
        ul.append(li)

        p = document.createElement('p')
        p.setAttribute('id','p_nome'+ids+'')
        p.setAttribute('class','listadeprodutos_li-p')
        p.innerText = nomedoproduto
        li.append(p)

        p = document.createElement('p')
        p.setAttribute('id','p_quantidade'+ids+'')
        p.setAttribute('class','listadeprodutos_li-p')
        p.innerText = quantidade
        li.append(p)

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
        document.getElementById('inputcodigo').value=''
        document.getElementById('inputquantidadepelocodigo').value='1'
    }
    
}


// ´-----------



function addcodigo(){
    code = Math.random().toString(16).substr(2, 3)
    const procurar = codigos.find(element => element == code);
    if (procurar == undefined){
        document.getElementById('inputcodigo').value = code
    }else{
        addcodigo()
    }
}

function addnoestoque(produto,codigo,preco){

    const procurar = codigos.find(element => element == code);

    nomedoproduto = document.getElementById(produto).value
    codigodoproduto = document.getElementById(codigo).value
    precodoproduto = parseFloat(document.getElementById(preco).value).toFixed(2)

    dadoscompletos = codigodoproduto + "|" + nomedoproduto+'|'+precodoproduto

    dadosdosprodutos.push(dadoscompletos)
    codigos.push(codigodoproduto)

    console.log(dadosdosprodutos)
    console.log(codigos)
    
    document.getElementById(produto).value = ''
    document.getElementById(codigo).value = ''
    document.getElementById(preco).value = ''
    atualizarlistadoestoque()
}

function procurarproduto(codigo){
    
    posicaonoarray = codigos.indexOf(codigo)
    // const posicaonoarray = codigos.find(element => element === codigo);
    
    dados = dadosdosprodutos[posicaonoarray]
    return dados

}

function atualizarlistadoestoque(){
    id_quantidadedeprodutos = 0
    ul = document.getElementById('listadeprodutos').innerHTML = ''
    interacao = dadosdosprodutos.length
    console.log(interacao)
    for(interacao<=0; interacao--;){

        ul = document.getElementById('listadeprodutos')
        li = document.createElement('li')
        li.setAttribute('id','li_'+id_quantidadedeprodutos +'')
        li.setAttribute('class','listadeprodutos-li')
        ul.append(li)

        p = document.createElement('p')
        p.setAttribute('id','p_'+id_quantidadedeprodutos +'')
        p.setAttribute('class','listadeprodutos_li-p')
        p.innerText = dadosdosprodutos[interacao]
        li.append(p)

        button = document.createElement('input')
        button.setAttribute('type','button')
        button.setAttribute('value','x')
        button.setAttribute("onclick","apagarprodutodoestoque('li_"+ids+"')")
        li.append(button)
        id_quantidadedeprodutos = id_quantidadedeprodutos +1
    }
}   

function apagarprodutodoestoque(id){
    id_element = document.getElementById(id)
    id_element.remove()
}

// ---------------
function copiardados(){
    navigator.clipboard.writeText('var dadosdosprodutos = ['+dadosdosprodutos+']')
}

function copiarcodigos(){
    navigator.clipboard.writeText('var codigos = ['+codigos+']')
}