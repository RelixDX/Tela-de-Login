

let lightDark = document.querySelector('.buttonLD')
let bodyLD = document.querySelector('#LD')

function mudarTema() {
    if(bodyLD.classList.contains('light')){
        bodyLD.classList.remove('light')
        bodyLD.classList.add('dark')
    } else {
        bodyLD.classList.remove('dark')
        bodyLD.classList.add('light')
    }
}


lightDark.addEventListener('click', mudarTema)

