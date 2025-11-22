# 🚀 Free Deployment Guide - Gov Schemes India

This guide will help you deploy the Gov Schemes India project online for FREE using Vercel (frontend) and Render (backend).

## 📋 Prerequisites

- GitHub account
- Vercel account (free at [vercel.com](https://vercel.com/))
- Render account (free at [render.com](https://render.com/))
- Google API key for Gemini AI

## 🏗️ Architecture

- **Frontend**: React + Vite → Vercel (Free)
- **Backend**: Node.js + Express → Render (Free)

## 🔧 Step 1: Push Code to GitHub

1. Create a new repository on GitHub
2. Push your local code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

## 🔧 Step 2: Backend Deployment (Render)

### 2.1 Create Render Project

1. Go to [Render.com](https://render.com/)
2. Sign up/Login with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure settings:
   - **Name**: govt-schemes-backend
   - **Region**: Ohio (or any)
   - **Branch**: main
   - **Root Directory**: Leave empty (project root)
   - **Environment**: Node
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Plan**: Free

### 2.2 Environment Variables

In Render dashboard, go to "Environment Variables" and add:

```
GEMINI_API_KEY=your-actual-gemini-api-key
NODE_ENV=production
PORT=3001
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

### 2.3 Deploy

- Click "Create Web Service"
- Render will automatically build and deploy your backend
- Note down the deployment URL (e.g., `https://govt-schemes-backend.onrender.com`)

## 🎨 Step 3: Frontend Deployment (Vercel)

### 3.1 Create Vercel Project

1. Go to [Vercel.com](https://vercel.com/)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Set configuration:
   - **Framework Preset**: Vite
   - **Root Directory**: `/` (project root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 3.2 Environment Variables

In Vercel dashboard, go to Settings → Environment Variables and add:

```
VITE_API_URL=https://your-backend-render-url.onrender.com
```

### 3.3 Deploy

- Click "Deploy"
- Vercel will build and deploy your frontend

## 🔁 Step 4: Update Backend Configuration

After frontend deployment:

1. In Render dashboard, update the `FRONTEND_URL` environment variable:
   ```
   FRONTEND_URL=https://your-actual-vercel-domain.vercel.app
   ```

2. Click "Manual Deploy" → "Clear build cache & deploy"

## 🧪 Step 5: Testing

### Test the deployed application:

1. **Frontend URL**: `https://your-project.vercel.app`
2. **Backend URL**: `https://your-backend.onrender.com`

### Test endpoints:
- `GET /api/health` - Health check
- `POST /api/chat` - Chatbot functionality
- `GET /api/notifications` - Notifications
- `GET /api/schemes` - Schemes data

## ⚡ Important Notes

### Render Free Tier Limitations:
- Your backend service will spin down after 15 minutes of inactivity
- First request after spin-down will take longer (cold start)
- Perfect for development and low-traffic applications

### Vercel Free Tier:
- Generous limits for hobby projects
- Automatic HTTPS
- Global CDN

## 🛠️ Troubleshooting

### Common Issues:

1. **CORS Errors**: 
   - Check FRONTEND_URL in Render environment variables
   - Ensure VITE_API_URL points to correct Render URL

2. **API Key Errors**:
   - Verify GEMINI_API_KEY is set correctly in Render
   - Check Google AI Studio for API key validity

3. **Build Failures**:
   - Check build logs in Vercel/Render dashboard
   - Ensure all dependencies are in package.json

4. **404 Errors on Refresh**:
   - Vercel.json is configured for SPA routing
   - All routes should redirect to index.html

## 🎉 Success!

Your Gov Schemes India application should now be live:

- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://your-backend.onrender.com`

Features available:
- ✅ AI-powered chatbot with voice interaction
- ✅ Multilingual support (English, Hindi, Telugu, Tamil)
- ✅ AI scheme search beyond database
- ✅ Real-time notifications
- ✅ Responsive design across all devices
