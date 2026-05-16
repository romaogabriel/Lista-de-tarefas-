function adicionarTarefa() {
    let tarefa = document.getElementById("tarefa").value;

    let li = document.createElement("li");
    li.textContent = tarefa;

    document.getElementById("lista").appendChild(li);
}