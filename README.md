# TaskFlow - Sistema de Gerenciamento Ágil

## Sobre o Projeto

O TaskFlow é um sistema de gerenciamento de tarefas desenvolvido para auxiliar equipes no acompanhamento e organização de atividades utilizando metodologias ágeis.

O projeto foi criado como parte da disciplina de Engenharia de Software, simulando o desenvolvimento de um software real utilizando práticas modernas de gestão, versionamento e controle de qualidade.

---

## Objetivo

Desenvolver um sistema simples e funcional capaz de:

- Cadastrar tarefas
- Editar tarefas
- Excluir tarefas
- Alterar status das atividades
- Organizar tarefas utilizando o modelo Kanban
- Simular um fluxo de trabalho ágil

---

## Funcionalidades

### CRUD de Tarefas
O sistema permite:

- Criar tarefas
- Listar tarefas
- Atualizar tarefas
- Remover tarefas

### Controle de Status
Cada tarefa pode possuir os seguintes estados:

- A Fazer
- Em Progresso
- Concluído

### Prioridade das Tarefas
As tarefas podem possuir prioridade:

- Baixa
- Média
- Alta

### Persistência de Dados
As informações são armazenadas utilizando LocalStorage do navegador.

---

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Actions

---

## Metodologia Ágil Utilizada

O projeto foi desenvolvido utilizando conceitos de metodologias ágeis, principalmente:

- Kanban
- Scrum
- Controle incremental de entregas
- Gestão contínua de mudanças

O gerenciamento das tarefas foi realizado utilizando o GitHub Projects.

---

## Estrutura do Projeto

```txt
taskflow/
│
├── src/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
└── README.md