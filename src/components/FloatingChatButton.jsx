import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingChatButton.css';

const FloatingChatButton = ({ onClick, hasNewMessage = false }) => {
  return (
    <button className="floating-chat-button" onClick={onClick}>
      <MessageCircle size={24} />
      {hasNewMessage && <div className="notification-dot"></div>}
      <div className="button-tooltip">Ask about Government Schemes</div>
    </button>
  );
};

export default FloatingChatButton;