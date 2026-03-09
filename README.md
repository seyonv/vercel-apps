# App Pages

Next.js project for hosting support and marketing pages for iOS/Mac apps. Deployed on Vercel.

## Adding a new app

1. Create a folder under `src/app/` with your app's slug (e.g. `src/app/my-app/`)
2. Add a `support/page.tsx` inside it (required by App Store)
3. Optionally add a `marketing/page.tsx` for a landing page
4. Add the app to the list in `src/app/page.tsx`

See `src/app/_example-app/` for a template (prefixed with `_` so Next.js won't route it).

## URLs

For an app with slug `my-app`:

- **Support:** `yourdomain.com/my-app/support`
- **Marketing:** `yourdomain.com/my-app/marketing`

## Development

```bash
npm run dev
```
