
function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas`
    if(hora>= 0 && hora <12) {
        img.src = 'imagens/manha.png'
        document.body.style.background='#ffd86a'
    }else if(hora >=12 && hora <= 18){
        img.src = 'imagens/tarde.png' 
        document.body.style.background='#d7845e'
    }else {
        img.src = 'imagens/noite.png'
        document.body.style.background='#06263f'
    }
}