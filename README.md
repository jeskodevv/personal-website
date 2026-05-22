# site.v0.7 — Engineering Archive

A living archive of systems, experiments, and ideas built in public.

## Architecture

This is a **filesystem-driven content system** built with Astro. The filesystem itself acts as the database.

### Content Types

| Type | Path | Schema |
|------|------|--------|
| Projects | `src/content/projects/` | title, slug, status, tags, description, started, updated, version, featured, archived, draft |
| Journals | `src/content/journals/` | title, date, tags, project, draft |
| Notes | `src/content/notes/` | date, tags, draft |
| Writings | `src/content/writings/` | title, description, date, updated, tags, featured, draft |
| Lab | `src/content/lab/` | title, status, started, hypothesis, conclusion, tags, draft |
| Toolbox | `src/content/toolbox/` | name, version, category, why, alternatives, date |
| Archives | `src/content/archives/` | title, reason, date, originalType, tags |

### How to Add Content

1. **New Project**: Create `src/content/projects/my-project/index.md` with frontmatter
2. **New Journal**: Create `src/content/journals/2026-05-22.md`
3. **New Note**: Create `src/content/notes/my-note.md`
4. **New Writing**: Create `src/content/writings/my-article.md`

Pages are auto-generated. No manual registration needed.

### Development

```bash
npm install
npm run dev
```

### Deploy to GitHub Pages

Push to `main` branch. GitHub Actions workflow included.

## Philosophy

- The filesystem is the database
- Markdown is the interface
- Timestamps create continuity
- Imperfection is authentic
