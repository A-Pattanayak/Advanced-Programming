import { COURSES } from "../constants/courseConstants";

export const createStudentMap = (students) => {
  return new Map(students.map((student) => [student.id, student]));
};

export const getUniqueCourses = (studentMap) => {
  const courseSet = Array.from(studentMap.values()).reduce((acc, student) => {
    student.enrolledCourses.forEach((course) => acc.add(course));
    return acc;
  }, new Set());

  return Array.from(courseSet).sort();
};

export const getSortedStudentsByGpa = (studentMap) => {
  return Array.from(studentMap.values()).sort((a, b) => b.gpa - a.gpa);
};

export const filterStudentsByCourse = (students, course) => {
  return students.filter(
    (student) => !course || student.enrolledCourses.has(course)
  );
};

export const makeStudents = (size) => {
  return Array.from({ length: size }, (_, index) => {
    const enrolledCourses = COURSES.filter(() => Math.random() > 0.5);

    return {
      id: index + 1,
      name: `Student_${index + 1}`,
      enrolledCourses: new Set(
        enrolledCourses.length > 0 ? enrolledCourses : [COURSES[0]]
      ),
      gpa: Math.round(Math.random() * 1000) / 100,
    };
  });
};

export const getGpaTone = (gpa) => {
  if (gpa >= 9) return "bg-emerald-100 text-emerald-800 ring-emerald-200";
  if (gpa >= 7) return "bg-sky-100 text-sky-800 ring-sky-200";
  if (gpa >= 5) return "bg-amber-100 text-amber-800 ring-amber-200";
  return "bg-rose-100 text-rose-800 ring-rose-200";
};
