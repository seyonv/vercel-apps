import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preflop - Privacy Policy",
  description: "Privacy Policy for Preflop: 9-Max Cash Ranges",
};

export default function Privacy() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="w-full max-w-2xl px-6 py-20">
        <h1 className="text-3xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Preflop: 9-Max Cash Ranges
        </p>
        <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-500">
          Last updated: March 15, 2026
        </p>

        <div className="mt-12 space-y-10 text-zinc-600 dark:text-zinc-400">
          <section>
            <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
              Overview
            </h2>
            <p className="mt-2">
              Preflop is built with your privacy as a priority. The app operates
              entirely offline and does not collect, transmit, or share any
              personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
              Data Collection
            </h2>
            <p className="mt-2">
              This app does not collect any personal data. There are no
              analytics, tracking, or advertising frameworks. The app makes zero
              network requests — no data is ever sent to any server.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
              Local Storage
            </h2>
            <p className="mt-2">
              The app stores the following data locally on your device:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Drill statistics (accuracy, total attempts, streaks)</li>
              <li>Lesson completion progress</li>
              <li>UI preferences (last viewed mode, window position)</li>
            </ul>
            <p className="mt-2">
              This data never leaves your device and is not accessible to us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
              Third-Party Services
            </h2>
            <p className="mt-2">
              This app does not use any third-party services, SDKs, or APIs that
              collect user data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
              Children&apos;s Privacy
            </h2>
            <p className="mt-2">
              Since we do not collect any data, the app is safe for users of all
              ages. Note that the app is an educational tool and does not
              involve real-money gambling.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
              Changes to This Policy
            </h2>
            <p className="mt-2">
              If we update this privacy policy, the changes will be posted on
              this page with an updated date.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
