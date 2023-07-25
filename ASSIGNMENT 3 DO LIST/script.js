document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');
    const dingSound = document.getElementById('ding-sound');

    addButton.addEventListener('click', function () {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    function addTodoItem(todoText) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const todoTextSpan = document.createElement('span');
        todoTextSpan.textContent = todoText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');

        li.appendChild(checkbox);
        li.appendChild(todoTextSpan);
        li.appendChild(deleteButton);
        todoList.appendChild(li);

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                li.classList.add('completed');
                li.style.backgroundColor = '#b7e1cd'; // Green background
                dingSound.play(); // Play the "ding" sound
                todoList.appendChild(li);
            } else {
                li.classList.remove('completed');
                li.style.backgroundColor = ''; // Remove custom background
                todoList.insertBefore(li, todoList.firstChild);
            }
        });

        deleteButton.addEventListener('click', function () {
            li.classList.add('deleted');
            setTimeout(() => {
                li.remove();
            }, 300); // Remove the item after the transition
        });
    }
});

