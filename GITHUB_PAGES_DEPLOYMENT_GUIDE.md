# GitHub Pages Deployment Guide

## Overview
This guide explains how to deploy a Next.js website to GitHub Pages using GitHub Actions, based on the successful deployment of your resume website.

## Prerequisites
- Next.js project with static export capability
- GitHub repository
- Project directory structure compatible with GitHub Actions

## Step 1: Configure Next.js for Static Export

### next.config.js Configuration
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // Enable static export
  trailingSlash: true,        // Add trailing slashes to URLs
  basePath: '/your-repo-name', // Replace with your repo name
  assetPrefix: '/your-repo-name', // Must match basePath
  images: {
    unoptimized: true,        // Required for static export
    domains: ['github.com', 'avatars.githubusercontent.com'], // Add any external image domains
  },
}

module.exports = nextConfig
```

### package.json Scripts
Ensure you have these scripts:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## Step 2: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Website to GitHub Pages

on:
  push:
    branches: [ main ]  # Change to your default branch
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: 'path/to/your/package-lock.json'  # Adjust path

      - name: Install dependencies
        working-directory: ./path/to/your/project  # Adjust path
        run: npm ci

      - name: Build Next.js app
        working-directory: ./path/to/your/project  # Adjust path
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./path/to/your/project/out  # Adjust path to build output

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Step 3: Repository Configuration

### Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select "GitHub Actions"
4. Save the configuration

### Branch Protection (Optional)
Consider protecting your main branch to prevent direct pushes that might break deployment.

## Step 4: Directory Structure Considerations

Your workflow paths must match your actual project structure:
- `cache-dependency-path`: Path to package-lock.json
- `working-directory`: Path to your Next.js project root
- Upload artifact path: Path to the build output directory (`out/` for static export)

## Common Issues and Solutions

### Issue: 404 on GitHub Pages
**Solution**: Ensure `basePath` and `assetPrefix` in `next.config.js` match your repository name exactly.

### Issue: Assets not loading
**Solution**: 
- Set `images.unoptimized: true` in next.config.js
- Verify `assetPrefix` is set correctly
- Check that all internal links use relative paths

### Issue: Workflow fails on npm ci
**Solution**: 
- Verify `cache-dependency-path` points to correct package-lock.json
- Ensure `working-directory` is set correctly in all steps
- Check that package-lock.json exists in the specified path

### Issue: Build succeeds but deployment fails
**Solution**:
- Verify the upload artifact path points to the correct output directory
- Check that `npm run build` actually generates the `out/` directory
- Ensure `output: 'export'` is set in next.config.js

## Deployment Triggers

The workflow triggers on:
- **Push to main branch**: Automatic deployment
- **Manual dispatch**: Deploy manually from Actions tab

## Monitoring Deployment

1. Go to **Actions** tab in your repository
2. Click on the latest workflow run
3. Monitor both "build" and "deploy" jobs
4. Check logs for any errors

## Testing Your Deployment

After successful deployment:
1. Visit `https://yourusername.github.io/your-repo-name`
2. Test navigation between pages
3. Verify all assets load correctly
4. Check responsive design on different devices

## Best Practices

1. **Test locally first**: Always test `npm run build` locally before pushing
2. **Use relative paths**: Avoid hardcoded URLs in your code
3. **Optimize images**: Use Next.js Image component when possible
4. **Monitor workflow runs**: Check Actions tab regularly for failed deployments
5. **Version control**: Keep workflow files in version control
6. **Environment-specific configs**: Consider different configs for development vs. production

## Your Specific Configuration

Based on your resume website setup:
- Repository structure: `Desktop/CV/` contains the Next.js project
- Build output: `out/` directory
- Base path: `/resume`
- Node version: 18
- Deployment branch: Configure based on your preferred branch

## Troubleshooting Commands

```bash
# Test build locally
npm run build

# Check if out directory is created
ls -la out/

# Verify next.config.js syntax
node -c next.config.js

# Test the built site locally
npx serve out
```