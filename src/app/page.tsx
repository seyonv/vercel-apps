import Link from "next/link";

const apps: { name: string; slug: string; description: string }[] = [
  // Add your apps here as you publish them:
  // { name: "My App", slug: "my-app", description: "A brief description" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="w-full max-w-2xl px-6 py-20">
        <h1 className="text-3xl font-semibold tracking-tight">Apps</h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Support and information for our apps.
        </p>

        {apps.length === 0 ? (
          <p className="mt-12 text-zinc-400 dark:text-zinc-500">
            No apps yet. Add your first app to the list in{" "}
            <code className="text-sm">src/app/page.tsx</code>.
          </p>
        ) : (
          <ul className="mt-12 space-y-6">
            {apps.map((app) => (
              <li key={app.slug}>
                <Link
                  href={`/${app.slug}/support`}
                  className="block rounded-lg border border-zinc-200 p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
                >
                  <h2 className="text-lg font-medium">{app.name}</h2>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    {app.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
