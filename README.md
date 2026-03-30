# efamelody.github.io

## Project Overview

Personal project website based on Jekyll Freelancer theme. Includes: portfolio, blog posts, static pages, and configuration for GitHub Pages deployment.

## Repository Structure

- `_config.yml` : Jekyll metadata and site settings.
- `index.html`, `index.markdown`: Landing page and content entry.
- `about.markdown`, `404.html`, `feed.xml` : static site pages.
- `style.css` : base stylesheet.

- `_layouts/` : layout templates used by Jekyll.
  - `default.html` : main page structure.
  - `style.css` : layout-specific styles.

- `_includes/` : reusable partial templates.
  - `header.html`, `nav.html`, `footer.html`, `portfolio_grid.html`, etc.
  - `css/` : theme CSS files.

- `_posts/` : blog post content in Markdown format with images.
  - `2023-11-21-Chessboard-Diagram-Classifier.markdown`
  - `2024-05-17-Robotics.markdown`
  - `2024-06-30-Domino-Game.markdown`
  - `2024-10-02-EdFlix.markdown`
  - `2024-10-02-Interactive-Cartoon-Generator.markdown`
  - `2024-10-02-Trains-of-Sheffield.markdown`
  - `2025-09-26-Financial-Dashboard.markdown`

- `css/`, `js/`, `img/`, `assets/` : theme and content assets.

- `.github/workflows/jekyll-gh-pages.yml` : CI for GitHub Pages deployment.
- `Gemfile`, `Gemfile.lock` : Ruby dependencies.
- `freelancer-theme-jekyll.gemspec`: gemspec for theme packaging.

## Assets Details

- `assets/files` : PDF attachments including dissertation and reports.
- `img/portfolio` : portfolio project thumbnails.
- `img/icons` : technology icon assets.
- `js` : front-end behavior scripts (Bootstrap, jQuery, validation, animations, toggles).

## Local Development

1. Install Ruby + Bundler.
2. `bundle install`
3. `bundle exec jekyll serve --watch`
4. Open `http://localhost:4000`.

## Deploy

- GitHub Pages with `.github/workflows/jekyll-gh-pages.yml`.
- Push to `main` (or default branch) to auto-deploy.

## Notes

- The site is built from a Jekyll portfolio template and extended with custom project posts.
- Add new posts under `_posts/` and update portfolio images if required.
