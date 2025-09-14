# Government Schemes Chatbot

A modern web application that provides information about Indian Government schemes through an AI-powered chatbot using Google's Gemini API.

## Features

- 🤖 **AI-Powered Chatbot**: Get instant answers about government schemes using Gemini AI
- 🔔 **Live Notifications**: Real-time updates about new schemes and deadlines
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 🎨 **Modern UI**: Beautiful, intuitive interface with smooth animations
- 📊 **Comprehensive Database**: Information about 500+ government schemes
- ⚡ **Fast Response**: Quick and accurate information retrieval

## Tech Stack

### Frontend
- React 18 with Vite
- Lucide React icons
- Framer Motion for animations
- Axios for API calls
- Date-fns for date formatting

### Backend
- Node.js with Express.js
- Google Generative AI (Gemini)
- CORS for cross-origin requests
- Node-cron for scheduled tasks
- dotenv for environment variables

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Google API key for Gemini

### 1. Clone the Repository
```bash
git clone <repository-url>
cd govt-schemes-chatbot
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd backend
npm install
```

### 4. Get Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the API key

### 5. Configure Environment Variables
Create a `.env` file in the backend directory:
```bash
cd backend
cp .env.example .env
```

Edit the `.env` file and add your Gemini API key:
```env
GEMINI_API_KEY=your-actual-gemini-api-key-here
PORT=3001
NODE_ENV=development
```

### 6. Run the Application

#### Start the Backend Server
```bash
cd backend
npm start
```

#### Start the Frontend Development Server
```bash
# In a new terminal, from the root directory
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

## API Endpoints

### Chat
- **POST** `/api/chat` - Send message to chatbot
- **Body**: `{ "message": "your question" }`

### Notifications
- **GET** `/api/notifications` - Get all notifications
- **POST** `/api/notifications` - Add new notification

### Schemes
- **GET** `/api/schemes` - Get all schemes
- **GET** `/api/schemes/:category` - Get schemes by category

### Health Check
- **GET** `/api/health` - Server health status

## Government Scheme Categories

The chatbot can provide information about:

1. **Education Schemes**
   - PM Scholarship Scheme
   - National Scholarship Portal
   - Merit-based scholarships

2. **Health Schemes**
   - Ayushman Bharat (PM-JAY)
   - PM Suraksha Bima Yojana
   - Health insurance schemes

3. **Agriculture Schemes**
   - PM-KISAN
   - PM Fasal Bima Yojana
   - Soil health card scheme

4. **Employment Schemes**
   - MGNREGA
   - PM Kaushal Vikas Yojana
   - Stand-up India

5. **Housing Schemes**
   - PM Awas Yojana
   - Rural housing schemes

## Features in Detail

### Chatbot Capabilities
- Answers questions about scheme eligibility
- Provides application procedures
- Shares deadline information
- Offers document requirements
- Gives official website links

### Live Notifications
- Automatic updates every hour
- Categorized by urgency (New, Deadline, Urgent)
- Dismissible notifications
- External links to official sources

### Responsive Design
- Mobile-first approach
- Touch-friendly interface
- Optimized for all screen sizes
- Smooth animations and transitions

## Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Update API base URL in production

### Backend Deployment (Railway/Heroku)
1. Set environment variables
2. Deploy the backend folder
3. Update CORS settings for production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions:
- Check the [FAQ section](#faq)
- Open an issue on GitHub
- Contact the development team

## FAQ

**Q: How do I get a Gemini API key?**
A: Visit [Google AI Studio](https://makersuite.google.com/app/apikey), sign in, and create a new API key.

**Q: Is the API key free?**
A: Yes, Gemini API offers a generous free tier for personal projects.

**Q: Can I add more government schemes?**
A: Yes, you can extend the `governmentSchemes` object in `backend/server.js`.

**Q: How often are notifications updated?**
A: Notifications are checked and updated every hour automatically.

## Troubleshooting

### Common Issues

1. **"API key not found" error**
   - Ensure your `.env` file has the correct API key
   - Restart the backend server after adding the key

2. **CORS errors**
   - Check that the frontend URL is correctly configured
   - Verify the backend is running on port 3001

3. **Notifications not loading**
   - Check if the backend server is running
   - Verify the API endpoint is accessible

4. **Chatbot not responding**
   - Verify your Gemini API key is valid
   - Check the server logs for error messages

---

Made with ❤️ for helping citizens discover government schemes