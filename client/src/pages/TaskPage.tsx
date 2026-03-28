import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

export default function TaskPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 text-slate-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Build / Full-Stack</p>
          <h1 className="mt-2 text-3xl font-semibold">Commenting on Tasks</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">Tasks can be created and viewed, but there is no commenting feature. Add comments end-to-end with storage, API routes, rendering, and proper empty states.</p>
        </header>
      <CommentForm />
      <CommentList />
      </div>
    </main>
  );
}
