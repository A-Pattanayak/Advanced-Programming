const CourseSummary = ({ courses }) => {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-base font-bold text-slate-900">
          Unique Courses
        </h2>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
          {courses.length}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {courses.map((course) => (
          <span
            key={course}
            className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800"
          >
            {course}
          </span>
        ))}
      </div>
    </section>
  );
};

export default CourseSummary;
