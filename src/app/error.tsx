'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an external service like Sentry or LogRocket
    console.error('App Runtime Error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center p-6 text-center">
      <div className="rounded-full bg-red-50 p-4 text-red-600 dark:bg-red-950/50">
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Something went wrong!
      </h2>
      <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-400">
        An unexpected error occurred. Our team has been notified, and we are looking into it.
      </p>
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => window.location.reload()}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          Refresh Page
        </button>
        <button
          onClick={() => reset()}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
