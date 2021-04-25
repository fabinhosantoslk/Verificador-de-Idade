function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'homem jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem adulto.png')
            } else {
                img.setAttribute('src', 'homem idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher adulta.png')
            } else {
                img.setAttribute('src', 'mulher idosa.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}