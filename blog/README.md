# richcorabbithole Blog

An Astro-powered blog about hyperfixations - exploring tech, science, history, gaming, and maker projects.

## Tech Stack

- **Astro** - Static site generator
- **Vue 3** - Component framework
- **TypeScript** - Type safety (strict mode)
- **Tailwind CSS v4** - Styling with Vite plugin
- **@tailwindcss/typography** - Beautiful blog post formatting

## Getting Started

### Development

```bash
npm run dev
```

Opens dev server at http://localhost:4321/richcorabbithole-site

### Build

```bash
npm run build
```

Builds static site to `dist/` directory

### Preview

```bash
npm run preview
```

Preview the production build locally

## Content Structure

### Blog Posts

Blog posts are stored as Markdown files in `src/content/blog/` and must follow the content schema defined in `src/content/config.ts`.

**Required frontmatter:**
```yaml
---
title: "Post Title"
description: "Brief description"
publishDate: 2026-02-09
hyperfixation: "tech" # tech, science, history, gaming, maker, or other
researchDepth: 3 # 1-5 scale
tags: ["tag1", "tag2"]
---
```

**Optional frontmatter:**
- `draft: true` - Hide from production
- `featured: true` - Mark as featured
- `coverImage: "/path/to/image.jpg"` - Cover image
- `sources: ["Source 1", "Source 2"]` - List of sources

### Research Depth Scale

1. **Surface** - Quick overview or introduction
2. **Shallow** - Basic exploration with some details
3. **Medium** - Solid dive with good coverage
4. **Deep** - Thorough investigation with nuanced understanding
5. **Abyssal** - Exhaustive exploration leaving no stone unturned

## Project Structure

```
blog/
├── public/           # Static assets
├── src/
│   ├── content/
│   │   ├── config.ts       # Content collections schema
│   │   └── blog/           # Blog posts (*.md)
│   ├── layouts/
│   │   └── Layout.astro    # Base layout
│   ├── pages/
│   │   ├── index.astro     # Homepage (blog list)
│   │   └── blog/
│   │       └── [...slug].astro  # Blog post pages
│   └── styles/
│       └── global.css      # Tailwind imports
├── astro.config.mjs  # Astro configuration
└── package.json
```

## Deployment

The blog is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by the workflow at `.github/workflows/deploy-blog.yml`.

**Configuration:**
- Site URL: `https://richcompton1705.github.io`
- Base path: `/richcorabbithole-site`

## Adding Posts Manually

1. Create a new `.md` file in `src/content/blog/`
2. Add required frontmatter
3. Write your content in Markdown
4. Commit and push to deploy

## Working with AI Agents

See the root TDD.md for instructions on using the AI agent system to create posts:

```bash
# From project root
node cli/agent.js publish "Topic Name" category depth
```

## Styling Notes

- Tailwind CSS v4 is configured as a Vite plugin
- Typography plugin provides beautiful default styling for blog post content
- Use utility classes for custom styling
- Global styles in `src/styles/global.css`

## Type Safety

TypeScript is configured in strict mode. Content collections are fully typed, providing IntelliSense for blog post frontmatter and content.

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Vue 3 in Astro](https://docs.astro.build/en/guides/integrations-guide/vue/)
