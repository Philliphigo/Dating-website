// src/Messages.js
import React, { useState } from 'react';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            setMessages([...messages, newMessage]);
            setNewMessage('');
        }
    };

    return (
        <div className="messages-container">
            <h1>Your Messages</h1>
            <div className="message-list">
                {messages.length === 0 ? (
                    <div className="no-messages">No messages yet. Start a conversation!</div>
                ) : (
                    messages.map((message, index) => (
                        <div key={index} className="message">
                            {message}
                        </div>
                    ))
                )}
            </div>
            <form onSubmit={handleSendMessage}>
                <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message here..."
                />
                <button type="submit" className="button">Send</button>
            </form>
        </div>
    );
};

export default Messages;
