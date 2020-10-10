let form = document.querySelector("#task-form")
let inputField = document.querySelector("#task")
let filterField = document.querySelector("#filter")
let taskList = document.querySelector(".collection");
let clearBtn = document.querySelector(".clear-tasks")
loadEventListeners();

function loadEventListeners(){
  form.addEventListener('submit',addTask);
  clearBtn.addEventListener('click',clearTask);
  taskList.addEventListener('click',removeTask);
  filterField.addEventListener('keyup',filterTask);
  document.addEventListener('DOMContentLoaded',getTasks);
}

function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task){
    const li = document.createElement('li')
    li.className = "collection-item";
    li.appendChild(document.createTextNode(task))
    li.innerHTML +=`<a href="#" class="delete-item secondary-content"><i class="fa fa-remove"></i></a>`
    taskList.appendChild(li)
  })
}

function addTask(e){
  if(inputField.value===''){
    alert("Add task")
    return;
  }
  const li = document.createElement('li')
  li.className = "collection-item";
  li.appendChild(document.createTextNode(inputField.value))
  li.innerHTML +=`<a href="#" class="delete-item secondary-content"><i class="fa fa-remove"></i></a>`
  taskList.appendChild(li)

  storeTaskToLocalStorage(inputField.value);

  inputField.value = "";

  e.preventDefault();
}

function storeTaskToLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

function clearTask(){
  // taskList.innerHTML = "";
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
  localStorage.clear();
}

function removeTask(e){
  if(e.target.parentElement.classList.contains("delete-item")){
    e.target.parentElement.parentElement.remove();
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
  }
  e.preventDefault();
}

function removeTaskFromLocalStorage(task){
  let localTasks = JSON.parse(localStorage.getItem('tasks'));

  localTasks.forEach(function(localTa,index){
    console.log(localTa);
    console.log(task.textContent);
    if(localTa === task.textContent){
      localTasks.splice(index,1);
    }
  })
  localStorage.setItem('tasks',JSON.stringify(localTasks));
}
function filterTask(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach
  (function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text)!=-1){
      task.style.display = 'block';
    }
    else{
      task.style.display = 'none';
    }
  });
}
