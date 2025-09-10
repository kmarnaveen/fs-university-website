# 🌐 Netlify Deployment Guide for FS University Website

This guide will help you deploy your FS University website to Netlify with proper configuration.

## 📋 Prerequisites

- GitHub repository: ✅ Already created at `https://github.com/kmarnaveen/fs-university-website`
- Netlify account (free): Sign up at [netlify.com](https://netlify.com)

## 🚀 Deployment Methods

### Method 1: Automatic Deployment via GitHub (Recommended)

1. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "New site from Git"
   - Choose "GitHub" and authorize Netlify
   - Select your repository: `kmarnaveen/fs-university-website`

2. **Configure Build Settings:**
   ```
   Build command: npm run build
   Publish directory: out
   ```

3. **Environment Variables (Optional):**
   - Add any environment variables in Netlify dashboard under Site settings > Environment variables

4. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Method 2: Manual Deployment

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Deploy the `out` folder:**
   - Drag and drop the `out` folder to netlify.com
   - Or use Netlify CLI: `netlify deploy --prod --dir=out`

## 📁 Configuration Files

Your repository includes these Netlify-specific files:

- `netlify.toml` - Main Netlify configuration
- `public/_headers` - Custom headers for security and caching
- `public/_redirects` - URL redirects and SPA fallback
- `.env.production` - Production environment variables
- `deploy.sh` - Automated deployment script

## 🔧 Build Configuration

The build process:
1. Runs `npm install` to install dependencies
2. Executes `npm run build` (Next.js build with static export)
3. Generates static files in the `out` directory
4. Deploys the `out` directory to Netlify CDN

## 🌍 Custom Domain (Optional)

After deployment, you can:
1. Go to Site settings > Domain management
2. Add your custom domain
3. Netlify will provide SSL certificate automatically

## 📊 Performance Features

Your site includes:
- ✅ Static site generation (SSG)
- ✅ Image optimization disabled for static export
- ✅ Security headers
- ✅ Caching headers for static assets
- ✅ Gzip compression (automatic)
- ✅ CDN distribution (automatic)

## 🔄 Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch triggers automatic deployment
- Pull requests create deploy previews
- Rollback to previous versions available in Netlify dashboard

## 🚨 Troubleshooting

**Build fails?**
- Check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

**Images not loading?**
- External images from Unsplash should work with current configuration
- For local images, place them in `public/` directory

**404 errors?**
- The `_redirects` file handles SPA routing
- For custom routes, update the redirects file

## 📞 Support

If you encounter issues:
1. Check Netlify build logs
2. Review the Next.js and Netlify documentation
3. Ensure all configuration files are properly committed

## 🎉 Your Site URL

After deployment, your site will be available at:
- Netlify subdomain: `https://your-site-name.netlify.app`
- Custom domain (if configured): `https://yourdomain.com`

---

Happy deploying! 🚀
