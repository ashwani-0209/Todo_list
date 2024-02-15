let todoList = [
  // {item : 'buy milk',
  // dueDate : '10/2/2023'},
];
displayTodo();

function addElement(){
  let todoElement = document.querySelector("#input-todo");
  let todoDate = document.querySelector("#date-todo");
  todoItem = todoElement.value;
  dateItem = todoDate.value;
  todoList.push({item : todoItem, dueDate : dateItem});
  todoElement.value ="";
  todoDate.value ="";
  displayTodo();
}

function displayTodo(){
  let containerItems = document.querySelector(".todo-container");
  let newHtml = '';
  for(let i=0; i<todoList.length; i++)
  {
    let {item,dueDate} = todoList[i];
    newHtml+=`
    
      <span> ${item}</span>
      <span> ${dueDate}</span>
      <button class="btn-delete" onclick="todoList.splice(${i},1);
      displayTodo();
      ">Delete</button>
    `;
  }
  containerItems.innerHTML = newHtml;
}