export default function CommentForm() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Starter Component</p>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">Comment Form</h2>
      </div>
      <form className="grid gap-3">
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-slate-700">Primary field</span>
          <input className="rounded-lg border border-slate-300 px-3 py-2" defaultValue="Sample value" />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-slate-700">Secondary field</span>
          <textarea className="min-h-24 rounded-lg border border-slate-300 px-3 py-2" defaultValue="Lightweight starter content for the challenge preview." />
        </label>
        <div className="flex gap-2">
          <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white" type="button">Primary action</button>
          <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700" type="button">Secondary action</button>
        </div>
      </form>
    </section>
  );
}
