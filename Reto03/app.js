const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", () => {
  const form = createTaskForm();
  taskList.insertAdjacentElement("beforebegin", form);
});

function createTaskForm() {
  const form = document.createElement("form");
  form.innerHTML = `
    <label for="task-name">Nombre:</label>
    <input type="text" id="task-name" name="name" required>
    
    <label for="task-type">Tipo:</label>
    <select id="task-type" name="type">
      <option value="personal">Personal</option>
      <option value="domestica">Doméstica</option>
      <option value="entretenimiento">Entretenimiento</option>
      <option value="laboral">Laboral</option>
    </select>
    
    <label for="task-description">Descripción:</label>
    <textarea id="task-description" name="description"></textarea>
    
    <label for="task-priority">Prioridad:</label>
    <select id="task-priority" name="priority">
      <option value="nula">Blanca</option>
      <option value="baja">Verde</option>
      <option value="moderada">Amarilla</option>
      <option value="alta">Roja</option>
    </select>
    
    <div class="buttons-form">
        <button type="submit">Agregar</button>
        <button type="button" id="cancel-task-btn">Cancelar</button>
    </div>    
  `;
  form.addEventListener("submit", handleTaskFormSubmit);

  const cancelBtn = form.querySelector("#cancel-task-btn");
  cancelBtn.addEventListener("click", () => {
    form.remove();
  });
  
  return form;
}

function handleTaskFormSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById("task-name");
  const typeInput = document.getElementById("task-type");
  const descriptionInput = document.getElementById("task-description");
  const priorityInput = document.getElementById("task-priority");

  const newTask = {
    name: nameInput.value,
    type: typeInput.value,
    description: descriptionInput.value,
    priority: priorityInput.value,
  };

  addTaskToList(newTask);
  event.target.remove();
}

function addTaskToList(task) {
  const li = document.createElement("li");
  li.innerHTML = `
    <h3>${task.name}</h3>
    <p>Tipo: ${task.type}</p>
    <p>Descripción: ${task.description}</p>
    <p>Prioridad: ${task.priority}</p>
  `;
  taskList.appendChild(li);
}