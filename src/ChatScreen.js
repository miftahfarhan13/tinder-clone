import React, { useState } from 'react';
import "./ChatScreen.css";
import { Avatar } from '@material-ui/core';

function ChatScreen(){
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'N Lidiawaty',
            image: 'https://p16.tiktokcdn.com/aweme/720x720/tiktok-obj/d08c7b2c732f8eea8ca833184a890242.jpeg',
            message: 'Hallo Farhan?'
        }, 
        {
            name: 'N Lidiawaty',
            image: 'https://p16.tiktokcdn.com/aweme/720x720/tiktok-obj/d08c7b2c732f8eea8ca833184a890242.jpeg',
            message: 'Apa Kabar'
        },
        {
            message: 'Baik Banget Hehe'
        }
    ])

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput("");
    }

    return(
        <div className="chatScreen">
            <p className="chatScreen__timestamp"> YOU MATCHED WITH N LIDIAWATY ON 10/08/20</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar
                        className="chatScreen_image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}

            
                <form className="chatScreen_input">
                    <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="chatScreen_inputField"
                        placeholder="Type a message.." 
                        type="text"
                    />
                    <button onClick={handleSend} type="submit" className="chatScreen_inputButton">SEND</button>
                </form>
            
        </div>
    );
}

export default ChatScreen;