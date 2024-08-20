function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const mensagemErro = document.getElementById('mensagemErro');

    if (nome === "") {
        mensagemErro.innerHTML = "Por favor, preencha o campo nome corretamente";
        return false;
    }
    if (email === "") {
        mensagemErro.innerHTML = "Por favor, preencha o campo e-mail corretamente";
        return false;
    }
    if (senha === "") {
        mensagemErro.innerHTML = "Por favor, preencha o campo senha corretamente";
        return false;
    }
    return true
}