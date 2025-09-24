# Pitaya Academy — Static Site

A lightweight, responsive static website for a coaching and mentoring practice. Designed to host on GitHub Pages without build tools.

## Pages
- `index.html` — Home
- `lego.html` — LEGO Robotics (FLL Explore & FLL Challenge)
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
4. Wait 1–2 minutes. Your site will be at `https://pitayaacademy.github.io/`.

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
   - Already set to `https://pitayaacademy.github.io/` in this repo.
 - Branding: replace `assets/img/logo-mark.svg` (icon) and `assets/img/logo-full.svg` (optional wordmark) with your own.
    - Adjust theme colors in `assets/css/styles.css` under the `:root` variables `--brand` and `--accent`.

## Brand kit (quick)
- Receiving inquiry emails (Formspree)

<!-- Google Forms option removed; using on-site form (Formspree) and mailto link instead. -->

### Direct email option
The contact page also includes a direct `mailto:` link to `pitayaacademy25@gmail.com` with a prefilled subject and body.
- Edit or replace the address and default text in `contact.html` under the `#email-us` section.
1. Create a free account at https://formspree.io and create a new form.
2. Copy your endpoint (looks like `https://formspree.io/f/abcde123`).
3. In `contact.html`, replace the `action` on `#contact-form` with your endpoint.
4. Commit and push. After deploy, submit the form once to confirm email delivery.
5. If spam becomes an issue, keep the honeypot (already included) and optionally enable Formspree spam protection.

- Files
   - Mark (color): `assets/img/logo-mark-pro.svg` (use in headers and app icons)
   - Mark (mono): `assets/img/logo-mark-mono.svg` (use on busy backgrounds or when color printing is limited)
   - Mark (outline): `assets/img/logo-mark-outline.svg` (on dark backgrounds when lighter look is preferred)
   - Wordmark: `assets/img/logo-full-pro.svg` (presentations, docs)
- Colors
   - Brand: `#f26b3a` → `#ea2f56` gradient
   - Accent (leaf/circuit): `#5ec1a1` → `#2ec59c`
   - Text: `#e6edf3`; Background: `#0d0f12`
- Minimum sizes
   - Mark: 20px height minimum; Wordmark: 120px width minimum
- Clear space
   - Keep at least half the mark’s height of padding around the logo
- Don’t
   - Don’t stretch or skew
   - Don’t change seed/circuit proportions
   - Don’t place on low-contrast backgrounds without switching to mono or outline

## Suggested tool
If you prefer a visual editor for content updates without code, use **GitHub Pages + Netlify Forms (optional)** or **CloudCannon**. For pure code editing, **VS Code** with the built-in live preview works great.
# pitaya-academy.github.io
