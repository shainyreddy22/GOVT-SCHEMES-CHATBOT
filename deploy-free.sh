#!/bin/bash

# Free Deployment Script for Gov Schemes India
# Deploys to Render.com (Backend) + Vercel (Frontend) - $0.00 cost

echo "🆓 Gov Schemes India - FREE Deployment Helper"
echo "=============================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "🔍 Checking project structure..."

# Check if backend directory exists
if [ ! -d "backend" ]; then
    echo "❌ Error: backend directory not found"
    exit 1
fi

# Check if backend has package.json
if [ ! -f "backend/package.json" ]; then
    echo "❌ Error: backend/package.json not found"
    exit 1
fi

echo "✅ Project structure verified"

echo ""
echo "📦 Building frontend for production..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Frontend build successful!"
else
    echo "❌ Frontend build failed!"
    exit 1
fi

echo ""
echo "🔧 Checking backend dependencies..."
cd backend
npm install --production
if [ $? -eq 0 ]; then
    echo "✅ Backend dependencies verified!"
    cd ..
else
    echo "❌ Backend dependency issues found!"
    cd ..
    exit 1
fi

echo ""
echo "🎯 FREE Deployment Options:"
echo ""
echo "📋 RECOMMENDED: Render + Vercel (Most Reliable)"
echo "  Backend:  https://render.com (750 hours/month free)"
echo "  Frontend: https://vercel.com (unlimited free)"
echo ""
echo "🚀 ALTERNATIVE: Cyclic + Vercel (No Sleep Mode)" 
echo "  Backend:  https://cyclic.sh (unlimited free)"
echo "  Frontend: https://vercel.com (unlimited free)"
echo ""
echo "💰 TOTAL COST: $0.00 forever"
echo ""

echo "🔗 Quick Deploy Links:"
echo ""
echo "1️⃣  Backend on Render:"
echo "   🌐 https://render.com"
echo "   📁 Root Directory: backend"
echo "   🔧 Build Command: npm install"
echo "   ▶️  Start Command: npm start"
echo ""
echo "2️⃣  Backend on Cyclic (Alternative):"
echo "   🌐 https://app.cyclic.sh"
echo "   📁 Root Directory: backend"
echo "   🚀 One-click deploy from GitHub"
echo ""
echo "3️⃣  Frontend on Vercel:"
echo "   🌐 https://vercel.com"
echo "   📁 Root Directory: ./"
echo "   ⚡ Framework: Vite (auto-detected)"
echo ""

echo "🔐 Environment Variables Needed:"
echo ""
echo "Backend (Render/Cyclic):"
echo "  GEMINI_API_KEY=your-actual-api-key"
echo "  NODE_ENV=production"
echo "  FRONTEND_URL=https://your-project.vercel.app"
echo ""
echo "Frontend (Vercel):"
echo "  VITE_API_URL=https://your-backend.onrender.com"
echo "  # OR"
echo "  VITE_API_URL=https://your-backend.cyclic.sh"
echo ""

echo "📚 Need detailed help?"
echo "  📖 Read: FREE-DEPLOYMENT.md"
echo "  🆘 Issues: Check troubleshooting section"
echo ""

echo "⏱️  Estimated deploy time:"
echo "  🕐 Backend: 5 minutes"
echo "  🕐 Frontend: 3 minutes"
echo "  🕐 Total: 8 minutes"
echo ""

echo "🎉 Ready for FREE deployment!"
echo "💡 Tip: Start with backend first, then frontend"
echo ""

# Check if git repo exists
if [ -d ".git" ]; then
    echo "✅ Git repository detected"
    echo "📤 Don't forget to push to GitHub before deploying!"
    echo "   git add ."
    echo "   git commit -m \"Ready for free deployment\""
    echo "   git push origin main"
else
    echo "⚠️  Git repository not found"
    echo "💡 Initialize git repo for easier deployment:"
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m \"Initial commit\""
    echo "   git remote add origin https://github.com/yourusername/govt-schemes-chatbot.git"
    echo "   git push -u origin main"
fi

echo ""
echo "🌟 Happy FREE hosting! 🆓"