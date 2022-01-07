class TodoApp {
  state = {
    filter: "all",
    input_value: "",
    todos: [{ text: "Wäsche waschen", isDone: false }],
  };

  constructor() {
    this.initEventHandlers();
    this.render();
  }

  initEventHandlers = () => {
    document
      .querySelector("#input-todo")
      .addEventListener("input", this.handleInputEvent);
    document
      .querySelector("#filter-section")
      .addEventListener("input", this.handleCheckboxEvent);
    document
      .querySelector("#add-todo-button")
      .addEventListener("click", this.handleAddTodo);
    document
      .querySelector("#remove-button")
      .addEventListener("click", this.handleRemoveDoneEvent);
  };

  handleInputEvent = () => {
    const inputElement = document.querySelector("#input-todo");
    const currentValue = inputElement.value;
    this.state.input_value = currentValue;
    this.render();
  };

  handleCheckboxEvent = (event) => {
    const clickedCheckbox = event.target;
    const filterMode = clickedCheckbox.getAttribute("data-filter");
    this.state.filter = filterMode;
    this.render();
  };

  handleAddTodo = () => {
    const newTodoText = this.state.input_value;
    const newTodo = { text: newTodoText, isDone: false };
    this.state.todos.push(newTodo);
    this.render();
  };

  handleRemoveDoneEvent = () => {
    const onlyOpenTodos = this.state.todos.filter(
      (todo) => todo.isDone === false
    );
    this.state.todos = onlyOpenTodos;
    this.render();
  };

  /**
   * Render functions
   */

  renderCheckbox = (todo) => {
    const checkboxIsDone = document.createElement("input");
    checkboxIsDone.type = "checkbox";

    checkboxIsDone.addEventListener("input", () => {
      todo.isDone = !todo.isDone;
      this.render();
    });

    if (todo.isDone === true) {
      checkboxIsDone.checked = "checked";
    }

    return checkboxIsDone;
  };

  renderLiElement = (todo) => {
    const liElem = document.createElement("li");

    if (todo.isDone === true) {
      liElem.style.textDecoration = "line-through";
    }
    liElem.textContent = todo.text;
    return liElem;
  };

  render = () => {
    const todoList = document.querySelector("#todo-list");
    // delete all rendered todos

    todoList.innerHTML = "";
    // render todos
    this.state.todos.forEach((todo) => {
      const liElem = this.renderLiElement(todo);
      const checkboxElem = this.renderCheckbox(todo);

      liElem.appendChild(checkboxElem);
      todoList.appendChild(liElem);
    });
  };
}

const app = new TodoApp();
