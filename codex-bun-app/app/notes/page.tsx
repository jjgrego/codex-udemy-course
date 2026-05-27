export const metadata = {
  title: 'Your notes — TinyNotes',
  description: 'List your notes.',
};

export default function NotesPage() {
  return (
    <section className='space-y-8'>
      <div className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'>
        <div className='flex items-center justify-between gap-4'>
          <div>
            <p className='text-sm uppercase tracking-[0.24em] text-sky-600'>
              Notes
            </p>
            <h1 className='mt-2 text-3xl font-semibold text-slate-900'>
              Your notes
            </h1>
          </div>
          <a
            className='inline-flex items-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700'
            href='/notes/new'>
            Create note
          </a>
        </div>
      </div>

      <div className='grid gap-4 lg:grid-cols-2'>
        <article className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
          <div className='mb-4 flex items-center justify-between gap-4'>
            <div>
              <p className='text-sm font-medium text-slate-900'>
                Meeting notes
              </p>
              <p className='text-xs text-slate-500'>Updated 2 days ago</p>
            </div>
            <span className='rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700'>
              Shared
            </span>
          </div>
          <p className='text-sm leading-6 text-slate-600'>
            A quick summary placeholder for a note preview.
          </p>
        </article>

        <article className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
          <div className='mb-4 flex items-center justify-between gap-4'>
            <div>
              <p className='text-sm font-medium text-slate-900'>
                Project ideas
              </p>
              <p className='text-xs text-slate-500'>Updated 4 days ago</p>
            </div>
            <span className='rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700'>
              Private
            </span>
          </div>
          <p className='text-sm leading-6 text-slate-600'>
            A placeholder description for a second note.
          </p>
        </article>
      </div>
    </section>
  );
}
