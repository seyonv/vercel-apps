import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preflop: 9-Max Cash Ranges",
  description:
    "A GTO-solved preflop range trainer for 9-max cash games. Learn, study, and drill optimal preflop decisions.",
};

export default function Marketing() {
  return (
    <div className="flex min-h-screen flex-col items-center font-sans">
      <main className="w-full max-w-2xl px-6 py-24 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-400">
          Available on Mac
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight">Preflop</h1>
        <p className="mt-2 text-xl text-zinc-500 dark:text-zinc-400">
          200bb GTO Range Trainer for 9-Max Cash
        </p>

        <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Master preflop strategy with GTO-solved ranges for every position.
          Learn the theory, study the grids, and drill until it&apos;s second
          nature.
        </p>

        <div className="mt-10">
          <a
            href="#"
            className="inline-block rounded-full bg-foreground px-8 py-3 font-medium text-background transition-opacity hover:opacity-90"
          >
            Download on the Mac App Store
          </a>
        </div>

        <div className="mt-20 space-y-16 text-left">
          <section>
            <h2 className="text-2xl font-semibold">Learn</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Step-through guided lessons that explain why ranges shift between
              positions, how suited hands gain value, and when to 3-bet. Build
              real understanding, not just memorization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Study</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Browse the full 13x13 hand grid for all 9 positions. View
              open-raise and 3-bet response ranges with color-coded frequencies.
              Click any hand to see its exact action breakdown.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Drill</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Test yourself with randomized hands across positions and
              scenarios. Track your accuracy, build streaks, and identify your
              weak spots. The fastest way to internalize ranges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Completely Offline</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              No account needed. No internet required. No data collected. Just a
              focused tool for serious players who want to improve their preflop
              game.
            </p>
          </section>
        </div>

        <div className="mt-20 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <a
            href="/preflop/support"
            className="text-sm text-zinc-500 underline underline-offset-4 hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            Support
          </a>
          <span className="mx-3 text-zinc-300 dark:text-zinc-700">|</span>
          <a
            href="/preflop/privacy"
            className="text-sm text-zinc-500 underline underline-offset-4 hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            Privacy Policy
          </a>
        </div>
      </main>
    </div>
  );
}
