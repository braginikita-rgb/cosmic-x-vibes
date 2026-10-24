<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep active tour dates and venues in `src/data/shows.ts` and reuse them in the blog and concert listings so reschedules stay consistent.
- Store newly supplied app media as files in `public/media` (the site is also hosted outside Lovable, where Lovable Assets URLs do not load) and use responsive variants to keep page downloads small.
- Bundle all SSR dependencies with `ssr.noExternal: true` during builds because the published Worker cannot resolve npm packages at runtime; leave development resolution to Vite so CommonJS dependencies work in preview.
- Prerender static pages in `scripts/mirror-static-output.mjs` by calling the built server entry in-process (TanStack prerender stays disabled) because external hosting build environments refuse connections to a temporary local server; add new routes to its page list.
