export default function CommentList() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Starter Component</p>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">Comment List</h2>
      </div>
      <ul className="grid gap-3 text-sm text-slate-700">
        <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Sample item one</li>
        <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Sample item two</li>
        <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Sample item three</li>
      </ul>
    </section>
  );
}
