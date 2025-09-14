import React from 'react';
import HeroSection from '../components/HeroSection';
import NotificationPanel from '../components/NotificationPanel';
import usePageTitle from '../hooks/usePageTitle';

const HomePage = ({ onChatbotToggle, notifications }) => {
  usePageTitle('page.home');
  
  return (
    <div className="home-page">
      <HeroSection onChatbotToggle={onChatbotToggle} />
      <NotificationPanel notifications={notifications} />
    </div>
  );
};

export default HomePage;