export default function NotFound() {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900 px-6 py-16'>
      <main className='mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm'>
        <p className='text-sm uppercase tracking-[0.24em] text-sky-600'>404</p>
        <h1 className='mt-4 text-4xl font-semibold text-slate-900'>
          Page not found
        </h1>
        <p className='mt-4 text-sm leading-6 text-slate-600'>
          The page you are looking for does not exist or has been moved.
        </p>
        <div className='mt-8 flex justify-center'>
          <a
            href='/'
            className='rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700'>
            Return home
          </a>
        </div>
      </main>
    </div>
  );
}
