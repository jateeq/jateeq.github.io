# Jawad Ateeq's Blog 🌟 

Beautiful dark mode blog with starlit sky theme, built with Docusaurus.

## 🚀 Quick Start

### First Time Setup

```bash
make install
```

### Development

```bash
make dev
```

→ Opens at **http://localhost:3000/**

### Production

```bash
git push
```

→ Auto-deploys to **https://jawadateeq.com/**

## 🛠️ One-time Setup

### GitHub Pages

1. Go to [Repository Settings → Pages](https://github.com/jateeq/console/settings/pages)
2. Set Source to **"GitHub Actions"**
3. Add Custom Domain: **jawadateeq.com**
4. Enable **"Enforce HTTPS"**
5. Save

### DNS (at your domain provider)

Add these DNS records for jawadateeq.com:

```
A Record: @ → 185.199.108.153
A Record: @ → 185.199.109.153  
A Record: @ → 185.199.110.153
A Record: @ → 185.199.111.153
CNAME: www → jateeq.github.io
```

## 📋 All Commands

```bash
make install      # Install dependencies (first time only)
make dev          # Start local development server
make build        # Build for GitHub Pages
make build-custom # Build for custom domain (jawadateeq.com)
make clean        # Clean build artifacts
make help         # Show this help
```

## 🎨 Features

- Dark mode with animated starlit sky background
- Minimalist design focused on content readability
- Responsive design for all devices
- Automated GitHub Pages deployment
- Environment-aware configuration system

---

**That's it!** Just `make dev` for development and `git push` for production. ✨
