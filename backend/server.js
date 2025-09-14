const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cron = require('node-cron');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'your-gemini-api-key');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// In-memory storage for notifications (in production, use a database)
let notifications = [
  {
    id: 1,
    scheme: "PM-KISAN",
    message: "New beneficiary registration window is now open. Apply before 30th September 2024.",
    type: "new",
    deadline: "2024-09-30",
    timestamp: new Date().toISOString(),
    link: "https://pmkisan.gov.in"
  },
  {
    id: 2,
    scheme: "Ayushman Bharat",
    message: "Renewal deadline approaching for existing beneficiaries.",
    type: "deadline",
    deadline: "2024-10-15",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    link: "https://pmjay.gov.in"
  },
  {
    id: 3,
    scheme: "Pradhan Mantri Awas Yojana",
    message: "Special housing scheme launched for urban areas with enhanced subsidies.",
    type: "urgent",
    deadline: "2024-12-31",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    link: "https://pmaymis.gov.in"
  }
];

// Government schemes data
const governmentSchemes = {
  education: [
    {
      name: "PM Scholarship Scheme",
      description: "Scholarships for children of armed forces personnel",
      eligibility: "Children of Ex-Servicemen/Ex-Coast Guard",
      amount: "Rs. 2,500 per month",
      deadline: "31st October 2024"
    },
    {
      name: "National Scholarship Portal",
      description: "One-stop solution for various scholarship schemes",
      eligibility: "Students from economically weaker sections",
      amount: "Varies by scheme",
      deadline: "30th November 2024"
    }
  ],
  health: [
    {
      name: "Ayushman Bharat",
      description: "Health insurance coverage up to Rs. 5 lakh",
      eligibility: "Families identified in SECC 2011",
      amount: "Rs. 5,00,000 per family per year",
      deadline: "Ongoing"
    },
    {
      name: "Pradhan Mantri Suraksha Bima Yojana",
      description: "Accident insurance scheme",
      eligibility: "Age 18-70 years with bank account",
      amount: "Rs. 2,00,000 coverage",
      deadline: "Ongoing"
    }
  ],
  agriculture: [
    {
      name: "PM-KISAN",
      description: "Income support to farmer families",
      eligibility: "Small and marginal farmers",
      amount: "Rs. 6,000 per year",
      deadline: "Ongoing registration"
    },
    {
      name: "Pradhan Mantri Fasal Bima Yojana",
      description: "Crop insurance scheme",
      eligibility: "All farmers",
      amount: "Premium subsidy up to 50%",
      deadline: "Seasonal"
    }
  ],
  employment: [
    {
      name: "MGNREGA",
      description: "Rural employment guarantee program",
      eligibility: "Rural households",
      amount: "100 days of employment",
      deadline: "Ongoing"
    },
    {
      name: "Pradhan Mantri Kaushal Vikas Yojana",
      description: "Skill development training",
      eligibility: "Youth aged 15-45",
      amount: "Free training + Rs. 8,000 reward",
      deadline: "Ongoing"
    }
  ]
};

// Routes

// Chat endpoint with Gemini AI
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Check if API key is configured
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your-gemini-api-key') {
      console.error('Gemini API key not configured properly');
      const fallbackResponse = getFallbackResponse(message);
      return res.json({ response: fallbackResponse });
    }

    // Create a comprehensive prompt for Indian Government schemes
    const prompt = `You are an AI assistant specialized in Indian Government schemes and policies. 
    Your role is to provide accurate, helpful information about various government schemes, their eligibility criteria, 
    application processes, deadlines, and benefits.

    User Query: ${message}

    Please provide a detailed, accurate response about Indian Government schemes. Focus on:
    1. Relevant schemes that match the user's query
    2. Eligibility criteria
    3. Benefits and coverage
    4. Application process
    5. Important deadlines
    6. Required documents
    7. Official website links where applicable

    FORMATTING GUIDELINES:
    - Use clear, well-structured sentences without asterisks (*) for emphasis
    - Use bullet points with • or numbered lists for better readability
    - Include official website URLs when mentioning schemes (e.g., https://pmkisan.gov.in for PM-KISAN)
    - Write in a conversational yet professional tone
    - Avoid using markdown formatting like ** or * for bold text
    - Use proper punctuation and complete sentences
    - Keep paragraphs concise and well-organized

    If the query is not related to government schemes, politely redirect the conversation back to government schemes 
    and offer to help with scheme-related questions.

    Keep the response informative, concise, and user-friendly.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log(`AI Response generated for query: "${message.substring(0, 50)}..."`); // Log for debugging
    res.json({ response: text });
  } catch (error) {
    console.error('Error with Gemini AI:', error.message);
    console.error('Full error details:', error);
    
    // Fallback response with basic scheme information
    const fallbackResponse = getFallbackResponse(req.body.message);
    res.json({ 
      response: fallbackResponse + "\n\n⚠️ *Note: Currently using offline mode. For the most up-to-date information, please visit the official government websites.*" 
    });
  }
});

// Get notifications
app.get('/api/notifications', (req, res) => {
  // Sort notifications by timestamp (newest first)
  const sortedNotifications = notifications.sort((a, b) => 
    new Date(b.timestamp) - new Date(a.timestamp)
  );
  res.json(sortedNotifications);
});

// Add new notification (for admin use)
app.post('/api/notifications', (req, res) => {
  const { scheme, message, type, deadline, link } = req.body;
  
  const newNotification = {
    id: notifications.length + 1,
    scheme,
    message,
    type: type || 'new',
    deadline,
    timestamp: new Date().toISOString(),
    link
  };
  
  notifications.unshift(newNotification);
  res.json(newNotification);
});

// AI-powered scheme search endpoint
app.post('/api/schemes/search', async (req, res) => {
  try {
    const { query, language } = req.body;
    
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }

    // Check if API key is configured
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your-gemini-api-key') {
      console.error('Gemini API key not configured properly');
      return res.json({ schemes: [] });
    }

    const prompt = `You are an AI assistant that helps find Indian Government schemes. Based on the user's search query, provide information about relevant government schemes that match their needs.

    User Query: "${query}"
    Language: ${language || 'English'}

    Please return a JSON array of scheme objects with the following structure:
    [
      {
        "name": "Scheme Name",
        "description": "Brief description of the scheme",
        "eligibility": "Who can apply for this scheme",
        "amount": "Benefits or financial support provided",
        "deadline": "Application deadline or 'Ongoing'",
        "category": "education|health|agriculture|employment|social|housing",
        "isAiGenerated": true
      }
    ]

    Focus on:
    1. Real government schemes that exist in India
    2. Accurate eligibility criteria
    3. Current benefit amounts
    4. Proper categorization
    5. Only include schemes that are relevant to the user's query
    
    Limit to maximum 10 most relevant schemes. Return only the JSON array, no additional text.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    try {
      // Extract JSON from the response
      const jsonMatch = text.match(/\[.*\]/s);
      const schemes = jsonMatch ? JSON.parse(jsonMatch[0]) : [];
      
      console.log(`AI scheme search completed for query: "${query}" - Found ${schemes.length} schemes`);
      res.json({ schemes });
    } catch (parseError) {
      console.error('Error parsing AI response:', parseError);
      res.json({ schemes: [] });
    }
    
  } catch (error) {
    console.error('Error with AI scheme search:', error.message);
    res.json({ schemes: [] });
  }
});
app.get('/api/schemes/:category', (req, res) => {
  const { category } = req.params;
  const schemes = governmentSchemes[category] || [];
  res.json(schemes);
});

