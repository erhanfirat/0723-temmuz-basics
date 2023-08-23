const rakamlar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const ciftRakamlar = rakamlar.filter((rakam) => {
  return rakam % 2 == 0;
});

console.log("rakamlar: ", rakamlar);
console.log("ciftRakamlar: ", ciftRakamlar);

// Object Array
const students = [
  { name: "Ali", grade1: 12, grade2: 99 },
  { name: "Ahmet", grade1: 70, grade2: 95 },
  { name: "Zehra", grade1: 100, grade2: 85 },
  { name: "Ömer", grade1: 78, grade2: 92 },
  { name: "Gülbeyaz", grade1: 92, grade2: 87 },
  { name: "Şerafettin", grade1: 40, grade2: 50 },
  { name: "Hayrettin", grade1: 42, grade2: 38 },
];

const succesfullStudents = students.filter((student, i) => {
  console.log(
    `students dizisinin ${i}. elemanı ${student.name} inceleniyor...`
  );
  return typeof student === "object" && student.grade1 > 80;
});

console.log("students: ", students);
console.log("succesfullStudents: ", succesfullStudents);

const studentNameList = students.map((student) => {
  return student.name;
});

console.log("studentNameList: ", studentNameList);

// { name: "Hayrettin", grade1: 42, grade2: 38 },
//  { name: "Hayrettin", grade1: 42, grade2: 38, avr: 40 },

const studentsWithAvr = students.map((student) => {
  student.avr = (student.grade1 + student.grade2) / 2;
  return student;
});

console.log("studentsWithAvr: ", studentsWithAvr);

const totalAvr = studentsWithAvr.reduce((avrTotal, student) => {
  return avrTotal + student.avr;
}, 0);

console.log("totalAvr: ", totalAvr);
console.log("genel ortalama: ", totalAvr / studentsWithAvr.length);

/**
 * i      avrTotal        student.avr     avrTotal + student.avr
 * -------------------------------------------------------------
 * 0      0               55.5            55.5
 * 1      55.5            82.5            138
 * 2      138             92.5            230.5
 * 3      230.5           85
 */

const theMostSuccesfullStudent = studentsWithAvr.reduce(
  (maxStudent, student) => {
    //return student.avr > maxStudent.avr ? student : maxStudent;
    if (student.avr > maxStudent.avr) {
      return student;
    } else {
      return maxStudent;
    }
  },
  { avr: 0 } // studentsWithAvr[0]
);

console.log("theMostSuccesfullStudent: ", theMostSuccesfullStudent);
