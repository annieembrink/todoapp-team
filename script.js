let task = document.querySelector('p');

document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();

    let inputField = document.getElementById('addTodo');

    let liTag = document.createElement('li');

    let pTag = document.createElement('p');
    pTag.textContent = inputField.value;

    let delBtn = document.createElement('button');
    delBtn.textContent = 'delete';
    delBtn.onclick = deleteOnclick;

    let editBtn = document.createElement('button');
    editBtn.textContent = 'edit';

    document.querySelector('ul').appendChild(liTag);
    liTag.appendChild(pTag);
    liTag.appendChild(delBtn);
    liTag.appendChild(editBtn);

    inputField.value = '';
}


function deleteOnclick(e) {
    
    e.target.parentElement.remove();
    
}

