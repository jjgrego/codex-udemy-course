interface NotePageProps {
  params: { id: string };
}

export const metadata = {
  title: 'Edit note — TinyNotes',
  description: 'View or edit a note.',
};

export default function NoteDetailPage({ params }: NotePageProps) {
  return (
    <section className='space-y-8'>
      <div className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'>
        <div className='space-y-3'>
          <p className='text-sm uppercase tracking-[0.24em] text-sky-600'>
            Note details
          </p>
          <h1 className='text-3xl font-semibold text-slate-900'>
            Note #{params.id}
          </h1>
          <p className='text-sm leading-6 text-slate-600'>
            This placeholder page represents the note editor and sharing
            controls.
          </p>
        </div>
      </div>

      <div className='grid gap-6 lg:grid-cols-[1.5fr_0.9fr]'>
        <div className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'>
          <div className='space-y-6'>
            <div>
              <label className='block text-sm font-medium text-slate-700'>
                Title
              </label>
              <input
                className='mt-3 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-sky-500'
                value={`Note ${params.id}`}
                readOnly
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-slate-700'>
                Content
              </label>
              <div className='mt-3 h-64 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-500'>
                Editor area placeholder for note content.
              </div>
            </div>
          </div>
        </div>

        <aside className='space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
          <div>
            <p className='text-sm uppercase tracking-[0.24em] text-slate-500'>
              Sharing
            </p>
            <p className='mt-3 text-sm leading-6 text-slate-600'>
              Sharing controls and public note state appear here.
            </p>
          </div>

          <div className='rounded-3xl bg-slate-50 p-5 text-sm text-slate-600'>
            Share URL placeholder
          </div>

          <button
            type='button'
            className='w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'>
            Toggle share
          </button>
        </aside>
      </div>
    </section>
  );
}
