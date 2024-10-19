// Simulação de banco de dados
let usuarios = [];

// Funções para abrir e fechar modais
function abrirLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

function abrirOpcao(modalId) {
    fecharModal('loginModal');
    document.getElementById(modalId).style.display = 'flex';
}

function fecharModalById(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Função para criar conta
function criarConta() {
    const email = document.getElementById('emailCriarConta').value;
    const senha = document.getElementById('senhaCriarConta').value;

    if (!email || !senha) {
        alert("Preencha todos os campos.");
        return;
    }

    const usuarioExistente = usuarios.find(user => user.email === email);
    if (usuarioExistente) {
        alert("Este e-mail já está registrado.");
        return;
    }

    usuarios.push({ email, senha });
    alert("Conta criada com sucesso!");

    fecharModal('criarContaModal');
}

// Função de login
function login() {
    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    if (!email || !senha) {
        alert("Preencha todos os campos.");
        return;
    }

    const usuario = usuarios.find(user => user.email === email && user.senha === senha);

    if (usuario) {
        alert("Login bem-sucedido!");
        fecharModal('jaTenhoContaModal');
        sessionStorage.setItem("usuarioLogado", email);
    } else {
        alert("E-mail ou senha incorretos.");
    }
}

// Função para reservar livro
function reservarLivro() {
    const usuarioLogado = sessionStorage.getItem("usuarioLogado");

    if (usuarioLogado) {
        alert("Livro reservado com sucesso!");
    } else {
        alert("Você precisa estar logado para reservar livros.");
    }
}

// Função para abrir o modal do livro (já existente no código)
function abrirModal(titulo, autor, imagem) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-titulo").textContent = titulo;
    document.getElementById("modal-autor").textContent = "Autor: " + autor;
    document.getElementById("modal-img").src = imagem;
    modal.style.display = "flex";
}

// Função para fechar o modal de livro
function fecharModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
