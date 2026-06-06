let taskInput = document.getElementById("input");
function addTask(){
    let task = taskInput.value.trim();
    if(!task){
        alert("Please enter a task.");
        return;
    }
    const li=document.createElement("li");
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    li.innerHTML=`<label><input type="checkbox" onclick="toggleTask(this)"> ${task}</label> <button onclick="deleteTask(this)" class="delete-btn">Delete</button>`;
    document.getElementById("taskList").appendChild(li);
    saveTasks();
    taskInput.value="";
  }
  taskInput.addEventListener("keydown", function(event){
    if(event.key==="Enter"){
      addTask();
    }
  });
  function toggleTask(element){
    element.parentElement.classList.toggle("completed");
    if(element.checked){
      element.setAttribute("checked", "checked")
    }
    else{
      element.removeAttribute("checked");
    }
    saveTasks();
  }
  function deleteTask(button){
    button.parentElement.remove();
    saveTasks();
  }
 
  function saveTasks(){
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
  }
  function loadTasks(){
    const tasks=localStorage.getItem("tasks");
    if(tasks){
      document.getElementById("taskList").innerHTML=tasks;
    }
  }

  loadTasks();