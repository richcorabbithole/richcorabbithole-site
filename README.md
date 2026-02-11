# richcorabbithole-site

Personal blog site for richcorabbithole.com built with Astro and Tailwind CSS.

[![Deploy to GitHub Pages](https://github.com/richcorabbithole/richcorabbithole-site/actions/workflows/deploy-blog.yml/badge.svg)](https://github.com/richcorabbithole/richcorabbithole-site/actions/workflows/deploy-blog.yml)

**Live site**: [https://richcorabbithole.com](https://richcorabbithole.com)

## Technology Stack

- **Framework**: Astro v5.17.1
- **Styling**: Tailwind CSS v4.1.18
- **Interactive Components**: Vue v3.5.28
- **Build Tool**: Vite
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

## Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/richcorabbithole/richcorabbithole-site.git
cd richcorabbithole-site/blog
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The site runs at `http://localhost:4321/richcorabbithole-site`

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## Project Structure

```
richcorabbithole-site/
├── .github/workflows/
│   └── deploy-blog.yml        # Automated deployment configuration
├── blog/
│   ├── public/                # Static assets (favicon, images, etc.)
│   ├── src/
│   │   ├── content/
│   │   │   ├── blog/          # Blog post markdown files
│   │   │   └── config.ts      # Content collection type definitions
│   │   ├── components/        # Astro and Vue components
│   │   ├── layouts/           # Page layout templates
│   │   ├── pages/             # Route pages
│   │   └── styles/            # Global CSS
│   ├── astro.config.mjs       # Astro configuration
│   └── package.json           # Dependencies and scripts
├── LICENSE
└── README.md
```

## Writing Blog Posts

Create a new markdown file in `blog/src/content/blog/` with the following frontmatter structure:

```yaml
---
title: "Post Title"
description: "Brief description"
publishDate: "2026-02-09"
hyperfixation: "tech" # one of: tech, science, history, gaming, maker, other
researchDepth: 3 # 1-5
tags: ["tag1", "tag2"]
draft: false # optional
featured: false # optional
coverImage: "/images/example.jpg" # optional
sources: # optional
  - ["https://example.com/reference"]
---
```

Posts are automatically included in the site build using Astro's content collections.

## Deployment

The site deploys automatically to GitHub Pages when changes are pushed to the main branch. The GitHub Actions workflow handles the build and deployment process.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Author

Richard Compton ([@richcorabbithole](https://github.com/richcorabbithole))
