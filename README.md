# Pitaya Academy — Static Site

A lightweight, responsive static website for a coaching and mentoring practice. Designed to host on GitHub Pages without build tools.

## Pages
- `index.html` — Home
- `lego.html` — LEGO Coaching (FLL Explore & FLL Challenge)
- `college-prep.html` — College Prep Program
- `contact.html` — Contact & Inquiry
- `404.html` — Fallback for GitHub Pages

Assets live under `assets/` with a single CSS and small JS.

## Local preview
Open `index.html` in your browser. On Windows PowerShell:

```powershell
Start-Process .\index.html
```

## Publish to GitHub Pages
1. Create a new public repo on GitHub named `pitaya_academy` (or any name).
2. Push this folder’s contents to the repo root (not a subfolder).
3. In the GitHub repo, open Settings → Pages.
   - Source: `Deploy from a branch`
   - Branch: `main` (root) → Save
4. Wait 1–2 minutes. Your site will be at `https://<username>.github.io/<repo>/`.

### Push with PowerShell
```powershell
git init
git add -A
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

### Custom domain (optional)
1. In Settings → Pages, set your custom domain (e.g., `www.example.com`).
2. In your DNS, create these records:
   - `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or a `CNAME` for `www` → `<username>.github.io`
3. Add a `CNAME` file at repo root with your domain:

```text
www.example.com
```

## Edit nav highlighting
Add `class="active"` to the current page link in the header nav to highlight.

## Notes
- SEO: each page sets a concise `<title>` and `<meta name="description">`.
- Accessibility: skip link, visible focus states, semantic headings.
- Forms: the contact form is static. For email handling, connect a service (e.g., Formspree) or switch to GitHub Issues.
   - Replace the `action` URL in `contact.html` with your Formspree endpoint (e.g., `https://formspree.io/f/abcde123`).
   - If you prefer Netlify, restore `data-netlify` attributes and deploy on Netlify.
 - Crawling: update the placeholders in `robots.txt` and `sitemap.xml` with your live site URL (e.g., `https://<username>.github.io/<repo>/` or your custom domain).

## Suggested tool
If you prefer a visual editor for content updates without code, use **GitHub Pages + Netlify Forms (optional)** or **CloudCannon**. For pure code editing, **VS Code** with the built-in live preview works great.
# pitaya-academy.github.io
