// Botão limpar
valorfinal = 0
ids = 0

function limpar(){
    let lista = document.getElementsByClassName('lista')
    let quantidade = (lista.length)-1


    for(let cont = quantidade; cont >= 0;){
        x = lista[cont]
        x.remove()
        cont--
    }
    document.getElementById('valordoproduto').value = ""
    document.getElementById('quantidadedoproduto').value = "1"
    document.getElementById('ValorFinal').innerHTML = "00.00"
    document.getElementById('inputValorPago').value = ""
    document.getElementById('espacoDois_h2').innerText = "Devolva R$"
    document.getElementById('valorTroco').innerHTML = "00.00"
    valorfinal = 0
}

function remover(id){
    tr = document.getElementById(id)
    valor = document.getElementById(id+"_valor").innerText
    valorfinal = parseFloat(parseFloat(valorfinal)-parseFloat(valor)).toFixed(2)
    document.getElementById('ValorFinal').innerHTML = valorfinal
    tr.remove()

}


function add(valor,quantidade){
    valor = parseFloat(document.getElementById(valor).value).toFixed(2)
    quantidade = parseFloat(document.getElementById(quantidade).value).toFixed(2)
    if(valor!="NaN" && quantidade!="NaN" && quantidade!=0.00){
       
        tbody = document.getElementById('tabela_carrinho')
        tr = document.createElement('tr')
        tr.setAttribute('id','tr'+ids+'')
        tr.setAttribute('class','trTabela marginTop lista')
        tbody.append(tr)
        
        th1 = document.createElement('th')
        th1.setAttribute('class','thDescricao')
        th1.innerText = "R$"
        tr.append(th1)

        span = document.createElement('span')
        span.setAttribute('id','tr'+ids+'_valor')
        span.innerText = parseFloat(valor*quantidade).toFixed(2)
        th1.append(span)

        th2 = document.createElement('th')
        th2.setAttribute('class','thDescricao')
        th2.innerText = parseInt(quantidade) +" Unidades"
        tr.append(th2)

        th3 = document.createElement('th')
        tr.append(th3)

        button = document.createElement('button')
        button.setAttribute('class','botaoRemover')
        button.setAttribute("onclick","remover('tr"+ids+"')")
        th3.append(button)

        img = document.createElement('img')
        img.setAttribute('src','src/img/remove.svg')
        button.append(img)

        ids += 1
    
        valorfinal = parseFloat(parseFloat(valorfinal)+parseFloat(valor*quantidade)).toFixed(2)
        document.getElementById('ValorFinal').innerHTML = valorfinal
        calcularTroco()
    }
    if(valor!="NaN" && quantidade!="NaN" && quantidade!=0.00){
        document.getElementById('valordoproduto').value = ""
        document.getElementById('quantidadedoproduto').value = "1"
    }
}


function calcularTroco(){
    valorpago = parseFloat(document.getElementById('inputValorPago').value).toFixed(2)
    if(valorpago != "NaN"){
        valorf = parseFloat(parseFloat(valorpago)-parseFloat(valorfinal)).toFixed(2)
        if(valorf < 0){
            document.getElementById('espacoDois_h2').innerText = "Falta R$"
            document.getElementById('valorTroco').innerText = valorf.replace('-','')
        }
        else{
            document.getElementById('espacoDois_h2').innerText = "Devolva R$"
            document.getElementById('valorTroco').innerText = valorf
        }
    }
    else{
        document.getElementById('valorTroco').innerText = '00.00'   
    }
    
}