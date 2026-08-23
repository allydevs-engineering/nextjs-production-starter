export default function Loading() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-6">
      <div className="flex flex-col items-center gap-4">
        {/* Tailored production spinner */}
        <div className="relative h-12 w-12">
          <div className="absolute h-12 w-12 rounded-full border-4 border-slate-200 dark:border-slate-800" />
          <div className="absolute h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        </div>
        <p className="animate-pulse text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
          Loading resources...
        </p>
      </div>
    </div>
  );
}
