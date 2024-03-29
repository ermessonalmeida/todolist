const input = document.querySelector('.input-task')
const formulario = document.querySelector('.formulario')
const taskList = document.querySelector('.task_list')
const banco = []

function adicionarTarefa(event) {
    event.preventDefault()
    const novaTarefa = document.createElement("li")
    novaTarefa.innerHTML =
        `
            <input class="check-task"  type="checkbox" >
            <span>${input.value}</span>
            <button class="delete-task">DELETE</button>
        `
    taskList.appendChild(novaTarefa)
    banco.push(input.value)
    input.value = ''

}

function excluirTarefa(event) {
    if (event.target.classList.contains('delete-task')) {
        const item = event.target.parentElement
        const textoTarefa = item.querySelector('span').textContent
        const index = banco.indexOf(textoTarefa)
        banco.splice(index, 1)
        item.remove()
    }
}

function alternarEstadoTarefa(event) {
    if (event.target.classList.contains('check-task')) {
        const item = event.target.parentElement
        if (event.target.checked) {
            item.classList.add('checked')
        } else {
            item.classList.remove('checked')
        }
    }
}

formulario.addEventListener('submit', adicionarTarefa)
taskList.addEventListener('click', excluirTarefa)
taskList.addEventListener('change', alternarEstadoTarefa)