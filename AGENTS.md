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
- Store newly supplied app media as Lovable Assets pointers and use responsive variants to keep page downloads small.
- Bundle all SSR dependencies with `ssr.noExternal: true` during builds because the published Worker cannot resolve npm packages at runtime; leave development resolution to Vite so CommonJS dependencies work in preview.
- Bind Vite preview to `127.0.0.1` so build-time prerender requests use the same IPv4 loopback address as the temporary server instead of an unreachable IPv6 localhost address.
