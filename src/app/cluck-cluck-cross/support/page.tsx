import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cluck Cluck Cross - Support",
  description: "Support and FAQ for Cluck Cluck Cross",
};

export default function Support() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="w-full max-w-2xl px-6 py-20">
        <h1 className="text-3xl font-semibold tracking-tight">
          Cluck Cluck Cross Support
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Hop. Die. Rewind. Repeat.
        </p>

        <section className="mt-12">
          <h2 className="text-xl font-medium">FAQ</h2>
          <div className="mt-4 space-y-8">
            <div>
              <h3 className="font-medium">How do I play?</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Tap to hop forward. Swipe left, right, or down to move in those
                directions. Dodge cars, ride logs across rivers, and avoid
                trees. Go as far as you can!
              </p>
            </div>

            <div>
              <h3 className="font-medium">What is the rewind mechanic?</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                You start each game with 3 rewind charges. When you die, the
                game automatically rewinds a couple seconds so you can try
                again. Pick up blue orbs on the map to earn extra rewind
                charges.
              </p>
            </div>

            <div>
              <h3 className="font-medium">How does scoring work?</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Your score is based on the furthest lane you reach, multiplied
                by your streak. Keep hopping forward without going backward to
                build your streak multiplier up to 4x.
              </p>
            </div>

            <div>
              <h3 className="font-medium">How do I unlock new skins?</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                There are 5 chicken skins to unlock by reaching score
                milestones: Classic (free), Golden (25 pts), Shadow (50 pts),
                Sakura (100 pts), and Ocean (200 pts).
              </p>
            </div>

            <div>
              <h3 className="font-medium">
                Why does an eagle keep attacking me?
              </h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                If you stand still for too long, an eagle will swoop down and
                grab you. Keep moving to stay safe!
              </p>
            </div>

            <div>
              <h3 className="font-medium">What devices are supported?</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Cluck Cluck Cross is available on iPhone running iOS 15 or
                later. The game runs in portrait orientation.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Is my progress saved?</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Yes. Your high score and selected skin are saved automatically
                on your device.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-medium">Privacy</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Cluck Cluck Cross does not collect, store, or share any personal
            data. All game data (high scores and skin selection) is stored
            locally on your device.
          </p>
        </section>
      </main>
    </div>
  );
}
