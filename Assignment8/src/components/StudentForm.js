import { useState } from "react";
import { COURSES } from "../constants/courseConstants";

const StudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [gpa, setGpa] = useState("");
  const [selectedCourses, setSelectedCourses] = useState(new Set());
  const [error, setError] = useState("");

  const toggleCourse = (course) => {
    setSelectedCourses((prevCourses) => {
      const nextCourses = new Set([...prevCourses]);

      if (nextCourses.has(course)) {
        nextCourses.delete(course);
      } else {
        nextCourses.add(course);
      }

      return nextCourses;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const parsedGpa = Number.parseFloat(gpa);

    if (!trimmedName) {
      setError("Name is required.");
      return;
    }

    if (Number.isNaN(parsedGpa) || parsedGpa < 0 || parsedGpa > 10) {
      setError("GPA must be between 0 and 10.");
      return;
    }

    if (selectedCourses.size === 0) {
      setError("Select at least one course.");
      return;
    }

    onAddStudent({
      name: trimmedName,
      enrolledCourses: selectedCourses,
      gpa: parsedGpa,
    });

    setName("");
    setGpa("");
    setSelectedCourses(new Set());
    setError("");
  };

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-bold text-slate-900">Add New Student</h2>
        <p className="mt-1 text-sm text-slate-500">
          Choose one or more courses before enrollment.
        </p>
      </div>

      {error && (
        <p className="mb-3 rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-3 md:grid-cols-[1fr_160px]">
          <input
            className="h-11 rounded-md border border-slate-300 px-3 text-sm outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Student name"
          />
          <input
            className="h-11 rounded-md border border-slate-300 px-3 text-sm outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
            type="number"
            min="0"
            max="10"
            step="0.01"
            value={gpa}
            onChange={(event) => setGpa(event.target.value)}
            placeholder="GPA (0-10)"
          />
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {COURSES.map((course) => (
            <label
              key={course}
              className="flex min-h-10 items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm font-medium text-slate-700"
            >
              <input
                className="h-4 w-4 accent-cyan-700"
                type="checkbox"
                checked={selectedCourses.has(course)}
                onChange={() => toggleCourse(course)}
              />
              <span>{course}</span>
            </label>
          ))}
        </div>

        <button className="h-10 rounded-md bg-cyan-700 px-4 text-sm font-bold text-white transition hover:bg-cyan-800">
          Add Student
        </button>
      </form>
    </section>
  );
};

export default StudentForm;
