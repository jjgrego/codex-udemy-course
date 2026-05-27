export const metadata = {
  title: 'Register — TinyNotes',
  description: 'Create a TinyNotes account',
};

export default function RegisterPage() {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900 px-6 py-12'>
      <main className='mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'>
        <h1 className='text-3xl font-semibold'>Create account</h1>
        <p className='mt-2 text-sm text-slate-600'>
          Start using TinyNotes with an email and password.
        </p>

        <form className='mt-8 space-y-5'>
          <div>
            <label
              className='block text-sm font-medium text-slate-700'
              htmlFor='name'>
              Name
            </label>
            <input
              id='name'
              name='name'
              type='text'
              placeholder='Your name'
              className='mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-sky-500'
            />
          </div>

          <div>
            <label
              className='block text-sm font-medium text-slate-700'
              htmlFor='email'>
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='you@example.com'
              className='mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-sky-500'
            />
          </div>

          <div>
            <label
              className='block text-sm font-medium text-slate-700'
              htmlFor='password'>
              Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              placeholder='••••••••'
              className='mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-sky-500'
            />
          </div>

          <button
            type='button'
            className='w-full rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700'>
            Create account
          </button>
        </form>

        <p className='mt-6 text-center text-sm text-slate-600'>
          Already have an account?{' '}
          <a href='/login' className='font-semibold text-sky-600'>
            Sign in
          </a>
        </p>
      </main>
    </div>
  );
}