// Get all schemes
app.get('/api/schemes', (req, res) => {
  res.json(governmentSchemes);
});

// Fallback response function
function getFallbackResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('education') || lowerMessage.includes('scholarship') || lowerMessage.includes('student')) {
    return `Here are some education-related government schemes:

PM Scholarship Scheme:
• For children of armed forces personnel
• Amount: Rs. 2,500 per month
• Deadline: 31st October 2024
• More info: https://scholarships.gov.in

National Scholarship Portal:
• One-stop solution for various scholarships
• For economically weaker sections
• Visit: https://scholarships.gov.in

Would you like more details about any specific scheme or eligibility criteria?`;
  }
  
  if (lowerMessage.includes('health') || lowerMessage.includes('medical') || lowerMessage.includes('insurance')) {
    return `Here are health-related government schemes:

Ayushman Bharat (PM-JAY):
• Health coverage up to Rs. 5 lakh per family
• For families in SECC 2011 database
• Covers secondary and tertiary care
• Official website: https://pmjay.gov.in

PM Suraksha Bima Yojana:
• Accident insurance coverage
• Premium: Rs. 20 per year
• Coverage: Rs. 2 lakh
• More info: https://jansuraksha.gov.in

Would you like information about eligibility or how to apply?`;
  }
  
  if (lowerMessage.includes('farmer') || lowerMessage.includes('agriculture') || lowerMessage.includes('crop')) {
    return `Here are agriculture-related schemes:

PM-KISAN:
• Rs. 6,000 per year for small farmers
• Direct bank transfer in 3 installments
• Registration at: https://pmkisan.gov.in

PM Fasal Bima Yojana:
• Crop insurance scheme
• Premium subsidy up to 50%
• Protection against natural calamities
• Official website: https://pmfby.gov.in

Need help with registration or eligibility criteria?`;
  }
  
  // Default response
  return `Hello! I'm here to help you with Indian Government schemes. I can provide information about:

Popular Schemes:
• PM-KISAN (Farmer support) - https://pmkisan.gov.in
• Ayushman Bharat (Health insurance) - https://pmjay.gov.in
• MGNREGA (Employment guarantee) - https://nrega.nic.in
• PM Awas Yojana (Housing) - https://pmaymis.gov.in
• National Scholarship Portal - https://scholarships.gov.in

I can help you with:
• Eligibility criteria
• Application process
• Required documents
• Deadlines and important dates
• Benefits and coverage

What specific scheme or area would you like to know about? (Education, Health, Agriculture, Employment, Housing, etc.)`;
}

// Cron job to simulate new notifications (runs every hour)
cron.schedule('0 * * * *', () => {
  console.log('Checking for new scheme updates...');
  
  // Simulate new notifications (in production, this would fetch from government APIs)
  const possibleNotifications = [
    {
      scheme: "Digital India",
      message: "New digital literacy program launched for rural areas.",
      type: "new",
      deadline: "2024-11-30",
      link: "https://digitalindia.gov.in"
    },
    {
      scheme: "Swachh Bharat Mission",
      message: "Enhanced incentives for toilet construction in rural areas.",
      type: "new",
      deadline: "2024-12-15",
      link: "https://swachhbharatmission.gov.in"
    }
  ];
  
  // Randomly add a notification (30% chance)
  if (Math.random() < 0.3 && notifications.length < 10) {
    const randomNotification = possibleNotifications[Math.floor(Math.random() * possibleNotifications.length)];
    const newNotification = {
      id: notifications.length + 1,
      ...randomNotification,
      timestamp: new Date().toISOString()
    };
    notifications.unshift(newNotification);
    console.log('New notification added:', newNotification.scheme);
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;