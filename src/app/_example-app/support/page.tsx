import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Example App - Support",
  description: "Support page for Example App",
};

export default function Support() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="w-full max-w-2xl px-6 py-20">
        <h1 className="text-3xl font-semibold tracking-tight">
          Example App Support
        </h1>

        <section className="mt-10">
          <h2 className="text-xl font-medium">Contact</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            For support, email us at{" "}
            <a
              href="mailto:support@example.com"
              className="underline underline-offset-4"
            >
              support@example.com
            </a>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-medium">FAQ</h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-medium">How do I get started?</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Download the app from the App Store and follow the onboarding
                steps.
              </p>
            </div>
            <div>
              <h3 className="font-medium">How do I report a bug?</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Send us an email with a description of the issue and steps to
                reproduce it.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
