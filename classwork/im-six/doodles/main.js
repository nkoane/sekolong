let todos = [];
let sequence = 0;
const generateSequencialId = () => {
  sequence++;
  return sequence;
};

document.addEventListener("DOMContentLoaded", (_ev) => {
  const form = document.querySelector("#todo-form");
  const list = document.querySelector("#todos");
  const clonedItem = list.getElementsByTagName("li")[0].cloneNode(true);
  list.getElementsByTagName("li")[0].remove();
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const task = form.task.value.trim();
    if (task !== "") {
      const todo = {
        id: generateSequencialId(),
        name: task,
        completed: false,
        createdAt: new Date().toISOString(),
        completeAt: null,
      };
      todos.push(todo);
      const li = clonedItem.cloneNode(true);
      li.querySelector(".delete").addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this task?")) {
          todos = todos.filter((t) => t.id !== todo.id);
          li.classList.add("fade");
          setTimeout(() => {
            li.remove();
          }, 800);
        }
      });
      li.querySelector(".todo").textContent = task;
      li.querySelector(".undone").addEventListener("click", () => {
        li.querySelector(".done").classList.toggle("hide");
        li.querySelector(".undone").classList.toggle("hide");
        todos.forEach((t) => {
          if (t.id === todo.id) {
            t.completed = true;
            t.completeAt = new Date().toISOString();
          }
        });
      });
      li.querySelector(".done").addEventListener("click", () => {
        li.querySelector(".done").classList.toggle("hide");
        li.querySelector(".undone").classList.toggle("hide");
        todos.forEach((t) => {
          if (t.id === todo.id) t.completed = false;
        });
      });
      list.prepend(li);
      form.reset();
    }
  });
});
