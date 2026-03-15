import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preflop - Support",
  description: "Support and FAQ for Preflop: 9-Max Cash Ranges",
};

export default function Support() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="w-full max-w-2xl px-6 py-20">
        <h1 className="text-3xl font-semibold tracking-tight">
          Preflop Support
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          9-Max Cash Ranges &middot; 200bb GTO Range Trainer
        </p>

        <section className="mt-12">
          <h2 className="text-xl font-medium">FAQ</h2>
          <div className="mt-4 space-y-8">
            <div>
              <h3 className="font-medium">What is Preflop?</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Preflop is a GTO-solved preflop range trainer for 9-max cash
                games at 200 big blind depth. It helps you learn, study, and
                drill optimal preflop decisions for every position.
              </p>
            </div>

            <div>
              <h3 className="font-medium">What are the three modes?</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                <strong>Learn</strong> walks you through guided lessons on
                preflop strategy. <strong>Study</strong> lets you browse the
                full hand grid for any position and scenario.{" "}
                <strong>Drill</strong> tests you with randomized hands and
                tracks your accuracy.
              </p>
            </div>

            <div>
              <h3 className="font-medium">What positions are covered?</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                All 9 positions: UTG, UTG+1, UTG+2, LJ, HJ, CO, BTN, SB, and BB.
                Each position has open-raise ranges and 3-bet response ranges.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Where do the ranges come from?</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                The ranges are synthesized from GTO solver outputs and
                established poker training resources for 200bb cash game play.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Does the app require internet?</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                No. Preflop is completely offline. All range data is included in
                the app and no network connection is needed.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Is my progress saved?</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Yes. Drill stats (accuracy, streaks), lesson completion, and
                your preferences are saved locally on your Mac.
              </p>
            </div>

            <div>
              <h3 className="font-medium">What devices are supported?</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Preflop is available on Mac running macOS 12 (Monterey) or
                later.
              </p>
            </div>

            <div>
              <h3 className="font-medium">How do I navigate between modes?</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Use the sidebar buttons or keyboard shortcuts: Cmd+1 for Learn,
                Cmd+2 for Study, Cmd+3 for Drill.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-medium">Privacy</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Preflop does not collect, store, or share any personal data. The app
            makes zero network requests. All data is stored locally on your
            device. See our full{" "}
            <a href="/preflop/privacy" className="underline underline-offset-4">
              privacy policy
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
