import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Page Titles
      "page.home": "Home",
      "page.schemes": "Browse Schemes",
      "page.about": "About Us",
      
      // Header
      "nav.home": "Home",
      "nav.schemes": "Browse Schemes",
      "nav.about": "About",
      "nav.notifications": "Live Updates",
      
      // Hero Section
      "hero.title": "Discover Government Schemes",
      "hero.subtitle": "For Every Indian Citizen",
      "hero.description": "Our AI-powered chatbot helps you find the right government schemes, check eligibility, and stay updated with the latest announcements.",
      "hero.startChatting": "Start Chatting",
      "hero.browseSchemes": "Browse Schemes",
      "hero.available": "Available",
      "hero.schemes": "Schemes",
      "hero.queriesSolved": "Queries Solved",
      
      // Chatbot
      "chatbot.title": "Gov Schemes Assistant",
      "chatbot.status": "Online",
      "chatbot.placeholder": "Ask about government schemes...",
      "chatbot.sendHint": "Press Enter to send, Shift+Enter for new line",
      "chatbot.welcome": "Hello! I'm your AI-powered Government Schemes Assistant. I can help you with real-time information about Indian government schemes including:\n\n• Eligibility criteria and application processes\n• Benefits, deadlines, and required documents\n• Specific schemes like PM-KISAN, Ayushman Bharat, MGNREGA\n• Education, health, agriculture, and employment schemes\n\nI provide detailed information with official website links. What would you like to know about government schemes today?",
      "chatbot.voiceStart": "Start Voice Input",
      "chatbot.voiceStop": "Stop Voice Input",
      "chatbot.voiceListening": "Listening...",
      "chatbot.speakResponse": "Speak Response",
      
      // Schemes Page
      "schemes.title": "Government Schemes Browser",
      "schemes.description": "Explore and search through various Indian Government schemes",
      "schemes.searchPlaceholder": "Search schemes by name, description, or eligibility...",
      "schemes.searchAI": "Search with AI",
      "schemes.categories.all": "All Schemes",
      "schemes.categories.education": "Education",
      "schemes.categories.health": "Health",
      "schemes.categories.agriculture": "Agriculture",
      "schemes.categories.employment": "Employment",
      "schemes.eligibility": "Eligibility",
      "schemes.benefits": "Benefits",
      "schemes.deadline": "Deadline",
      "schemes.officialWebsite": "Official Website",
      "schemes.noResults": "No schemes found matching your criteria.",
      "schemes.clearFilters": "Clear Filters",
      "schemes.loading": "Loading schemes...",
      "schemes.aiSearchPrompt": "Describe what kind of government scheme you're looking for...",
      "schemes.aiSearchButton": "Search with AI",
      
      // About Page
      "about.title": "About Gov Schemes India",
      "about.subtitle": "Your trusted companion for navigating Indian Government schemes and policies",
      "about.mission": "Our Mission",
      "about.missionText1": "Gov Schemes India is dedicated to bridging the information gap between citizens and government schemes. We believe that every Indian citizen should have easy access to information about government benefits, subsidies, and support programs that can improve their lives.",
      "about.missionText2": "Our platform combines the power of artificial intelligence with comprehensive government data to provide instant, accurate, and personalized information about schemes that match your specific needs and eligibility criteria.",
      "about.keyFeatures": "Key Features",
      "about.howItWorks": "How It Works",
      "about.technology": "Powered by Advanced Technology",
      "about.techText1": "Our platform leverages cutting-edge artificial intelligence technology from Google's Gemini AI to provide intelligent, context-aware responses to your queries about government schemes.",
      "about.techText2": "Built with modern web technologies including React, Node.js, and real-time data synchronization, our platform ensures fast, reliable, and accurate information delivery across all devices.",
      "about.cta": "Ready to Explore Government Schemes?",
      "about.ctaText": "Start your journey towards accessing government benefits and support programs.",
      "about.browseButton": "Browse Schemes",
      "about.chatButton": "Start Chatting",
      
      // Language Selector
      "language.select": "Select Language",
      "language.english": "English",
      "language.hindi": "हिंदी",
      "language.telugu": "తెలుగు",
      "language.tamil": "தமிழ்"
    }
  },
  hi: {
    translation: {
      // Page Titles
      "page.home": "होम",
      "page.schemes": "योजनाएं ब्राउज़ करें",
      "page.about": "हमारे बारे में",
      
      // Header
      "nav.home": "होम",
      "nav.schemes": "योजनाएं ब्राउज़ करें",
      "nav.about": "हमारे बारे में",
      "nav.notifications": "लाइव अपडेट",
      
      // Hero Section
      "hero.title": "सरकारी योजनाओं की खोज करें",
      "hero.subtitle": "हर भारतीय नागरिक के लिए",
      "hero.description": "हमारा AI-संचालित चैटबॉट आपको सही सरकारी योजनाएं खोजने, पात्रता जांचने और नवीनतम घोषणाओं के साथ अपडेट रहने में मदद करता है।",
      "hero.startChatting": "चैट शुरू करें",
      "hero.browseSchemes": "योजनाएं ब्राउज़ करें",
      "hero.available": "उपलब्ध",
      "hero.schemes": "योजनाएं",
      "hero.queriesSolved": "हल की गई समस्याएं",
      
      // Chatbot
      "chatbot.title": "सरकारी योजना सहायक",
      "chatbot.status": "ऑनलाइन",
      "chatbot.placeholder": "सरकारी योजनाओं के बारे में पूछें...",
      "chatbot.sendHint": "भेजने के लिए Enter दबाएं, नई लाइन के लिए Shift+Enter",
      "chatbot.welcome": "नमस्ते! मैं आपका AI-संचालित सरकारी योजना सहायक हूं। मैं भारतीय सरकारी योजनाओं के बारे में रीयल-टाइम जानकारी के साथ आपकी मदद कर सकता हूं:\n\n• पात्रता मानदंड और आवेदन प्रक्रियाएं\n• लाभ, समय सीमा, और आवश्यक दस्तावेज\n• PM-KISAN, आयुष्मान भारत, MGNREGA जैसी विशिष्ट योजनाएं\n• शिक्षा, स्वास्थ्य, कृषि, और रोजगार योजनाएं\n\nमैं आधिकारिक वेबसाइट लिंक के साथ विस्तृत जानकारी प्रदान करता हूं। आज आप सरकारी योजनाओं के बारे में क्या जानना चाहेंगे?",
      "chatbot.voiceStart": "वॉयस इनपुट शुरू करें",
      "chatbot.voiceStop": "वॉयस इनपुट रोकें",
      "chatbot.voiceListening": "सुन रहा है...",
      "chatbot.speakResponse": "उत्तर बोलें",
      
      // Schemes Page
      "schemes.title": "सरकारी योजना ब्राउज़र",
      "schemes.description": "विभिन्न भारतीय सरकारी योजनाओं का अन्वेषण और खोज करें",
      "schemes.searchPlaceholder": "नाम, विवरण या पात्रता के आधार पर योजनाएं खोजें...",
      "schemes.searchAI": "AI के साथ खोजें",
      "schemes.categories.all": "सभी योजनाएं",
      "schemes.categories.education": "शिक्षा",
      "schemes.categories.health": "स्वास्थ्य",
      "schemes.categories.agriculture": "कृषि",
      "schemes.categories.employment": "रोजगार",
      "schemes.eligibility": "पात्रता",
      "schemes.benefits": "लाभ",
      "schemes.deadline": "समय सीमा",
      "schemes.officialWebsite": "आधिकारिक वेबसाइट",
      "schemes.noResults": "आपके मानदंडों से मेल खाने वाली कोई योजना नहीं मिली।",
      "schemes.clearFilters": "फिल्टर साफ़ करें",
      "schemes.loading": "योजनाएं लोड हो रही हैं...",
      "schemes.aiSearchPrompt": "बताएं कि आप किस प्रकार की सरकारी योजना की तलाश कर रहे हैं...",
      "schemes.aiSearchButton": "AI के साथ खोजें"
    }
  },
  te: {
    translation: {
      // Page Titles
      "page.home": "హోమ్",
      "page.schemes": "పథకాలను బ్రౌజ్ చేయండి",
      "page.about": "మా గురించి",
      
      // Header
      "nav.home": "హోమ్",
      "nav.schemes": "పథకాలను బ్రౌజ్ చేయండి",
      "nav.about": "మా గురించి",
      "nav.notifications": "లైవ్ అప్‌డేట్‌లు",
      
      // Hero Section
      "hero.title": "ప్రభుత్వ పథకాలను కనుగొనండి",
      "hero.subtitle": "ప్రతి భారతీయ పౌరుడికి",
      "hero.description": "మా AI-శక్తితో కూడిన చాట్‌బాట్ మీకు సరైన ప్రభుత్వ పథకాలను కనుగొనడానికి, అర్హతను తనిఖీ చేయడానికి మరియు తాజా ప్రకటనలతో అప్‌డేట్‌గా ఉండటానికి సహాయపడుతుంది.",
      "hero.startChatting": "చాట్ ప్రారంభించండి",
      "hero.browseSchemes": "పథకాలను బ్రౌజ్ చేయండి",
      "hero.available": "అందుబాటులో",
      "hero.schemes": "పథకాలు",
      "hero.queriesSolved": "పరిష్కరించబడిన ప్రశ్నలు",
      
      // Chatbot
      "chatbot.title": "ప్రభుత్వ పథకాల సహాయకుడు",
      "chatbot.status": "ఆన్‌లైన్",
      "chatbot.placeholder": "ప్రభుత్వ పథకాల గురించి అడగండి...",
      "chatbot.sendHint": "పంపడానికి Enter నొక్కండి, కొత్త లైన్ కోసం Shift+Enter",
      "chatbot.welcome": "నమస్కారం! నేను మీ AI-శక్తితో కూడిన ప్రభుత్వ పథకాల సహాయకుడను. నేను భారతీయ ప్రభుత్వ పథకాల గురించి రియల్-టైమ్ సమాచారంతో మీకు సహాయం చేయగలను:\n\n• అర్హత ప్రమాణాలు మరియు దరఖాస్తు ప్రక్రియలు\n• ప్రయోజనాలు, గడువులు మరియు అవసరమైన పత్రాలు\n• PM-KISAN, ఆయుష్మాన్ భారత్, MGNREGA వంటి నిర్దిష్ట పథకాలు\n• విద్య, ఆరోగ్యం, వ్యవసాయం మరియు ఉపాధి పథకాలు\n\nనేను అధికారిక వెబ్‌సైట్ లింక్‌లతో వివరణాత్మక సమాచారం అందిస్తాను. ఈరోజు మీరు ప్రభుత్వ పథకాల గురించి ఏమి తెలుసుకోవాలనుకుంటున్నారు?",
      "chatbot.voiceStart": "వాయిస్ ఇన్‌పుట్ ప్రారంభించండి",
      "chatbot.voiceStop": "వాయిస్ ఇన్‌పుట్ ఆపండి",
      "chatbot.voiceListening": "వింటోంది...",
      "chatbot.speakResponse": "సమాధానం మాట్లాడండి",
      
      // Schemes Page
      "schemes.title": "ప్రభుత్వ పథకాల బ్రౌజర్",
      "schemes.description": "వివిధ భారతీయ ప్రభుత్వ పథకాలను అన్వేషించండి మరియు శోధించండి",
      "schemes.searchPlaceholder": "పేరు, వివరణ లేదా అర్హత ఆధారంగా పథకాలను శోధించండి...",
      "schemes.searchAI": "AI తో శోధించండి",
      "schemes.categories.all": "అన్ని పథకాలు",
      "schemes.categories.education": "విద్య",
      "schemes.categories.health": "ఆరోగ్యం",
      "schemes.categories.agriculture": "వ్యవసాయం",
      "schemes.categories.employment": "ఉపాధి",
      "schemes.eligibility": "అర్హత",
      "schemes.benefits": "ప్రయోజనాలు",
      "schemes.deadline": "గడువు",
      "schemes.officialWebsite": "అధికారిక వెబ్‌సైట్",
      "schemes.noResults": "మీ ప్రమాణాలకు సరిపోలే పథకాలు కనుగొనబడలేదు.",
      "schemes.clearFilters": "ఫిల్టర్‌లను క్లియర్ చేయండి",
      "schemes.loading": "పథకాలు లోడ్ అవుతున్నాయి...",
      "schemes.aiSearchPrompt": "మీరు ఎలాంటి ప్రభుత్వ పథకం కోసం వెతుకుతున్నారో వివరించండి...",
      "schemes.aiSearchButton": "AI తో శోధించండి"
    }
  },
  ta: {
    translation: {
      // Page Titles
      "page.home": "முகப்பு",
      "page.schemes": "திட்டங்களைப் பார்க்கவும்",
      "page.about": "எங்களைப் பற்றி",
      
      // Header
      "nav.home": "முகப்பு",
      "nav.schemes": "திட்டங்களைப் பார்க்கவும்",
      "nav.about": "எங்களைப் பற்றி",
      "nav.notifications": "நேரடி புதுப்பிப்புகள்",
      
      // Hero Section
      "hero.title": "அரசு திட்டங்களைக் கண்டறியுங்கள்",
      "hero.subtitle": "ஒவ்வொரு இந்திய குடிமகனுக்கும்",
      "hero.description": "எங்கள் AI-இயங்கும் சாட்பாட் சரியான அரசு திட்டங்களைக் கண்டறிய, தகுதியைச் சரிபார்க்க மற்றும் சமீபத்திய அறிவிப்புகளுடன் புதுப்பித்த நிலையில் இருக்க உதவுகிறது.",
      "hero.startChatting": "அரட்டை தொடங்கு",
      "hero.browseSchemes": "திட்டங்களைப் பார்க்கவும்",
      "hero.available": "கிடைக்கிறது",
      "hero.schemes": "திட்டங்கள்",
      "hero.queriesSolved": "தீர்க்கப்பட்ட கேள்விகள்",
      
      // Chatbot
      "chatbot.title": "அரசு திட்ட உதவியாளர்",
      "chatbot.status": "ஆன்லைன்",
      "chatbot.placeholder": "அரசு திட்டங்களைப் பற்றி கேளுங்கள்...",
      "chatbot.sendHint": "அனுப்ப Enter அழுத்தவும், புதிய வரிக்கு Shift+Enter",
      "chatbot.welcome": "வணக்கம்! நான் உங்கள் AI-இயங்கும் அரசு திட்ட உதவியாளர். இந்திய அரசு திட்டங்களைப் பற்றிய நேரடி தகவல்களுடன் நான் உங்களுக்கு உதவ முடியும்:\n\n• தகுதி அளவுகோல்கள் மற்றும் விண்ணப்ப செயல்முறைகள்\n• பலன்கள், காலக்கெடுகள் மற்றும் தேவையான ஆவணங்கள்\n• PM-KISAN, ஆயுஷ்மான் பாரத், MGNREGA போன்ற குறிப்பிட்ட திட்டங்கள்\n• கல்வி, சுகாதாரம், விவசாயம் மற்றும் வேலைவாய்ப்பு திட்டங்கள்\n\nநான் அதிகாரப்பூர்வ வலைத்தள இணைப்புகளுடன் விரிவான தகவல்களை வழங்குகிறேன். இன்று நீங்கள் அரசு திட்டங்களைப் பற்றி என்ன தெரிந்துகொள்ள விரும்புகிறீர்கள்?",
      "chatbot.voiceStart": "குரல் உள்ளீட்டைத் தொடங்கு",
      "chatbot.voiceStop": "குரல் உள்ளீட்டை நிறுத்து",
      "chatbot.voiceListening": "கேட்கிறது...",
      "chatbot.speakResponse": "பதிலைப் பேசு",
      
      // Schemes Page
      "schemes.title": "அரசு திட்ட உலாவி",
      "schemes.description": "பல்வேறு இந்திய அரசு திட்டங்களை ஆராய்ந்து தேடுங்கள்",
      "schemes.searchPlaceholder": "பெயர், விளக்கம் அல்லது தகுதியின் அடிப்படையில் திட்டங்களைத் தேடுங்கள்...",
      "schemes.searchAI": "AI உடன் தேடுங்கள்",
      "schemes.categories.all": "அனைத்து திட்டங்கள்",
      "schemes.categories.education": "கல்வி",
      "schemes.categories.health": "சுகாதாரம்",
      "schemes.categories.agriculture": "விவசாயம்",
      "schemes.categories.employment": "வேலைவாய்ப்பு",
      "schemes.eligibility": "தகுதி",
      "schemes.benefits": "பலன்கள்",
      "schemes.deadline": "காலக்கெடு",
      "schemes.officialWebsite": "அதிகாரப்பூர்வ வலைத்தளம்",
      "schemes.noResults": "உங்கள் அளவுகோல்களுடன் பொருந்தும் திட்டங்கள் எதுவும் கண்டுபிடிக்கப்படவில்லை.",
      "schemes.clearFilters": "வடிகட்டிகளை அழிக்கவும்",
      "schemes.loading": "திட்டங்கள் ஏற்றப்படுகின்றன...",
      "schemes.aiSearchPrompt": "நீங்கள் எந்த வகையான அரசு திட்டத்தைத் தேடுகிறீர்கள் என்பதை விவரிக்கவும்...",
      "schemes.aiSearchButton": "AI உடன் தேடுங்கள்"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;