// a collection of students
function generateStudentNumber(index) {
  if (index < 10) {
    return "00" + index;
  } else if (index < 100) {
    return "0" + index;
  }
  return index;
}
const newStudents = [
  "Mina NaWe Dali",
  "Meet you by the river",
  "iThambo le Kenthakhi",
  "Sweety Lavo",
  "A'But Bula-Boot",
];

const numberOfStudents = newStudents.length; // 4
const studentNumberStartingIndex = 0;
const studentNumberEndingIndex = studentNumberStartingIndex + numberOfStudents; // 27 + 4
const genders = ["L", "G", "B", "T", "Q"];
const currentClass = {
  name: "Interactive Media",
  code: "NIM",
  year: new Date().getFullYear(),
  students: [],
  // need a function that generates a student number
  generateStudentNumber: function (index) {
    return this.code + this.year + generateStudentNumber(index + 1);
  },
};
function getRandomGender(genders) {
  return genders[Math.floor(Math.random() * genders.length)];
}
for (
  let index = studentNumberStartingIndex;
  index < studentNumberEndingIndex;
  index++
) {
  const studentNumber =
    currentClass.code + currentClass.year + generateStudentNumber(index + 1);
  const student = {
    index,
    number: currentClass.generateStudentNumber(index),
    name: newStudents[index],
    sex: ["M", "F"][Math.floor(Math.random() * 2)],
    gender: getRandomGender(genders),
  };
  currentClass.students.push(student);
}

document.addEventListener("DOMContentLoaded", () => {
  const currentClassEl = document.getElementById("currentClass");
  const studentList = currentClassEl.querySelector(".students ol");
  console.log(studentList);
  currentClassEl.querySelector("dt.className").textContent = currentClass.name;
  currentClassEl.querySelector("dd.classDetails").textContent =
    currentClass.code + " " + currentClass.year;
  for (let student of currentClass.students) {
    const li = document.createElement("li");
    li.textContent =
      student.number + ": " + student.name + ": " + student.gender;
    studentList.appendChild(li);
  }
});
