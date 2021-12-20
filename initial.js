atualizarlistadoestoque()

function atualizarlistadoestoque(){
    id_quantidadedeprodutos = 0
    ul = document.getElementById('listadeprodutos').innerHTML = ''
    interacao = dadosdosprodutos.length
  
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