interface SharedNotePageProps {
  params: { token: string };
}

export const metadata = {
  title: 'Shared note — TinyNotes',
  description: 'Public note view.',
};

export default function SharedNotePage({ params }: SharedNotePageProps) {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900 px-6 py-12'>
      <main className='mx-auto w-full max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'>
        <p className='text-sm uppercase tracking-[0.24em] text-sky-600'>
          Public note
        </p>
        <h1 className='mt-3 text-3xl font-semibold text-slate-900'>
          Shared note view
        </h1>
        <p className='mt-2 text-sm leading-6 text-slate-600'>
          This public route would render a sanitized shared note for token{' '}
          <strong>{params.token}</strong>.
        </p>

        <div className='mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-slate-600'>
          Shared note content placeholder.
        </div>
      </main>
    </div>
  );
}
