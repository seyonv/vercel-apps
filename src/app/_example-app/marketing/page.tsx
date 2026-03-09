import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Example App",
  description: "Example App - a brief tagline here",
};

export default function Marketing() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="w-full max-w-2xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Example App</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          A brief description of what your app does and why people should
          download it.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="inline-block rounded-full bg-foreground px-8 py-3 font-medium text-background transition-colors hover:opacity-90"
          >
            Download on the App Store
          </a>
        </div>
      </main>
    </div>
  );
}
