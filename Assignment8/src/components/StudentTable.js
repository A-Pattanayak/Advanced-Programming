import { getGpaTone } from "../utils/studentUtils";

const StudentTable = ({ students, totalStudents, filterCourse, onRemove }) => {
  return (
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-1 border-b border-slate-200 p-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Students Sorted by GPA
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {students.length} of {totalStudents} students shown
          </p>
        </div>
        <p className="text-sm text-slate-500">
          Sorting: <strong className="text-slate-800">O(n log n)</strong>
        </p>
      </div>

      {students.length === 0 ? (
        <p className="p-5 text-sm text-slate-500">No students found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-4 py-3 font-bold">Rank</th>
                <th className="px-4 py-3 font-bold">ID</th>
                <th className="px-4 py-3 font-bold">Name</th>
                <th className="px-4 py-3 font-bold">GPA</th>
                <th className="px-4 py-3 font-bold">Enrolled Courses</th>
                <th className="px-4 py-3 font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.map((student, index) => (
                <tr key={student.id} className="transition hover:bg-slate-50">
                  <td className="px-4 py-4 font-semibold text-slate-500">
                    {index + 1}
                  </td>
                  <td className="px-4 py-4 text-slate-500">{student.id}</td>
                  <td className="px-4 py-4 font-bold text-slate-900">
                    {student.name}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex min-w-14 justify-center rounded-md px-2 py-1 text-xs font-bold ring-1 ${getGpaTone(
                        student.gpa
                      )}`}
                    >
                      {student.gpa.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-2">
                      {Array.from(student.enrolledCourses).map((course) => (
                        <span
                          key={course}
                          className={`rounded-md border px-2 py-1 text-xs font-semibold ${
                            course === filterCourse
                              ? "border-cyan-300 bg-cyan-50 text-cyan-800"
                              : "border-slate-200 bg-slate-50 text-slate-600"
                          }`}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <button
                      className="h-9 rounded-md border border-rose-200 px-3 text-xs font-bold text-rose-700 transition hover:bg-rose-50"
                      onClick={() => onRemove(student.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default StudentTable;
