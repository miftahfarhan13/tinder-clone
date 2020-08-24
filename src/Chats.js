import React from 'react';
import Chat from './Chat';
import "./Chats.css";

function Chats(){
    return (
    <div className="chats">
        <Chat
            name="N Lidiawaty"
            message="Baik Banget Hehe"
            timestamp="40 seconds ago"
            profilePic="https://p16.tiktokcdn.com/aweme/720x720/tiktok-obj/d08c7b2c732f8eea8ca833184a890242.jpeg"
        />
        <Chat
            name="Ghea Indrawari"
            message="Hallo Farhan"
            timestamp="40 seconds ago"
            profilePic="https://static.republika.co.id/uploads/images/inpicture_slide/096808500-1587935205-5ea51252cfa24-ghea-indrawarij.jpg"
        />
    </div>
    )
}

export default Chats;