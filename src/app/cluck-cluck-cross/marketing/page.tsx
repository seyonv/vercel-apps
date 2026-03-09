import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cluck Cluck Cross",
  description:
    "A Crossy Road-inspired arcade game with a time rewind twist. Hop, dodge, and rewind your way to victory.",
};

export default function Marketing() {
  return (
    <div className="flex min-h-screen flex-col items-center font-sans">
      <main className="w-full max-w-2xl px-6 py-24 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-400">
          Available on iPhone
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          Cluck Cluck Cross
        </h1>
        <p className="mt-2 text-xl text-zinc-500 dark:text-zinc-400">
          Hop. Die. Rewind. Repeat.
        </p>

        <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          A charming arcade game where you guide a chicken through endless
          traffic, rivers, and forests. Made a mistake? Rewind time and try
          again.
        </p>

        <div className="mt-10">
          <a
            href="#"
            className="inline-block rounded-full bg-foreground px-8 py-3 font-medium text-background transition-opacity hover:opacity-90"
          >
            Download on the App Store
          </a>
        </div>

        <div className="mt-20 space-y-16 text-left">
          <section>
            <h2 className="text-2xl font-semibold">Rewind Time</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Start with 3 rewind charges. When you get hit, time reverses and
              you get another shot. Collect blue orbs along the way to earn more
              rewinds.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Endless Adventure</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Navigate through procedurally generated lanes that get
              progressively harder. Journey through Spring Meadows, Deep
              Forests, Autumn landscapes, and Snow biomes as you push further.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Build Your Streak</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Keep hopping forward to build combo multipliers up to 4x. Every
              backward step resets your streak — risk and reward in every move.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Unlock Skins</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Earn 5 unique chicken skins as you hit score milestones — from the
              Classic white chicken to the elusive Ocean skin at 200 points.
            </p>
          </section>
        </div>

        <div className="mt-20 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <a
            href="/cluck-cluck-cross/support"
            className="text-sm text-zinc-500 underline underline-offset-4 hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            Support
          </a>
        </div>
      </main>
    </div>
  );
}
