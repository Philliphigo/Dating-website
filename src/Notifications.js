import React, { useState } from 'react';

const Notifications = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, message: "You have a new message from John.", read: false },
        { id: 2, message: "Your profile has been viewed by Sarah.", read: false },
        { id: 3, message: "New match suggestion for you!", read: true },
    ]);

    const markAsRead = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notification) =>
                notification.id === id ? { ...notification, read: true } : notification
            )
        );
    };

    return (
        <div className="notifications-container">
            <h2>Notifications</h2>
            {notifications.length === 0 ? (
                <p>No notifications.</p>
            ) : (
                notifications.map((notification) => (
                    <div key={notification.id} className={`notification ${notification.read ? 'read' : 'unread'}`}>
                        <p>{notification.message}</p>
                        {!notification.read && (
                            <button onClick={() => markAsRead(notification.id)}>Mark as read</button>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default Notifications;
