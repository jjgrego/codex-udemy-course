export const metadata = {
  title: 'TinyNotes — Home',
  description:
    'A minimal notes app with public sharing and authenticated note management.',
};

export default function Home() {
  return (
    <div className='min-h-screen bg-slate-50 px-6 py-12 text-slate-900'>
      <main className='mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm'>
        <p className='text-sm uppercase tracking-[0.24em] text-sky-600'>
          TinyNotes
        </p>
        <h1 className='mt-4 text-4xl font-semibold text-slate-900'>
          Your notes, simplified.
        </h1>
        <p className='mt-4 text-base leading-7 text-slate-600'>
          TinyNotes is a placeholder interface for authenticated note editing,
          listing, and public sharing.
        </p>

        <div className='mt-10 grid gap-4 sm:grid-cols-2'>
          <a
            href='/login'
            className='rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100'>
            Sign in
          </a>
          <a
            href='/register'
            className='rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100'>
            Register
          </a>
          <a
            href='/notes'
            className='rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100'>
            Notes dashboard
          </a>
          <a
            href='/s/your-public-token'
            className='rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100'>
            Shared note preview
          </a>
        </div>
      </main>
    </div>
  );
}
