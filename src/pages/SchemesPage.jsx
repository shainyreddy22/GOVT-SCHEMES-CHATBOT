import React, { useState, useEffect } from 'react';
import { Search, Filter, ExternalLink, Calendar, Users, DollarSign, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import usePageTitle from '../hooks/usePageTitle';
import './SchemesPage.css';

const SchemesPage = () => {
  const { t } = useTranslation();
  usePageTitle('page.schemes');
  const [schemes, setSchemes] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [aiSearchQuery, setAiSearchQuery] = useState('');
  const [aiSearchResults, setAiSearchResults] = useState([]);
  const [isAiSearching, setIsAiSearching] = useState(false);
  const [showAiSearch, setShowAiSearch] = useState(false);

  useEffect(() => {
    fetchSchemes();
  }, []);

  useEffect(() => {
    filterSchemes();
  }, [searchTerm, selectedCategory, schemes]);

  const fetchSchemes = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/schemes');
      const data = await response.json();
      setSchemes(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching schemes:', error);
      setLoading(false);
    }
  };

  const filterSchemes = () => {
    let allSchemes = [];
    
    // Flatten all schemes from different categories
    Object.keys(schemes).forEach(category => {
      schemes[category].forEach(scheme => {
        allSchemes.push({ ...scheme, category });
      });
    });

    // Add AI search results if available
    if (aiSearchResults.length > 0) {
      allSchemes = [...allSchemes, ...aiSearchResults];
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      allSchemes = allSchemes.filter(scheme => scheme.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      allSchemes = allSchemes.filter(scheme =>
        scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.eligibility.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredSchemes(allSchemes);
  };

  const handleAiSearch = async () => {
    if (!aiSearchQuery.trim()) return;
    
    setIsAiSearching(true);
    try {
      const response = await axios.post('http://localhost:3001/api/schemes/search', {
        query: aiSearchQuery,
        language: t('language.english') // Pass current language
      });
      
      setAiSearchResults(response.data.schemes || []);
      setShowAiSearch(false);
      setSearchTerm(''); // Clear regular search
      setSelectedCategory('all'); // Reset category filter
    } catch (error) {
      console.error('AI search error:', error);
    } finally {
      setIsAiSearching(false);
    }
  };

  const categories = [
    { key: 'all', label: t('schemes.categories.all'), icon: '📋' },
    { key: 'education', label: t('schemes.categories.education'), icon: '🎓' },
    { key: 'health', label: t('schemes.categories.health'), icon: '🏥' },
    { key: 'agriculture', label: t('schemes.categories.agriculture'), icon: '🌾' },
    { key: 'employment', label: t('schemes.categories.employment'), icon: '💼' }
  ];

  const getSchemeLinks = (schemeName) => {
    const links = {
      'PM-KISAN': 'https://pmkisan.gov.in',
      'Ayushman Bharat': 'https://pmjay.gov.in',
      'MGNREGA': 'https://nrega.nic.in',
      'PM Scholarship Scheme': 'https://scholarships.gov.in',
      'National Scholarship Portal': 'https://scholarships.gov.in',
      'Pradhan Mantri Suraksha Bima Yojana': 'https://jansuraksha.gov.in',
      'Pradhan Mantri Fasal Bima Yojana': 'https://pmfby.gov.in',
      'Pradhan Mantri Kaushal Vikas Yojana': 'https://pmkvyofficial.org'
    };
    return links[schemeName] || '#';
  };

  if (loading) {
    return (
      <div className="schemes-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>{t('schemes.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="schemes-page">
      <div className="schemes-header">
        <h1>{t('schemes.title')}</h1>
        <p>{t('schemes.description')}</p>
      </div>

      <div className="schemes-controls">
        <div className="search-container">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder={t('schemes.searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (e.target.value === '') {
                setAiSearchResults([]);
              }
            }}
            className="search-input"
          />
          <button 
            className="ai-search-btn"
            onClick={() => setShowAiSearch(!showAiSearch)}
            title={t('schemes.searchAI')}
          >
            <Sparkles size={18} />
            {t('schemes.searchAI')}
          </button>
        </div>

        {showAiSearch && (
          <div className="ai-search-panel">
            <textarea
              value={aiSearchQuery}
              onChange={(e) => setAiSearchQuery(e.target.value)}
              placeholder={t('schemes.aiSearchPrompt')}
              className="ai-search-input"
              rows={3}
            />
            <button 
              onClick={handleAiSearch}
              disabled={isAiSearching || !aiSearchQuery.trim()}
              className="ai-search-submit"
            >
              {isAiSearching ? (
                <>
                  <div className="spinner"></div>
                  {t('schemes.loading')}
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  {t('schemes.aiSearchButton')}
                </>
              )}
            </button>
          </div>
        )}

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.key}
              className={`category-btn ${selectedCategory === category.key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.key)}
            >
              <span className="category-icon">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="schemes-grid">
        {filteredSchemes.length > 0 ? (
          filteredSchemes.map((scheme, index) => (
            <div key={index} className="scheme-card">
              <div className="scheme-header">
                <h3 className="scheme-title">{scheme.name}</h3>
                <span className="scheme-category">{scheme.category}</span>
              </div>
              
              <p className="scheme-description">{scheme.description}</p>
              
              <div className="scheme-details">
                <div className="detail-item">
                  <Users className="detail-icon" />
                  <div>
                    <strong>{t('schemes.eligibility')}:</strong>
                    <p>{scheme.eligibility}</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <DollarSign className="detail-icon" />
                  <div>
                    <strong>{t('schemes.benefits')}:</strong>
                    <p>{scheme.amount}</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <Calendar className="detail-icon" />
                  <div>
                    <strong>{t('schemes.deadline')}:</strong>
                    <p>{scheme.deadline}</p>
                  </div>
                </div>
              </div>
              
              <div className="scheme-actions">
                <a 
                  href={getSchemeLinks(scheme.name)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="official-link"
                >
                  <ExternalLink size={16} />
                  {t('schemes.officialWebsite')}
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>{t('schemes.noResults')}</p>
            <button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); setAiSearchResults([]); }}>
              {t('schemes.clearFilters')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchemesPage;