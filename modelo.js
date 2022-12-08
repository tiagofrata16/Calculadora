function inserir(num) {
    //insercao no paragrafo -> de consecutivos numeros e sinais
    var valor = document.getElementById('campo').innerHTML;
    document.getElementById('campo').innerHTML = valor + num;
}

function limpar() {
    //limpeza no paragrafo
    document.getElementById('campo').innerHTML = "";
} 

function calcular(){ 
    var valor = document.getElementById('campo').innerHTML;
    if(valor){ //calcula a expressao se estiver preenchida
        document.getElementById('campo').innerHTML = eval(valor);
    }else{  //se estiver vazio o campo exibe mensagem
        document.getElementById('campo').innerHTML = "Nada";
    }
}