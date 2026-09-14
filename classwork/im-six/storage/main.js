document.addEventListener("DOMContentLoaded", () => {
  let bgColour = localStorage.getItem("myBackgroundColour");

  let todos = [];
  if (localStorage.getItem("myTodos") !== null) {
    todos = JSON.parse(localStorage.getItem("myTodos"));
  }
  console.log("storage todos:", todos);
  if (bgColour !== null) {
    document.body.style.backgroundColor = bgColour;
  }
  const form = document.querySelector("form#task");
  // check that form does actually exist;
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    // check todo.value is not empty;
    document.body.style.backgroundColor = form.todo.value;
    localStorage.setItem("myBackgroundColour", form.todo.value);
    todos.push(form.todo.value);
    localStorage.setItem("myTodos", JSON.stringify(todos));
    form.reset();
    console.log(todos);
  });
});
