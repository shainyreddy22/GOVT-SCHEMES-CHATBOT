# 🚀 Deployment Guide - Gov Schemes India

This guide will help you deploy the Gov Schemes India project online using Vercel (frontend) and Railway (backend).

## 📋 Prerequisites

- GitHub account
- Vercel account (free)
- Railway account (free)
- Google API key for Gemini AI

## 🏗️ Architecture

- **Frontend**: React + Vite → Vercel
- **Backend**: Node.js + Express → Railway

## 🔧 Step 1: Backend Deployment (Railway)

### 1.1 Create Railway Project

1. Go to [Railway.app](https://railway.app/)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Select the `backend` folder as the root directory

### 1.2 Environment Variables

In Railway dashboard, go to Variables tab and add:

```bash
GEMINI_API_KEY=your-actual-gemini-api-key
NODE_ENV=production
PORT=3001
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

### 1.3 Deploy

- Railway will automatically detect and deploy your Node.js app
- Note down the deployment URL (e.g., `https://backend-production-xxxx.up.railway.app`)

## 🎨 Step 2: Frontend Deployment (Vercel)

### 2.1 Create Vercel Project

1. Go to [Vercel.com](https://vercel.com/)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Set the root directory to `/` (project root)

### 2.2 Environment Variables

In Vercel dashboard, go to Settings → Environment Variables and add:

```bash
VITE_API_URL=https://your-backend-railway-url.up.railway.app
```

### 2.3 Build Settings

Vercel should automatically detect:
- **Framework Preset**: Vite
- **Build Command**: `vite build`
- **Output Directory**: `dist`

### 2.4 Deploy

- Click "Deploy"
- Vercel will build and deploy your frontend

## 🔄 Step 3: Update CORS Configuration

After both deployments:

1. Update the backend `.env` on Railway:
   ```bash
   FRONTEND_URL=https://your-actual-vercel-domain.vercel.app
   ```

2. Redeploy the backend to apply CORS changes

## 🧪 Step 4: Testing

### Test the deployed application:

1. **Frontend URL**: `https://your-project.vercel.app`
2. **Backend URL**: `https://your-backend.up.railway.app`

### Test endpoints:
- `GET /api/health` - Health check
- `POST /api/chat` - Chatbot functionality
- `GET /api/schemes` - Schemes data
- `POST /api/schemes/search` - AI search

## 📱 Step 5: Domain Configuration (Optional)

### Custom Domain for Frontend:
1. In Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

### Custom Domain for Backend:
1. In Railway dashboard → Settings → Domains
2. Add your custom domain
3. Configure DNS records

## 🔒 Security Checklist

- ✅ Gemini API key is set in Railway environment variables
- ✅ CORS is configured with specific frontend URL
- ✅ Environment variables are not committed to Git
- ✅ HTTPS is enabled on both frontend and backend

## 🚀 Automatic Deployments

Both platforms support automatic deployments:

- **Railway**: Deploys automatically on push to main branch
- **Vercel**: Deploys automatically on push to main branch

## 🛠️ Troubleshooting

### Common Issues:

1. **CORS Errors**: 
   - Check FRONTEND_URL in Railway environment variables
   - Ensure VITE_API_URL points to correct Railway URL

2. **API Key Errors**:
   - Verify GEMINI_API_KEY is set correctly in Railway
   - Check Google AI Studio for API key validity

3. **Build Failures**:
   - Check build logs in Vercel/Railway dashboard
   - Ensure all dependencies are in package.json

4. **404 Errors on Refresh**:
   - Vercel.json is configured for SPA routing
   - All routes should redirect to index.html

## 📞 Support

If you encounter issues:
1. Check deployment logs in Vercel/Railway dashboard
2. Verify environment variables are correctly set
3. Test API endpoints individually
4. Check browser console for frontend errors

## 🎉 Success!

Your Gov Schemes India application should now be live:

- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://your-backend.up.railway.app`

Features available:
- ✅ AI-powered chatbot with voice interaction
- ✅ Multilingual support (English, Hindi, Telugu, Tamil)
- ✅ AI scheme search beyond database
- ✅ Real-time notifications
- ✅ Responsive design across all devices