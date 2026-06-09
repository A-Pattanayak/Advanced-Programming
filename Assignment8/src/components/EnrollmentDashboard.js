import BenchmarkPanel from "./BenchmarkPanel";
import CourseFilter from "./CourseFilter";
import CourseSummary from "./CourseSummary";
import Header from "./Header";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";
import useStudentRegistry from "../hooks/useStudentRegistry";

const EnrollmentDashboard = () => {
  const {
    addStudent,
    allCourses,
    benchResults,
    filterCourse,
    removeStudent,
    runBenchmark,
    setFilterCourse,
    studentCount,
    students,
  } = useStudentRegistry();

  return (
    <main className="min-h-screen px-4 py-8 text-slate-900 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Header />

        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <StudentForm onAddStudent={addStudent} />
          <CourseSummary courses={allCourses} />
        </div>

        <div className="mt-4 space-y-4">
          <CourseFilter
            courses={allCourses}
            filterCourse={filterCourse}
            onFilterChange={setFilterCourse}
          />

          <StudentTable
            students={students}
            totalStudents={studentCount}
            filterCourse={filterCourse}
            onRemove={removeStudent}
          />

          <BenchmarkPanel
            results={benchResults}
            onRunBenchmark={runBenchmark}
          />
        </div>
      </div>
    </main>
  );
};

export default EnrollmentDashboard;
