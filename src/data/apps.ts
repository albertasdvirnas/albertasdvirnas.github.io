/**
 * Things hosted under this site that are not part of its own design:
 * standalone HTML apps, demos, notebooks, slide decks.
 *
 * Two ways to add one:
 *  1. Drop a self-contained folder into public/apps/<name>/ (with an index.html).
 *     It is copied verbatim and served at /apps/<name>/.
 *  2. Turn on GitHub Pages (source: GitHub Actions or a branch) in any other repo;
 *     it is served at https://albertasdvirnas.github.io/<repo>/ automatically.
 * Then list it here so it appears on /lab.html.
 */
export type App = {
  title: string;
  href: string;          // '/apps/<name>/' or 'https://albertasdvirnas.github.io/<repo>/'
  desc: string;
  kind: 'App' | 'Demo' | 'Notebook' | 'Slides' | 'Data';
  date?: string;         // ISO month
};

export const apps: App[] = [];
