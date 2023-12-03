import React from "react";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from "@mui/material";
import Messages from "./Messages";
import Input from "./Input";
const Chat = () => {
    return (
        <div className="Chat">
            <div className="chatInfo">
                <Avatar/>
                <span>Jane</span>
                <div className="chatIcons">
                    <VideoCallIcon />
                    <PersonAddAlt1Icon />
                    <MoreHorizIcon />
                </div>
               
            </div>
            <Messages/>
            <Input/>
        </div>
    );
}

export default Chat;
