let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let tasks = JSON.parse(localStorage.getItem('@listTasks')) || [];

function renderTasks(){
    listElement.innerHTML = '';

    tasks.map((todo) => {
        let liElement = document.createElement('li');
        let taskText = document.createTextNode(todo);

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        let linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        let position = tasks.indexOf(todo);

        linkElement.setAttribute('onclick', `deletTask(${position})`)

        liElement.appendChild(taskText);
        liElement.append(linkElement);
        listElement.appendChild(liElement);
    })
}

renderTasks();

function addTasks(){
    if(inputElement.value === ''){
        alert('DIGITE ALGUMA TAREFA!!!!');
        return false;
    }else{
        let newTask = inputElement.value;

        tasks.push(newTask);
        inputElement.value = '';

        renderTasks();
        saveData();

    }
}

buttonElement.onclick = addTasks;

function deletTask(position){
    tasks.splice(position, 1);
    renderTasks();
    saveData();
}

function saveData(){
    localStorage.setItem('@listTasks', JSON.stringify(tasks)) //PARAMETROS: CHAVE PARA IDENTIFICAR O STORAGE E O QUE QUER SALVAR
}
