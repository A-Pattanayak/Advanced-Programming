import { useMemo, useState } from "react";
import { BENCHMARK_SIZES, COURSES } from "../constants/courseConstants";
import { SEED_STUDENTS } from "../constants/studentData";
import {
  createStudentMap,
  filterStudentsByCourse,
  getSortedStudentsByGpa,
  getUniqueCourses,
  makeStudents,
} from "../utils/studentUtils";

const useStudentRegistry = () => {
  const [studentMap, setStudentMap] = useState(() =>
    createStudentMap(SEED_STUDENTS)
  );
  const [nextId, setNextId] = useState(SEED_STUDENTS.length + 1);
  const [filterCourse, setFilterCourse] = useState("");
  const [benchResults, setBenchResults] = useState(null);

  const allCourses = useMemo(() => getUniqueCourses(studentMap), [studentMap]);

  const sortedStudents = useMemo(
    () => getSortedStudentsByGpa(studentMap),
    [studentMap]
  );

  const visibleStudents = useMemo(
    () => filterStudentsByCourse(sortedStudents, filterCourse),
    [sortedStudents, filterCourse]
  );

  const addStudent = ({ name, enrolledCourses, gpa }) => {
    const student = {
      id: nextId,
      name,
      enrolledCourses: new Set([...enrolledCourses]),
      gpa,
    };

    setStudentMap((prevStudentMap) => {
      return new Map([...prevStudentMap, [nextId, student]]);
    });
    setNextId((currentId) => currentId + 1);
  };

  const removeStudent = (id) => {
    setStudentMap((prevStudentMap) => {
      const nextStudentMap = new Map([...prevStudentMap]);
      nextStudentMap.delete(id);
      return nextStudentMap;
    });
  };

  const runBenchmark = () => {
    const results = BENCHMARK_SIZES.map((size) => {
      const data = makeStudents(size);

      const sortStart = performance.now();
      [...data].sort((a, b) => b.gpa - a.gpa);
      const sortMs = performance.now() - sortStart;

      const filterStart = performance.now();
      data.filter((student) => student.enrolledCourses.has(COURSES[0]));
      const filterMs = performance.now() - filterStart;

      return {
        size,
        sortMs: sortMs.toFixed(3),
        filterMs: filterMs.toFixed(3),
      };
    });

    setBenchResults(results);
  };

  return {
    allCourses,
    benchResults,
    filterCourse,
    setFilterCourse,
    studentCount: studentMap.size,
    students: visibleStudents,
    addStudent,
    removeStudent,
    runBenchmark,
  };
};

export default useStudentRegistry;
