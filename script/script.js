// Carrega as tarefas salvas no navegador ou cria uma lista vazia
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// Salva a lista de tarefas no Local Storage
function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// Adiciona uma nova tarefa
function adicionarTarefa() {

    // Obtém os valores digitados pelo usuário
    let titulo = document.getElementById("titulo").value;
    let prioridade = document.getElementById("prioridade").value;

    // Verifica se o título foi preenchido
    if (titulo === "") {
        alert("Digite uma tarefa");
        return;
    }

    // Cria o objeto tarefa
    let tarefa = {
        id: Date.now(), // ID único baseado na data atual
        titulo: titulo,
        prioridade: prioridade,
        status: "A Fazer"
    };

    // Adiciona a tarefa na lista
    tarefas.push(tarefa);

    // Salva e atualiza a tela
    salvarTarefas();
    listarTarefas();

    // Limpa o campo de texto
    document.getElementById("titulo").value = "";
}

// Exibe todas as tarefas na página
function listarTarefas() {

    let lista = document.getElementById("listaTarefas");

    // Limpa a lista antes de recriá-la
    lista.innerHTML = "";

    tarefas.forEach((tarefa) => {

        // Cria o HTML de cada tarefa
        lista.innerHTML += `
        
            <div class="tarefa">

                <h3>${tarefa.titulo}</h3>

                <p>
                    Prioridade: ${tarefa.prioridade}
                </p>

                <p>
                    Status: ${tarefa.status}
                </p>

                <div class="botoes">

                    <button onclick="editarTarefa(${tarefa.id})">
                        Editar
                    </button>

                    <button onclick="excluirTarefa(${tarefa.id})">
                        Excluir
                    </button>

                    <button onclick="mudarStatus(${tarefa.id})">
                        Mudar Status
                    </button>

                </div>

            </div>
        `;
    });
}

// Remove uma tarefa da lista
function excluirTarefa(id) {

    tarefas = tarefas.filter((tarefa) => tarefa.id !== id);

    salvarTarefas();
    listarTarefas();
}

// Altera o título de uma tarefa
function editarTarefa(id) {

    let novoTitulo = prompt("Digite o novo nome da tarefa:");

    if (novoTitulo === null || novoTitulo === "") {
        return;
    }

    let tarefa = tarefas.find((t) => t.id === id);

    tarefa.titulo = novoTitulo;

    salvarTarefas();
    listarTarefas();
}

// Altera o status da tarefa
function mudarStatus(id) {

    let tarefa = tarefas.find((t) => t.id === id);

    // Alterna entre os três status possíveis
    if (tarefa.status === "A Fazer") {
        tarefa.status = "Em Progresso";
    }
    else if (tarefa.status === "Em Progresso") {
        tarefa.status = "Concluído";
    }
    else {
        tarefa.status = "A Fazer";
    }

    salvarTarefas();
    listarTarefas();
}

// Exibe as tarefas quando a página é carregada
listarTarefas();