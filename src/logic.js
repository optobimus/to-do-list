export const todo = (id, title, description, dueDate, priority) => {
    let checked = false;

    const complete = () => {
        checked = true;
    }

    const uncheck = () => {
        checked = false;
    }

    const getId = () => id;
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getChecked = () => checked;

    return {getId, getTitle, getDescription, getDueDate, getPriority, getChecked, complete, uncheck};
}

export const project = (title) => {

    const getTitle = () => title;
    let todos = [];

    const addTodo = (todo) => {
        todos.push(todo);
    }

    const removeTodo = (taskId) => {
        todos = todos.filter((todo) => todo.getId() !== parseInt(taskId));
    }

    const getTodos = () => todos;

    return {getTitle, addTodo, getTodos, removeTodo};
}

export const inbox = (() => {

    let todos = [];

    const addTodo = (todo) => {
        todos.push(todo);
    }

    const removeTodo = (index) => {
        todos = todos.filter((todo) => todos.indexOf(todo) !== parseInt(index));
    }

    const getTodos = () => todos;

    return {addTodo, getTodos, removeTodo};
})();