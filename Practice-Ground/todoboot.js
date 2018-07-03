let list =null ;
window.onload = function(){
    list=document.getElementById('list');
    let addnewTodo= document.getElementById('add-new-todo')
    let addBtn = document.getElementById('add-btn')
    let delbtn = document.getElementById('del-btn')

    addBtn.onclick = function () {
        let todoValue = addnewTodo.value;

        let newListItem = document.createElement('li');
        newListItem.className = 'list-group-item';


        let checkBox = document.createElement('input');
        checkBox.className = 'col-1'
        checkBox.setAttribute('type','checkbox');

        let span = document.createElement('span');
        span.className = 'col-8'
        span.innerText = todoValue;

        let

        newListItem.appendChild(checkBox)
        newListItem.appendChild(span)

        list.appendChild(newListItem)

    }



}