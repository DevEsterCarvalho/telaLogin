const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const formulario = document.querySelector('form')


function exibirErro(input, message) {
    const elementoErro = document.createElement('span')
    elementoErro.className = 'mensagemDeErro'
    elementoErro.style.color = 'black'
    elementoErro.style.fontSize = '20px'
    elementoErro.textContent = message

    input.after(elementoErro)
    input.style.border = '2px solid red'
}


function validacaoEmail (email) {
    const emailCorreto = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailCorreto.test(email)
}


formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    //validação campo de e-mail
    let validacao = true;
    if (!email.value.trim()) {
        exibirErro(email, 'É obrigatório inserir um endereço de e-mail para login.')
        validacao = false
    } else if (!validacaoEmail(email.value)) {
        exibirErro(email, 'Coloque um endereço de e-mail válido.')
        validacao = false
    }
    //validação campo senha
    if (!senha.value.trim()) {
        exibirErro(senha, 'É obrigatório inserir uma senha.')
        validacao = false
    } else if (senha.value.length < 4) {
        exibirErro(senha, 'A sua senha deve conter mais de 4 caracteres, por gentileza, tente novamente.')
        validacao = false
    }


    if (validacao) {
        formulario.submit()
    }
});