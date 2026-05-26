let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function adicionarTarefa() {

    let titulo = document.getElementById("titulo").value;
    let prioridade = document.getElementById("prioridade").value;

    if (titulo === "") {
        alert("Digite uma tarefa");
        return;
    }

    let tarefa = {
        id: Date.now(),
        titulo: titulo,
        prioridade: prioridade,
        status: "A Fazer"
    };

    tarefas.push(tarefa);

    salvarTarefas();
    listarTarefas();

    document.getElementById("titulo").value = "";
}

function listarTarefas() {

    let lista = document.getElementById("listaTarefas");

    lista.innerHTML = "";

    tarefas.forEach((tarefa) => {

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

function excluirTarefa(id) {

    tarefas = tarefas.filter((tarefa) => tarefa.id !== id);

    salvarTarefas();
    listarTarefas();
}

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

function mudarStatus(id) {

    let tarefa = tarefas.find((t) => t.id === id);

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

listarTarefas();