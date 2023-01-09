let task = document.querySelector('p');

document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();

    let inputField = document.getElementById('addTodo');

    let pTag = document.createElement('p');
    pTag.textContent = inputField.value;

    let delBtn = document.createElement('button');
    delBtn.textContent = 'delete';

    let editBtn = document.createElement('button');
    editBtn.textContent = 'edit';

    document.querySelector('li').appendChild(pTag);
    document.querySelector('li').appendChild(delBtn);
    document.querySelector('li').appendChild(editBtn);

    inputField.value = '';
}

function deleteTodo () {
    
}