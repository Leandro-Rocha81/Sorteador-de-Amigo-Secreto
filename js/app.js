// Declaração de variáveis globais
let sorteio;
let nomeAmigo;
let amigosAdicionados = []; // Array para armazenar os nomes dos amigos adicionados

// Função para adicionar o nome do amigo à lista
function adicionar () {
    nomeAmigo = document.getElementById('nome-amigo').value; // Pega o valor do input com id 'nome-amigo'
    amigosAdicionados.push(`${nomeAmigo} `); // Adiciona o nome ao array 'amigosAdicionados'
    document.getElementById('lista-amigos').textContent = amigosAdicionados; // Atualiza o conteúdo da div com o id 'lista-amigos' com os nomes dos amigos adicionados
}

// Algoritmo Fisher-Yates para embaralhar o array
function embaralharArray(array) {
    // Percorre o array de trás para frente
    for (let i = array.length - 1; i > 0; i--) {
        // Sorteia um índice aleatório entre 0 e i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));
        // Troca o elemento atual (índice i) com o elemento sorteado (índice j)
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array; // Retorna o array embaralhado
}

// Função para realizar o sorteio dos amigos secretos
function sortear () {
    // Cria uma cópia do array embaralhado, para preservar o array original
    const amigosEmbaralhados = embaralharArray(amigosAdicionados.slice());
    
    sorteio = document.getElementById('lista-sorteio'); // Pega o elemento onde o sorteio será exibido
    
    // Loop para criar as duplas de amigo secreto
    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        // Se for o último amigo da lista, ele será o amigo secreto do primeiro
        if (i == amigosEmbaralhados.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigosEmbaralhados[i] + ' --> ' + amigosEmbaralhados[0] + '<br>';
        } 
        // Para os outros, ele será o amigo secreto do próximo na lista
        else {
            sorteio.innerHTML = sorteio.innerHTML + amigosEmbaralhados[i] + ' --> ' + amigosEmbaralhados[i + 1] + '<br>';
        }
    }
}

// Função para reiniciar o sorteio, limpando a lista de amigos e o resultado
function reiniciar () {
    amigosAdicionados = []; // Reseta o array de amigos adicionados
    document.getElementById('lista-amigos').textContent = amigosAdicionados; // Atualiza a exibição da lista de amigos para vazio
    sorteio = document.getElementById('lista-sorteio'); // Pega o elemento onde o sorteio é exibido
    sorteio.innerText = ' '; // Reseta o conteúdo do sorteio, deixando-o em branco
}
