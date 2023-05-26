function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
   
    msg.innerHTML =`Agora são ${hora} horas`
    if (hora >= 5 && hora < 12) {
        //BOM DIA
        img.src ='foto manha.png'
        document.body.style.background = '#d5c39d'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'foto tarde.png'
        document.body.style.background = '#743d36'
    } else { 
        //boa noite
        img.src = 'foto noite.png'
        document.body.style.background = '#252130'
    }
}