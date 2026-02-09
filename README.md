# richcorabbithole-site

Primary site infrastructure for richcorabbithole.com - A modern, fast blog built with Astro and Tailwind CSS.

[![Deploy to GitHub Pages](https://github.com/richcompton1705/richcorabbithole-site/actions/workflows/deploy-blog.yml/badge.svg)](https://github.com/richcompton1705/richcorabbithole-site/actions/workflows/deploy-blog.yml)

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Astro for optimal performance
- 🎨 **Modern Styling** - Tailwind CSS v4 for beautiful, responsive design
- 📝 **Content Collections** - Type-safe content management with Astro's content collections
- 🔄 **Vue Integration** - Interactive components powered by Vue 3
- 🚀 **Automated Deployment** - CI/CD with GitHub Actions
- 📱 **Fully Responsive** - Mobile-first design approach

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) v5.17.1
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4.1.18
- **UI Components**: [Vue](https://vuejs.org/) v3.5.28
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/richcompton1705/richcorabbithole-site.git
   cd richcorabbithole-site
   ```

2. **Navigate to the blog directory**
   ```bash
   cd blog
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃 Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321/richcorabbithole-site`

## 🔨 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the site for production
- `npm run preview` - Preview the production build locally
- `npm run astro` - Run Astro CLI commands

## 📁 Project Structure

```
richcorabbithole-site/
├── .github/
│   └── workflows/
│       └── deploy-blog.yml    # GitHub Actions deployment workflow
├── blog/
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── content/          # Blog posts and content collections
│   │   │   ├── blog/         # Blog post markdown files
│   │   │   └── config.ts     # Content collection schemas
│   │   ├── layouts/          # Layout components
│   │   ├── pages/            # Page routes
│   │   └── styles/           # Global styles
│   ├── astro.config.mjs      # Astro configuration
│   ├── package.json          # Project dependencies
│   └── tsconfig.json         # TypeScript configuration
└── README.md
```

## 🚀 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch. The deployment workflow:

1. Builds the Astro site
2. Uploads the build artifacts
3. Deploys to GitHub Pages

**Live Site**: [https://richcompton1705.github.io/richcorabbithole-site](https://richcompton1705.github.io/richcorabbithole-site)

## ✍️ Adding Blog Posts

1. Create a new markdown file in `blog/src/content/blog/`
2. Add frontmatter with title, description, date, and other metadata
3. Write your content in markdown
4. The post will automatically appear on the site

Example frontmatter:
```yaml
---
title: "Your Post Title"
description: "A brief description"
pubDate: 2026-02-09
author: "Your Name"
tags: ["tag1", "tag2"]
---
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Richard Compton**
- GitHub: [@richcompton1705](https://github.com/richcompton1705)

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [GitHub Pages](https://pages.github.com/)
