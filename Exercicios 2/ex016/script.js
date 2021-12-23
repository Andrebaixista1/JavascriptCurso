function contar(){
    var inicio = document.getElementById('txtI');
    var fim = document.getElementById('txtF');
    var passo = document.getElementById('txtP');

    var res = document.getElementById('res');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        // alert('[ERRO] Faltam dados!')
        
    }else{
        res.innerHTML = 'Contando: ';
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);
        if(p <= 0){
            alert('Passo inválido! Considerando PASSO 1.')
            p = 1;
        }
        if (i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`;
            } 
            res.innerHTML += `\u{1F3C1}`;
        }else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`;
            }
            res.innerHTML += `\u{1F3C1}`;
        }
        
    } 
}