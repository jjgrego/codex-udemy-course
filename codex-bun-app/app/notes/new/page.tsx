export const metadata = {
  title: 'New note — TinyNotes',
  description: 'Create a new note.',
};

export default function NewNotePage() {
  return (
    <section className='space-y-8'>
      <div className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'>
        <div className='space-y-3'>
          <p className='text-sm uppercase tracking-[0.24em] text-sky-600'>
            New note
          </p>
          <h1 className='text-3xl font-semibold text-slate-900'>
            Create a new note
          </h1>
          <p className='text-sm leading-6 text-slate-600'>
            This placeholder page represents the editor where you will compose a
            new note.
          </p>
        </div>
      </div>

      <div className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'>
        <div className='space-y-6'>
          <div>
            <label className='block text-sm font-medium text-slate-700'>
              Title
            </label>
            <input
              className='mt-3 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-sky-500'
              placeholder='Untitled note'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-slate-700'>
              Content
            </label>
            <div className='mt-3 h-64 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-500'>
              Note editor placeholder.
            </div>
          </div>

          <button
            type='button'
            className='rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700'>
            Save note
          </button>
        </div>
      </div>
    </section>
  );
}
