# vbird

Marketing site and content backend for vbird, structured as two independent projects in one repo: a static marketing site and a Sanity CMS workspace. The two are not currently wired together — the site's pages are static HTML, and the CMS has no schemas defined yet.

## Architecture

```
├── index.html, about/, learn/, privacy/, terms/   # Public pages (static HTML)
├── src/
│   ├── css/            # Tailwind source (tailwind-input.css) and compiled output (tailwind.css)
│   ├── js/              # main.js (browser enhancements), speed-insights.js (performance telemetry)
│   ├── Images/           # Static image asset library
│   └── fonts/
├── tailwind.config.js    # Tailwind build configuration
├── package.json          # Root build workspace
├── vercel.json           # Vercel deployment/hosting configuration
└── vibird/                # Sanity Studio workspace
    ├── sanity.config.ts   # Sanity Studio application
    ├── sanity.cli.ts       # Sanity CLI setup
    ├── schemaTypes/index.ts # Document schema registry (currently empty)
    └── package.json         # CMS dependencies (Node workspace)
```

### Static marketing site

- Public pages are plain HTML documents styled by the compiled Tailwind stylesheet.
- `main.js` provides client-side browser enhancements and initializes `speed-insights.js` for performance telemetry.
- The static image asset library is referenced directly by the public pages.
- The root `package.json` runs the build tooling (Tailwind) and the result deploys to Vercel per `vercel.json`.

### Styling pipeline

- `tailwind.config.js` configures the build.
- `tailwind-input.css` is the CSS source, compiled to `tailwind.css`, which styles the public pages.

### Sanity CMS workspace (`vibird/`)

- `sanity.config.ts` is the Sanity Studio application, supported by `sanity.cli.ts` and the CMS dependencies in `vibird/package.json`.
- `schemaTypes/index.ts` is the document schema registry that the Studio registers — currently empty, no schemas defined yet.
- The Studio connects to the hosted Sanity content platform for content storage.
- **Not yet integrated** with the static site — the marketing pages don't currently pull content from Sanity.

## Development

Static site:
```bash
npm install
npm run watch:css   # watch and rebuild Tailwind CSS during development
npm run build        # production build (minified CSS)
```

Sanity Studio:
```bash
cd vibird
npm install
npm run dev           # local Studio at http://localhost:3333
npm run deploy         # deploy the Studio
```

## Deployment

The static site deploys to Vercel using the build command and settings in `vercel.json`.
