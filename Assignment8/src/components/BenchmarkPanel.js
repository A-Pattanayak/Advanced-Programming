const BenchmarkPanel = ({ results, onRunBenchmark }) => {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Complexity Benchmark
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            A small browser-side comparison for sort and course filter.
          </p>
        </div>
        <button
          className="h-10 rounded-md bg-slate-900 px-4 text-sm font-bold text-white transition hover:bg-slate-700"
          onClick={onRunBenchmark}
        >
          Run Benchmark
        </button>
      </div>

      {results ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-4 py-3 font-bold">Students</th>
                <th className="px-4 py-3 font-bold">Sort O(n log n)</th>
                <th className="px-4 py-3 font-bold">Filter O(n)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {results.map((result) => (
                <tr key={result.size}>
                  <td className="px-4 py-3 font-bold text-slate-800">
                    {result.size.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    {result.sortMs} ms
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    {result.filterMs} ms
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="rounded-md bg-slate-50 px-3 py-3 text-sm text-slate-500">
          Click Run Benchmark to measure time at different input sizes.
        </p>
      )}
    </section>
  );
};

export default BenchmarkPanel;
