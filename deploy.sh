#!/bin/bash

# Netlify Deploy Script for FS University Website
# This script prepares and deploys the website to Netlify

echo "🚀 Starting FS University Website Deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the project root directory."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run linting
echo "🔍 Running ESLint..."
npm run lint

# Build the project
echo "🏗️  Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Static files are ready in the 'out' directory"
    echo "🌐 Ready for Netlify deployment!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo "🎉 Deployment preparation complete!"
echo ""
echo "Next steps:"
echo "1. Commit and push your changes to GitHub"
echo "2. Connect your GitHub repository to Netlify"
echo "3. Set the build command to: npm run netlify-build"
echo "4. Set the publish directory to: out"
echo "5. Deploy!"
