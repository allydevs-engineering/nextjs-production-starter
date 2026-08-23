'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Critical Root Error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50">
        <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md rounded-2xl border border-slate-100 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <h1 className="text-3xl font-extrabold tracking-tight text-red-600 dark:text-red-500">
              Critical System Error
            </h1>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
              The application encountered a fatal layout exception and could not initialize.
            </p>
            <button
              onClick={() => reset()}
              className="mt-6 w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Attempt Application Recovery
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
