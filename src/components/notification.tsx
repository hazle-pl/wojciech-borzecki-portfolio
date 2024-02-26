// Notification.tsx
import React from 'react';

interface NotificationProps {
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return (
    <div className="notification">
      <p>{message}</p>
    </div>
  );
};

export default Notification;
