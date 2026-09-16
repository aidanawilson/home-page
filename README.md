# Apogee Lab Homepage

Static landing page for **apogeelab.org**.

This project is intentionally framework-free so it can be hosted directly with
GitHub Pages.

## Files

```text
/
├── index.html
├── styles.css
├── script.js
├── CNAME
├── README.md
└── assets/
```

## GitHub Pages setup

1. Create a GitHub repository.
2. Copy the contents of this folder into the repository root.
3. Push the repository to GitHub.
4. Open:

   **Repository Settings → Pages**

5. Under **Build and deployment**, choose:

   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`

6. Save.

## Custom domain

The included `CNAME` file contains:

```text
apogeelab.org
```

GitHub Pages will use this for the custom domain once your DNS records are
configured.

## Things to change

### YouTube

Open `script.js` and replace:

```js
const youtubeUrl = "https://www.youtube.com/";
```

with your actual YouTube channel URL.

### Engineering Portfolio

The Engineering Portfolio tile is intentionally not clickable yet.

When the portfolio domain is ready:

1. Change the `<article>` to an `<a>`.
2. Add the desired `href`.
3. Change `COMING SOON` to `LIVE`.
4. Change the bottom text to something like `Explore →`.

### Project descriptions

All tile text is directly inside `index.html`, so it can be edited without
touching the CSS.

## Adding images later

Place images inside `/assets/`, for example:

```text
assets/
├── trade-preview.webp
├── study-preview.webp
└── math-museum-preview.webp
```

Then reference them from `index.html` or CSS.

## Design goals

- fast
- responsive
- mobile-friendly
- no external dependencies
- easy to copy into GitHub Pages repos
- easy to maintain
