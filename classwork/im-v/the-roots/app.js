const tasks = [];

function redrawTheList() {
  const doneList = document.querySelector("#done");
  const undoneList = document.querySelector("#undone");
  undoneList.innerHTML = "";
  doneList.innerHTML = "";
  for (const task of tasks) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${task.name}</span>`;
    li.addEventListener("click", () => {
      task.status = !task.status;
      task.ping();
      redrawTheList();
    });
    if (task.status === false) {
      undoneList.appendChild(li);
    } else {
      doneList.appendChild(li);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form#taskMaster");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskName = event.target.task.value.trim();
    if (taskName.length === 0) {
      alert("Please enter a task.");
      return;
    }

    tasks.push({
      name: taskName,
      status: false,
      createdAt: new Date(),
      completedAt: null,
      ping() {
        console.log(`Task: ${this.name}, Status: ${this.status}`);
      },
    });

    // sort the list by createdAt
    tasks.sort((a, b) => a.createdAt - b.createdAt);
    redrawTheList();
  });
});
