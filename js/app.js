// Declaração de variáveis globais
let sorteio; // Elemento HTML onde o resultado do sorteio será exibido
let nomeAmigo; // Variável para armazenar o nome do amigo a ser adicionado
let amigosAdicionados = []; // Array que armazena os nomes dos amigos adicionados

// Função para adicionar o nome do amigo à lista
function adicionar() {
    nomeAmigo = document.getElementById('nome-amigo').value; // Obtém o valor do input com id 'nome-amigo'
    
    // Verifica se o campo de nome está vazio ou contém apenas um espaço em branco
    if (nomeAmigo.trim() === '') {
        alert('Adicione um nome para poder entrar na lista'); // Exibe um alerta se o nome não for fornecido
        return; // Sai da função se o nome não for válido
    } else {
        // Adiciona o nome ao array 'amigosAdicionados' e atualiza a lista na página
        amigosAdicionados.push(nomeAmigo.trim());
        document.getElementById('lista-amigos').textContent = amigosAdicionados.join(', ');
        
        // Limpa o campo de input após adicionar o nome
        document.getElementById('nome-amigo').value = '';
    }
}

// Algoritmo Fisher-Yates para embaralhar o array
function embaralharArray(array) {
    // Itera sobre o array do último elemento até o primeiro
    for (let i = array.length - 1; i > 0; i--) {
        // Gera um índice aleatório entre 0 e i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));
        // Troca o elemento atual (índice i) com o elemento sorteado (índice j)
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array; // Retorna o array embaralhado
}

// Função para realizar o sorteio dos amigos secretos
function sortear() {
    // Verifica se a lista de amigos está vazia
    if (amigosAdicionados.length === 0) {
        alert('Por favor adicione nomes para serem sorteados'); // Exibe um alerta se a lista estiver vazia
        return; // Sai da função se a lista estiver vazia
    }

    // Verifica se o número de amigos é menor que 4
    if (amigosAdicionados.length < 4) {
        alert('Adicione pelo menos 4 pessoas!'); // Exibe um alerta se houver menos de 4 amigos
        return; // Sai da função se houver menos de 4 amigos
    }
    
    // Cria uma cópia do array embaralhado para preservar o original
    const amigosEmbaralhados = embaralharArray(amigosAdicionados.slice());
    
    sorteio = document.getElementById('lista-sorteio'); // Obtém o elemento onde o sorteio será exibido
    
    // Loop para gerar as duplas de amigos secretos
    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        // Se for o último elemento, faz o sorteio com o primeiro da lista
        if (i === amigosEmbaralhados.length - 1) {
            sorteio.innerHTML += amigosEmbaralhados[i] + ' --> ' + amigosEmbaralhados[0] + '<br>';
        } 
        // Para os demais elementos, sorteia o próximo da lista
        else {
            sorteio.innerHTML += amigosEmbaralhados[i] + ' --> ' + amigosEmbaralhados[i + 1] + '<br>';
        }
    }
}

// Função para reiniciar o sorteio, limpando a lista de amigos e os resultados exibidos
function reiniciar() {
    amigosAdicionados = []; // Reseta o array de amigos adicionados
    document.getElementById('lista-amigos').textContent = ''; // Limpa a exibição da lista de amigos
    
    sorteio = document.getElementById('lista-sorteio'); // Obtém o elemento onde o sorteio foi exibido
    sorteio.innerHTML = ''; // Limpa o conteúdo do sorteio, deixando-o em branco
}
