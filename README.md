# 🇮🇳 Gov Schemes India - AI-Powered Government Schemes Assistant

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/govt-schemes-chatbot)
[![Deploy on Render](https://render.com/images/deploy-to-render-button.svg)](https://govt-schemes-chatbot-4f8m.onrender.com)

> **A comprehensive web application that provides information about Indian Government schemes through an AI-powered chatbot with multilingual support and voice interaction.**

## 🌟 Features

- 🤖 **AI-Powered Chatbot** - Powered by Google Gemini 1.5 Flash
- 🎤 **Voice Interaction** - Speech-to-text and text-to-speech capabilities
- 🌍 **Multilingual Support** - English, Hindi, Telugu, Tamil
- 🔍 **AI Search Engine** - Discover schemes beyond the database
- 📱 **Responsive Design** - Works on all devices
- 🔗 **Official Links** - Direct links to government websites
- 📊 **Real-time Notifications** - Live updates about schemes

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/govt-schemes-chatbot.git
   cd govt-schemes-chatbot
   ```

2. **Install dependencies**
   ```bash
   # Frontend
   npm install
   
   # Backend
   cd backend
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env and add your Gemini API key
   ```

4. **Run the application**
   ```bash
   # Terminal 1: Backend
   cd backend
   npm start
   
   # Terminal 2: Frontend
   npm run dev
   ```

5. **Open your browser**
   - Frontend: http://localhost:5174
   - Backend: http://localhost:3001

## 🌐 Deploy Online

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Quick Deploy Options:

#### Frontend (Vercel)
1. Fork this repository
2. Connect to Vercel
3. Set environment variable: `VITE_API_URL=your-backend-url`
4. Deploy

#### Backend (Railway)
1. Connect your GitHub repo to Railway
2. Set root directory to `backend`
3. Add environment variables:
   - `GEMINI_API_KEY=your-api-key`
   - `FRONTEND_URL=your-vercel-url`
4. Deploy

## 🛠️ Technology Stack

### Frontend
- **React 19** with Vite
- **React Router** for navigation
- **React i18next** for internationalization
- **Lucide React** for icons
- **Framer Motion** for animations
- **Axios** for API calls

### Backend
- **Node.js** with Express.js
- **Google Generative AI** (Gemini 1.5 Flash)
- **CORS** for cross-origin requests
- **Node-cron** for scheduled tasks
- **dotenv** for environment variables

## 🎯 Use Cases

- **Citizens**: Find relevant government schemes
- **Students**: Discover education scholarships and programs
- **Farmers**: Learn about agricultural support schemes
- **Healthcare**: Find health insurance and medical schemes
- **Employment**: Explore job and skill development programs

## 🗣️ Voice Commands

- "Tell me about PM-KISAN scheme"
- "What health schemes are available?"
- "Find education scholarships for students"
- "मुझे कृषि योजनाओं के बारे में बताएं" (Hindi)

## 🌍 Supported Languages

- **English** - Primary language
- **हिंदी (Hindi)** - Full interface translation
- **తెలుగు (Telugu)** - Complete localization
- **தமிழ் (Tamil)** - Full language support

## 📱 Responsive Design

- **Desktop** - Full-featured experience
- **Tablet** - Optimized layout
- **Mobile** - Touch-friendly interface
- **Voice-first** - Accessibility features

## 🔧 Configuration

### Environment Variables

#### Frontend (.env)
```bash
VITE_API_URL=https://your-backend-url
VITE_APP_TITLE=Gov Schemes India
```

#### Backend (.env)
```bash
GEMINI_API_KEY=your-gemini-api-key
NODE_ENV=production
PORT=3001
FRONTEND_URL=https://your-frontend-url
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for intelligent responses
- **Government of India** for open scheme data
- **React Community** for excellent libraries
- **Open Source Contributors** for inspiration

## 📞 Support

- **Documentation**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Issues**: [GitHub Issues](https://github.com/yourusername/govt-schemes-chatbot/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/govt-schemes-chatbot/discussions)

---

**Made with ❤️ for Indian Citizens**

*Helping bridge the gap between citizens and government schemes through AI technology.*
