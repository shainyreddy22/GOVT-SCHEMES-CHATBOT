#!/bin/bash

# Deployment Helper Script for Gov Schemes India

echo "🚀 Gov Schemes India - Deployment Helper"
echo "========================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "📦 Building frontend for production..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Frontend build successful!"
    echo "📁 Build files are in the 'dist' directory"
else
    echo "❌ Frontend build failed!"
    exit 1
fi

echo ""
echo "🔧 Next steps for deployment:"
echo ""
echo "1. Backend (Railway):"
echo "   - Push code to GitHub"
echo "   - Connect repository to Railway"
echo "   - Set root directory to 'backend'"
echo "   - Add environment variables:"
echo "     * GEMINI_API_KEY=your-api-key"
echo "     * NODE_ENV=production"
echo "     * FRONTEND_URL=https://your-domain.vercel.app"
echo ""
echo "2. Frontend (Vercel):"
echo "   - Connect repository to Vercel"
echo "   - Add environment variable:"
echo "     * VITE_API_URL=https://your-backend.railway.app"
echo "   - Deploy"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT.md"
echo ""
echo "🎉 Ready for deployment!"