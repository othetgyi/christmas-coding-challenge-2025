This project was developed within the framework of the Christmas Coding Challenge 2025, organised by Women Coding Community.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Dependency Hygiene

This project follows strict dependency hygiene to reduce the risk of supply‑chain attacks and ensure reproducible installs.

### Installing dependencies

- **Never use** `npm install` without a clear reason once the lockfile exists.
- **Always use**:

  ```bash
  npm ci --ignore-scripts
  ```

  This installs exactly what is defined in `package-lock.json` and prevents all npm lifecycle scripts (`preinstall`, `install`, `postinstall`, etc.) from running.

### Lockfile and version pinning

- All dependencies are **pinned to exact versions** in `package.json`.
- The entire dependency tree (including transitive dependencies) is pinned via `package-lock.json`.
- `package-lock.json` **must be committed** and its diffs **must be reviewed** in PRs.
- Do not edit `package-lock.json` by hand.

### Adding or updating dependencies

When you need to add or change a dependency:

1. Install it with an explicit version:

   ```bash
   npm install <package-name>@<version> --save
   # or
   npm install <package-name>@<version> --save-dev
   ```

2. This will update `package-lock.json`.
3. Review the changes to both `package.json` and `package-lock.json`.
4. Run tests before committing.

### Lifecycle scripts

- Lifecycle scripts from dependencies (e.g. `preinstall`, `postinstall`) are **blocked by default** using:

  ```bash
  npm ci --ignore-scripts
  ```

- The repository should not define `preinstall`, `install`, or `postinstall` scripts in `package.json`. Setup and project tasks are run via explicit npm scripts (e.g. `npm run build`, `npm test`).

If a change requires enabling lifecycle scripts, it must be:

- Justified in the PR description.
- Reviewed and approved by a maintainer.
- Run using a one‑off command (e.g. `npm ci --ignore-scripts=false`) rather than changing the default behavior.
