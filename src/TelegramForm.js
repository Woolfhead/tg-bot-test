import React, { useState } from 'react';
import axios from 'axios';

const TelegramForm = () => {
    const [chatId, setChatId] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = async () => {
        try {
            await axios.post('/send-message', { chatId, message });
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <h1>Send a message to Telegram bot</h1>
            <input
                type="text"
                placeholder="Chat ID"
                value={chatId}
                onChange={(e) => setChatId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default TelegramForm;
