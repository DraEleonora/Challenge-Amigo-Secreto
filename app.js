// Array que vai armazenar os nomes
let amigos = []
// Array para armazenar todos os amigos
let todosAmigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    todosAmigos.push(nome); // guarda também na lista original
    input.value = ""; // limpa o campo
    atualizarLista();
}

// Função para atualizar a lista na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Função para sortear um amigo SEM REPETIÇÃO
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Todos os amigos já foram sorteados ou a lista está vazia!");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indice];

    // Remove o amigo sorteado do array
    amigos.splice(indice, 1);

    document.getElementById("resultado").innerHTML = 
        `🎉 O amigo secreto sorteado é: <strong>${sorteado}</strong>`;

    atualizarLista();
}

// Função para reiniciar o sorteio
function reiniciarSorteio() {
    if (todosAmigos.length === 0) {
        alert("Nenhum amigo foi adicionado ainda!");
        return;
    }

    amigos = [...todosAmigos]; // restaura a lista original
    document.getElementById("resultado").innerHTML = ""; // limpa o resultado
    atualizarLista();
}