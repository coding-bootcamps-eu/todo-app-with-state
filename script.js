class TodoApp{
    
    state = {
        filter: "all",
        input_value: "",
        todos: [
            {text: "Wäsche waschen", isDone: false}
        ]
    }

    constructor(){
        document.querySelector('#input-todo').addEventListener('input', this.handleInputEvent);
        document.querySelector('#filter-section').addEventListener('input', this.handleCheckboxEvent)
        document.querySelector('#add-todo-button').addEventListener('click', this.handleAddTodo)
        document.querySelector('#remove-button').addEventListener('click', this.handleRemoveDoneEvent)
    }

    handleInputEvent(){
        const inputElement = document.querySelector('#input-todo');
        const currentValue = inputElement.value;
        this.state.input_value = currentValue;
    }

    handleCheckboxEvent(event){
        const checkbox = event.target;
        const filterMode = checkbox.getAttribute('data-filter');
        this.state.filter = filterMode;
    }

    handleAddTodo(){
        const newTodoText = this.state.input_value;
        const newTodo = {text: newTodoText, isDone: false};
        this.state.todos.push(newTodo);
    }

    handleRemoveDoneEvent(){
        const onlyOpenTodos = this.state.todos.filter((todo) => todo.isDone === false);
        this.state.todos = onlyOpenTodos;
    }


    render(){

    }
}

const app = new TodoApp();