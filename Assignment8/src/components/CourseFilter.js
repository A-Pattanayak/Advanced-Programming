const CourseFilter = ({ courses, filterCourse, onFilterChange }) => {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <label className="text-sm font-bold text-slate-800" htmlFor="course">
          Filter by course
        </label>
        <select
          id="course"
          className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 md:min-w-72"
          value={filterCourse}
          onChange={(event) => onFilterChange(event.target.value)}
        >
          <option value="">All Students</option>
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>

        {filterCourse && (
          <button
            className="h-10 rounded-md border border-slate-300 px-4 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
            onClick={() => onFilterChange("")}
          >
            Clear
          </button>
        )}

        <p className="text-sm text-slate-500 md:ml-auto">
          Filtering by course: <strong className="text-slate-800">O(n)</strong>
        </p>
      </div>
    </section>
  );
};

export default CourseFilter;
