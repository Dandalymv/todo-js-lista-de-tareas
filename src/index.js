import './styles.css';
import { TodoList, Todo } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

//todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml);

console.log('todos', todoList.todos);


// const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'ABS 123');
// setTimeout( () => {
//     localStorage.removeItem('mi-key')
// }, 2000 )


