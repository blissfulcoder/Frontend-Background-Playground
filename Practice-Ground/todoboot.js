let list =null ;
let listElements = [];

window.onload = function(){
    list=document.getElementById('list');
    let addnewTodo= document.getElementById('add-new-todo')
    let addBtn = document.getElementById('add-btn')
    let delbtn = document.getElementById('del-btn')

    addBtn.onclick = function () {

        let todoValue = addnewTodo.value;
        addTodo(todoValue)
showTodos()

    }
    
    function showTodos() {
        list.innerHTML=""
        for(i in listElements){
            addListItem(listElements[i].task,listElements.done,i)
        }
    }

    function addListItem(todoValue, done, id) {

        let newListItem = document.createElement('li');
        newListItem.setAttribute('data-id',id);
        newListItem.className = 'list-group-item';


        let checkBox = document.createElement('input');
        checkBox.className = 'col-1'
        checkBox.setAttribute('type','checkbox');
        checkBox.onchange = strikeSpan;

        let span = document.createElement('span');
        span.className = 'col-8'
        span.innerText = todoValue;
        if(done){
            checkBox.setAttribute('checked',true)
            span.style.textDecoration = 'line-through'
        }

        let deletebtn = document.createElement('i');
        deletebtn.className = 'col-1 fa fa-times'
        deletebtn.onclick = deleteTodo;

        let moveUpBtn = document.createElement('i');
        moveUpBtn.className = 'col-1 fa fa-chevron-up'

        let moveDownBtn = document.createElement('i');
        moveDownBtn.className = 'col-1 fa fa-chevron-down'

        newListItem.appendChild(checkBox)
        newListItem.appendChild(span)
        newListItem.appendChild(deletebtn)
        newListItem.appendChild(moveUpBtn)
        newListItem.appendChild(moveDownBtn)


        list.appendChild(newListItem)
    }
    function  addTodo(todoTask) {

        let newTask = {
            task:todoTask,
            done: false
        }

        listElements.push(newTask)
    }

    function  deleteTodo(event) {

        let index = event.target.parentElement.getAttribute('data-id')
        listElements.splice(index,1);
        showTodos();
    }

    function strikeSpan(event) {
        let index = event.target.parentElement.getAttribute('data-id')
        listElements[index].done = event.target.checked;
        showTodos();
    }
}