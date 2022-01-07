const state = {
    filterModus: "All",
    todoInput: "",
    todos: [
        {text: "Hallo", isDone: false},
        {text: "Wäsche Waschen", isDone: true},
    ]
}


function render(){

}

// update States
function addNewTodo(){
    const inputTodoElement = document.querySelector("#input-todo");
    state.todos.push({text:inputTodoElement.value, isDone:false})
    state.todoInput = ""
    render();
}

function handleTodoInput(){

    render();
}

// Event Listener
document.querySelector("#input-todo").addEventListener('input', handleTodoInput);
document.querySelector("#add-todo-button").addEventListener('click', addNewTodo);