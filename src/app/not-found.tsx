import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center p-6 text-center">
      <p className="text-base font-semibold text-blue-600 dark:text-blue-500">404</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base text-slate-500 dark:text-slate-400">
        Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
