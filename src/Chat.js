import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import "./Chat.css";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { InsertEmoticon } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));

    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed>>>", input);
        setInput("");
    };

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className={`chat__message ${true &&
                    'chat__reciever'}`}>
                    <span className="chat_name">Sonny sanga</span>
                    Hey Guys!
                    <span className="chat_timestamp">3:52pm</span>
                </p>
            </div>
            <div className="chat_footer">
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
