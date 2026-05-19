import data from "./data.json";

document.addEventListener("DOMContentLoaded", () => {
  const notesHTMLElement = document.getElementById("notes");

  data.notes.forEach((note, index) => {
    const ddNode = document.createElement("dd");

    const message = note.completed === true ? "done" : "not done";

    ddNode.innerHTML = `${note.name}: <em>${message}</em>`;
    notesHTMLElement.appendChild(ddNode);
  });
});
