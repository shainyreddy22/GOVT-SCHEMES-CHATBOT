// Comprehensive Indian Government Schemes Database
const schemes = {
  education: [
    {
      id: "edu_001",
      name: "PM Scholarship Scheme",
      description: "Scholarships for children of armed forces personnel, ex-servicemen, and paramilitary forces",
      ministry: "Ministry of Defence",
      eligibility: [
        "Children of Ex-Servicemen/Ex-Coast Guard personnel",
        "Age limit: Not more than 27 years",
        "Minimum 60% marks in 12th standard"
      ],
      benefits: {
        amount: "Rs. 2,500 per month",
        duration: "Duration of course",
        additional: "One-time grant for professional courses"
      },
      applicationProcess: [
        "Apply online at ksb.gov.in",
        "Submit required documents",
        "Wait for verification",
        "Scholarship credited to bank account"
      ],
      documents: [
        "Service certificate of parent",
        "Income certificate",
        "Educational certificates",
        "Bank account details",
        "Aadhar card"
      ],
      deadline: "31st October 2024",
      officialWebsite: "https://ksb.gov.in",
      status: "Active"
    },
    {
      id: "edu_002",
      name: "National Scholarship Portal (NSP)",
      description: "One-stop solution for end-to-end scholarship process",
      ministry: "Ministry of Electronics & IT",
      eligibility: [
        "Students from economically weaker sections",
        "Merit-based selection criteria",
        "Family income below specified limits"
      ],
      benefits: {
        amount: "Varies by scheme (Rs. 1,000 - Rs. 20,000)",
        duration: "Academic year",
        additional: "Course fees support"
      },
      applicationProcess: [
        "Register on scholarships.gov.in",
        "Fill application form",
        "Upload documents",
        "Submit to institution for verification"
      ],
      documents: [
        "Income certificate",
        "Caste certificate (if applicable)",
        "Educational certificates",
        "Bank passbook",
        "Aadhar card"
      ],
      deadline: "30th November 2024",
      officialWebsite: "https://scholarships.gov.in",
      status: "Active"
    }
  ],
  
  health: [
    {
      id: "health_001",
      name: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
      description: "World's largest health insurance scheme providing free treatment",
      ministry: "Ministry of Health and Family Welfare",
      eligibility: [
        "Families identified in SECC 2011 database",
        "Rural and urban poor families",
        "Occupation-based criteria"
      ],
      benefits: {
        amount: "Rs. 5,00,000 per family per year",
        duration: "Annual renewable",
        additional: "Cashless treatment at empaneled hospitals"
      },
      applicationProcess: [
        "Check eligibility at mera.pmjay.gov.in",
        "Visit nearest Common Service Center",
        "Generate Ayushman card",
        "Use card at empaneled hospitals"
      ],
      documents: [
        "Ration card",
        "Aadhar card",
        "Income proof",
        "SECC verification"
      ],
      deadline: "Ongoing",
      officialWebsite: "https://pmjay.gov.in",
      status: "Active"
    },
    {
      id: "health_002",
      name: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
      description: "Accident insurance scheme for low-income groups",
      ministry: "Ministry of Finance",
      eligibility: [
        "Age between 18-70 years",
        "Have bank account",
        "Give consent for auto-debit"
      ],
      benefits: {
        amount: "Rs. 2,00,000 for accidental death",
        duration: "Annual renewable",
        additional: "Rs. 1,00,000 for partial disability"
      },
      applicationProcess: [
        "Visit participating bank",
        "Fill application form",
        "Submit required documents",
        "Give auto-debit consent"
      ],
      documents: [
        "Bank account details",
        "Aadhar card",
        "Application form",
        "Auto-debit consent"
      ],
      deadline: "31st May annually",
      officialWebsite: "https://pmsby.gov.in",
      status: "Active"
    }
  ],
  
  agriculture: [
    {
      id: "agri_001",
      name: "PM-KISAN",
      description: "Income support scheme for small and marginal farmers",
      ministry: "Ministry of Agriculture and Farmers Welfare",
      eligibility: [
        "Small and marginal farmers",
        "Landholding up to 2 hectares",
        "Cultivable land ownership"
      ],
      benefits: {
        amount: "Rs. 6,000 per year",
        duration: "Ongoing",
        additional: "Direct bank transfer in 3 installments"
      },
      applicationProcess: [
        "Apply online at pmkisan.gov.in",
        "Village-level registration",
        "Aadhar seeding",
        "Bank account linking"
      ],
      documents: [
        "Land ownership documents",
        "Aadhar card",
        "Bank account details",
        "Phone number"
      ],
      deadline: "Ongoing registration",
      officialWebsite: "https://pmkisan.gov.in",
      status: "Active"
    },
    {
      id: "agri_002",
      name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      description: "Crop insurance scheme for farmers",
      ministry: "Ministry of Agriculture and Farmers Welfare",
      eligibility: [
        "All farmers (sharecroppers and tenant farmers)",
        "Compulsory for loanee farmers",
        "Voluntary for non-loanee farmers"
      ],
      benefits: {
        amount: "Sum insured coverage",
        duration: "Crop season",
        additional: "Premium subsidy up to 50%"
      },
      applicationProcess: [
        "Apply through banks/CSCs",
        "Register before cutoff date",
        "Pay premium",
        "Get insurance coverage"
      ],
      documents: [
        "Land records",
        "Aadhar card",
        "Bank account details",
        "Sowing certificate"
      ],
      deadline: "Seasonal (Kharif/Rabi)",
      officialWebsite: "https://pmfby.gov.in",
      status: "Active"
    }
  ],
  
  employment: [
    {
      id: "emp_001",
      name: "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
      description: "Rural employment guarantee program",
      ministry: "Ministry of Rural Development",
      eligibility: [
        "Rural households",
        "Adult members willing to do unskilled manual work",
        "Demand-driven employment"
      ],
      benefits: {
        amount: "Minimum wage as per state",
        duration: "100 days per household per year",
        additional: "Employment within 15 days of demand"
      },
      applicationProcess: [
        "Apply at Gram Panchayat",
        "Get job card",
        "Demand employment",
        "Work allocation within 15 days"
      ],
      documents: [
        "Address proof",
        "Identity proof",
        "Passport size photos",
        "Bank account details"
      ],
      deadline: "Ongoing",
      officialWebsite: "https://nrega.nic.in",
      status: "Active"
    },
    {
      id: "emp_002",
      name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
      description: "Skill development training program",
      ministry: "Ministry of Skill Development and Entrepreneurship",
      eligibility: [
        "Youth aged 15-45 years",
        "School/college dropouts",
        "Unemployed individuals"
      ],
      benefits: {
        amount: "Free training + Rs. 8,000 reward",
        duration: "150-300 hours training",
        additional: "Placement assistance"
      },
      applicationProcess: [
        "Register at pmkvyofficial.org",
        "Choose training center",
        "Complete training",
        "Get certified"
      ],
      documents: [
        "Aadhar card",
        "Educational certificates",
        "Bank account details",
        "Passport size photos"
      ],
      deadline: "Ongoing batches",
      officialWebsite: "https://pmkvyofficial.org",
      status: "Active"
    }
  ],
  
  housing: [
    {
      id: "house_001",
      name: "Pradhan Mantri Awas Yojana (PMAY)",
      description: "Housing for all by 2022 mission",
      ministry: "Ministry of Housing and Urban Affairs",
      eligibility: [
        "Economically Weaker Sections (EWS)",
        "Low Income Groups (LIG)",
        "Middle Income Groups (MIG)",
        "No pucca house ownership"
      ],
      benefits: {
        amount: "Subsidy up to Rs. 2.67 lakh",
        duration: "One-time benefit",
        additional: "Interest subsidy on home loans"
      },
      applicationProcess: [
        "Apply online at pmaymis.gov.in",
        "Submit documents",
        "Verification process",
        "Subsidy disbursement"
      ],
      documents: [
        "Income certificate",
        "Property documents",
        "Aadhar card",
        "Bank account details",
        "Affidavit for no house ownership"
      ],
      deadline: "31st December 2024",
      officialWebsite: "https://pmaymis.gov.in",
      status: "Active"
    }
  ],
  
  social_security: [
    {
      id: "social_001",
      name: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
      description: "Life insurance scheme for low-income groups",
      ministry: "Ministry of Finance",
      eligibility: [
        "Age between 18-50 years",
        "Have bank account",
        "Give consent for auto-debit"
      ],
      benefits: {
        amount: "Rs. 2,00,000 life cover",
        duration: "Annual renewable till age 55",
        additional: "Low premium of Rs. 330 per year"
      },
      applicationProcess: [
        "Visit participating bank",
        "Fill application form",
        "Submit documents",
        "Give auto-debit consent"
      ],
      documents: [
        "Bank account details",
        "Aadhar card",
        "Application form",
        "Auto-debit consent"
      ],
      deadline: "31st May annually",
      officialWebsite: "https://pmjjby.gov.in",
      status: "Active"
    }
  ],
  
  digital_india: [
    {
      id: "digital_001",
      name: "PM-WANI (Wi-Fi Access Network Interface)",
      description: "Public Wi-Fi network program",
      ministry: "Ministry of Communications",
      eligibility: [
        "Public Data Office Aggregators",
        "App Providers",
        "PDO providers"
      ],
      benefits: {
        amount: "Revenue sharing model",
        duration: "Ongoing",
        additional: "Digital connectivity in rural areas"
      },
      applicationProcess: [
        "Register as service provider",
        "Set up Wi-Fi hotspots",
        "Provide services",
        "Earn revenue"
      ],
      documents: [
        "Business registration",
        "Technical specifications",
        "Financial capacity proof"
      ],
      deadline: "Ongoing",
      officialWebsite: "https://digitalindia.gov.in",
      status: "Active"
    }
  ]
};

// Notification templates for different scheme updates
const notificationTemplates = [
  {
    type: "new",
    template: "New {scheme} registration window is now open. Apply before {deadline}."
  },
  {
    type: "deadline",
    template: "Reminder: {scheme} application deadline is approaching on {deadline}."
  },
  {
    type: "urgent",
    template: "Last 7 days to apply for {scheme}. Deadline: {deadline}."
  },
  {
    type: "extension",
    template: "{scheme} application deadline has been extended to {deadline}."
  },
  {
    type: "enhancement",
    template: "{scheme} benefits have been enhanced. New features include {features}."
  }
];

module.exports = {
  schemes,
  notificationTemplates
};