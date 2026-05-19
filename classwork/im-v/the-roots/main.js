const done = [];
const undone = [];

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("form#taskMaster")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const task = event.target.task.value.trim();
      if (task.length === 0) {
        alert("Please enter a task.");
        return;
      }
      undone.push(task); // adds the task to the undone array
      reDrawTheList(undone, document.querySelector("#undone"));
      event.target.reset();
    });
});

const reDrawTheList = (list, listHTMLElement, isThisTheDoneList = false) => {
  console.log({ done, undone });
  listHTMLElement.innerHTML = "";
  list.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${task}</span>`;
    listHTMLElement.appendChild(li);
    const doneInput = document.createElement("input");
    doneInput.type = "checkbox";
    if (list === undone) {
      doneInput.addEventListener("change", () => {
        if (doneInput.checked) {
          // Move task from undone to done
          undone.splice(index, 1);
          done.push(task);
          reDrawTheList(undone, document.querySelector("#undone"));
          reDrawTheList(done, document.querySelector("#done"), true);
        }
      });
    } else {
      doneInput.checked = true;
      doneInput.addEventListener("change", () => {
        if (!doneInput.checked) {
          // Move task from done to undone
          done.splice(index, 1);
          undone.push(task);
          reDrawTheList(done, document.querySelector("#done"), true);
          reDrawTheList(undone, document.querySelector("#undone"));
        }
      });
    }
    li.appendChild(doneInput);
    const deleteAnchor = document.createElement("a");
    deleteAnchor.href = "#";
    deleteAnchor.textContent = "X";
    deleteAnchor.addEventListener("click", (event) => {
      event.preventDefault();
      if (isThisTheDoneList) {
        done.splice(index, 1);
      } else {
        undone.splice(index, 1);
      }
      li.remove();
    });

    li.appendChild(deleteAnchor);
    li.addEventListener("click", () => {});
  });
};
