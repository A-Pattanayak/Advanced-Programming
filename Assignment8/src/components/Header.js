const Header = () => {
  return (
    <header className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
          Assignment 8
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Course Enrollment Dashboard
        </h1>
      </div>
      <p className="max-w-lg text-sm leading-6 text-slate-600">
        Students are stored internally in a Map, while each course collection is
        a Set to keep enrollment lookups fast and course names unique.
      </p>
    </header>
  );
};

export default Header;
