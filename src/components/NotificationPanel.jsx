import React, { useState } from 'react';
import { Bell, Clock, AlertCircle, X, ExternalLink } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import './NotificationPanel.css';

const NotificationPanel = ({ notifications }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [dismissedNotifications, setDismissedNotifications] = useState(new Set());

  const activeNotifications = notifications.filter(notification => 
    !dismissedNotifications.has(notification.id)
  );

  const dismissNotification = (id) => {
    setDismissedNotifications(prev => new Set([...prev, id]));
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'deadline':
        return <Clock size={16} className="notification-icon deadline" />;
      case 'new':
        return <Bell size={16} className="notification-icon new" />;
      case 'urgent':
        return <AlertCircle size={16} className="notification-icon urgent" />;
      default:
        return <Bell size={16} className="notification-icon" />;
    }
  };

  const getTimeAgo = (timestamp) => {
    try {
      return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
    } catch (error) {
      return 'Recently';
    }
  };

  if (activeNotifications.length === 0) {
    return null;
  }

  return (
    <div className={`notification-panel ${isExpanded ? 'expanded' : ''}`}>
      <div className="notification-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="notification-title">
          <Bell size={18} />
          <span>Live Updates</span>
          <span className="notification-count">{activeNotifications.length}</span>
        </div>
        <button className="expand-btn">
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      {isExpanded && (
        <div className="notification-content">
          {activeNotifications.map((notification) => (
            <div key={notification.id} className={`notification-item ${notification.type}`}>
              <div className="notification-main">
                <div className="notification-header-item">
                  {getNotificationIcon(notification.type)}
                  <span className="notification-scheme">{notification.scheme}</span>
                  <button 
                    className="dismiss-btn"
                    onClick={() => dismissNotification(notification.id)}
                  >
                    <X size={14} />
                  </button>
                </div>
                
                <div className="notification-body">
                  <p className="notification-message">{notification.message}</p>
                  
                  {notification.deadline && (
                    <div className="notification-deadline">
                      <Clock size={12} />
                      <span>Deadline: {new Date(notification.deadline).toLocaleDateString()}</span>
                    </div>
                  )}
                  
                  <div className="notification-footer">
                    <span className="notification-time">
                      {getTimeAgo(notification.timestamp)}
                    </span>
                    
                    {notification.link && (
                      <a 
                        href={notification.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="notification-link"
                      >
                        <ExternalLink size={12} />
                        Learn More
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationPanel;