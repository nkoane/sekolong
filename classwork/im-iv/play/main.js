let counter = 3;

while (counter > 0) {
  const multiplier = 2;
  const product = counter * multiplier;
  console.log('current value of counter', counter, 'multiplier', multiplier, 'product', product);
  counter--;
}

console.log(counter);

const students = [
  'Thabo',
  'Sipho',
  'Lerato',
  'Nthabiseng',
  'Siphiwe',
  'Gert',
  'Marikie',
  'Pete',
  'Nozipho',
  'Mahali',
  'Palesa',
  'Njabulo',
  'Tom',
  'Harry',
  'Jerry',
  'Dimakatso',
];
console.log(students);

for (let i = 0; i < students.length; i++) {
  console.log(i, 'Hello, ' + students[i] + '.');
}

function generateStudentNumber(course, year, index) {
  if (index < 10) {
    index = '00' + index;
  } else {
    index = '0' + index;
  }
  const studentNumber = `${course} ${year} ${index}`;
  return studentNumber;
}

students.forEach((student, index) => {
  const studentNumber = generateStudentNumber('NAM', 2022, index);
  console.log(`Good afternoon, ${student}.`, studentNumber);
});
