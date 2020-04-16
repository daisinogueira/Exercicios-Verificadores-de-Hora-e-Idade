
function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE!')
    }else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value);
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero='masculino'
            if(idade >=0 && idade <10){
             img.setAttribute('src', 'imagens/bebe.png')
            }else if (idade <21) {
                img.setAttribute('src', 'imagens/jovemHomem.png')
            }else if(idade<50) {
                img.setAttribute('src', 'imagens/adultoHomem.png')
            }else {
                img.setAttribute('src', 'imagens/idoso.png')
            }
        }else if(fsex[1].checked) {
            genero='feminino'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/bebeMenina.png')
            }else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemMulher.png')
            }else if(idade < 50) {
                img.setAttribute('src', 'imagens/adultoMulher.png')
            }else {
                img.setAttribute('src', 'imagens/idosaMulher.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML = `Detectamos pessoa do sexo ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
