const Students = ["Samiksha", "Salipa", "Susmita", "Dikxya", "Rita"];
console.log("Before Seat planning:");

const newStudents = [];

noOfStudents = Students.length;
for (i = 0; i < noOfStudents; i++) {
  console.log("Seat no " + (i + 1) + " " + Students[i]);
}
//console.log(noOfStudents);
while (noOfStudents != 0) {
  let randomSheatNum = Math.floor(Math.random() * noOfStudents);
  //console.log(randomSheatNum)
  const randomPickStudent = Students[randomSheatNum];
  newStudents.push(randomPickStudent);
  Students.splice(randomSheatNum, 1);
  //console.log(Students)

  noOfStudents--;
}
console.log("After Seat planning:");
for (i = 0; i < newStudents.length; i++) {
  console.log("Seat no " + (i + 1) + " " + newStudents[i]);
}
