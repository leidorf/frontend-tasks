// frontend task_1

const date = new Date().toLocaleString();
const title = "Yavuzlar Öğrenci Not Hesaplama";
const grades = { AA: 4.0, BA: 3.5, BB: 3.0, CB: 2.5, CC: 2.0, DC: 1.5, DD: 1.0, FF: 0.0 };
const courses = {
  PEN101: { ECTS: 6, Lecturer: "Ahmet", f2f: true },
  PEN102: { ECTS: 6, Lecturer: "Juan", f2f: true },
  BLE101: { ECTS: 4, Lecturer: "Rock", f2f: false },
  BLE102: { ECTS: 4, Lecturer: "Rock", f2f: false },
  RCN101: { ECTS: 3, Lecturer: "Charmy", f2f: false },
  RCN102: { ECTS: 3, Lecturer: "Jammy", f2f: true },
  DCM101: { ECTS: 2, Lecturer: "Zeyda", f2f: false },
  DCM102: { ECTS: 2, Lecturer: "Tivrusky", f2f: false },
};
// Ogrenci notlari
const studentGrades = {
  PEN101: grades.BA,
  PEN102: grades.BB,
  BLE101: grades.CB,
  BLE102: grades.CC,
  RCN101: grades.DC,
  RCN102: grades.CB,
  DCM101: grades.AA,
  DCM102: grades.AA,
};

function calculateGrade(grades, courses) {
  let totalGrade = 0;
  let totalCredit = 0;
  let average = 0;

  for (const key in grades) {
    totalGrade += grades[key] * courses[key].ECTS;
    totalCredit += courses[key].ECTS;
  }

  average = totalGrade / totalCredit;

  return average;
}

const totalGrade = calculateGrade(studentGrades, courses);

function checkGrades(grades) {
  const failedCourses = {};
  for (key in grades) {
    failedCourses[key] = grades[key] > 2 ? "✅ Geçti" : "❌ Kaldı";
  }

  return failedCourses;
}

function findBadGrades(grades) {
  let badGrades = {};

  for (const key in grades) {
    if (grades[key] < totalGrade) {
      badGrades[key] = grades[key];
    }
  }

  return badGrades;
}

const badGrades = findBadGrades(studentGrades);
const failedCourses = checkGrades(studentGrades);

console.log(title);
console.log(date);
console.log("Ders Durumları");
console.log(failedCourses);
console.log("Not Ortalamanız");
console.log(totalGrade.toFixed(2));
console.log("Ortalamayı Düşüren Notlar");
console.log(badGrades);
