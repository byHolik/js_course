const todoList = document.getElementById('todoList');
const newTodoInput = document.getElementById('newTodo');
const btns = document.querySelectorAll('button');
console.log(todoList);

btns[0].addEventListener('click', () => addTodo());
btns[1].addEventListener('click', () => clean());


function addTodo() {
	const todoText = newTodoInput.value.trim();
	if (todoText !== '') {
		const li = document.createElement('li');
		li.textContent = todoText;
		todoList.appendChild(li);
		newTodoInput.value = '';
	}
	console.log(todoList.childNodes);
}

function clean() {
	todoList.innerHTML = '';
	// todoList.childNodes.forEach(node => {
	// 	node.remove();
	// });
}