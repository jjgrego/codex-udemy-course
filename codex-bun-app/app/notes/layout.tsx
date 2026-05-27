import Link from 'next/link';

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900'>
      <header className='border-b border-slate-200 bg-white px-6 py-4 shadow-sm'>
        <div className='mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <p className='text-xs uppercase tracking-[0.24em] text-sky-600'>
              TinyNotes
            </p>
            <h1 className='text-2xl font-semibold'>Notes</h1>
          </div>
          <nav className='flex flex-wrap items-center gap-3 text-sm text-slate-600'>
            <Link
              className='rounded-full border border-slate-200 bg-slate-50 px-4 py-2 transition hover:bg-slate-100'
              href='/notes'>
              My notes
            </Link>
            <Link
              className='rounded-full border border-slate-200 bg-slate-50 px-4 py-2 transition hover:bg-slate-100'
              href='/notes/new'>
              New note
            </Link>
            <Link
              className='rounded-full border border-slate-200 bg-slate-50 px-4 py-2 transition hover:bg-slate-100'
              href='/login'>
              Logout
            </Link>
          </nav>
        </div>
      </header>

      <main className='mx-auto max-w-6xl px-6 py-8'>{children}</main>
    </div>
  );
}
