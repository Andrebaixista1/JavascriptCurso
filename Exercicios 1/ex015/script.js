function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtAno');
    var res = document.querySelector('div#res');

    if(fano.value.length == 0 || fano.value.length > ano){
        window.alert("Ano inválido! Verifique os dados e tente novamente.");
    } else{
        var fsex = document.getElementsByName('radSex');
        var idade = ano - Number(fano.value);
        var genero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked){
            genero = 'Homem';
            if (idade >=0 && idade < 12){
                img.setAttribute('src', 'img/manha.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher';
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }

}