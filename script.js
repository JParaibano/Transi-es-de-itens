// Busca todos os elementos da classe " item "
let list = document.querySelectorAll('.item')

// Busca os elementos pelo ID
let next = document.getElementById('next')
let prev = document.getElementById('prev')

// Conta quantos a quantidade de elementos
let count = list.length
let active = 0

// Função para Remover e adicionar a classe " active " de " item " quando o usuário clicar no botão next " > "
function nextButtonClick(){
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')
    if (active >= count -1){
        active = 0
    }else{
        active = active + 1
    }
    list[active].classList.add('active')
}
// Função para Remover e adicionar a classe " active " de " item " quando o usuário clicar no botão prev " < "
function prevButtonClick(){
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')
    if (active <= 0){
        active = count - 1 
    }else{
        active = active - 1
    }
    list[active].classList.add('active')
}