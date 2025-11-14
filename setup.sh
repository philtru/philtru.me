#!/bin/bash

# Portfolio Repository Setup Script
# =================================

echo "🚀 Setting up your portfolio repository..."
echo ""

# Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "ℹ️  Git repository already initialized"
fi

echo ""
echo "📝 Next steps to push to GitHub:"
echo "================================"
echo ""
echo "1. Create a new repository on GitHub (https://github.com/new)"
echo "   - Name it 'portfolio' or your preferred name"
echo "   - Don't initialize with README (we already have one)"
echo ""
echo "2. Run these commands:"
echo ""
echo "   # Add all files to git"
echo "   git add ."
echo ""
echo "   # Commit your files"
echo "   git commit -m \"Initial commit: Terminal-themed developer portfolio\""
echo ""
echo "   # Add your GitHub repository as remote"
echo "   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git"
echo ""
echo "   # Push to GitHub"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   - Go to Settings → Pages in your repository"
echo "   - Select 'Deploy from a branch'"
echo "   - Choose 'main' branch and '/ (root)' folder"
echo "   - Save and wait for deployment"
echo ""
echo "4. Your portfolio will be live at:"
echo "   https://YOUR_USERNAME.github.io/portfolio/"
echo ""
echo "================================"
echo "✨ Setup complete! Good luck with your portfolio!"
