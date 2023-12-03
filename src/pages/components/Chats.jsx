import React from "react";
import { Avatar } from "@mui/material";

const Chats = () => {
    return (
        <div className="Chats">
            <div className="userChat">
                <div className="userChatInfo">
                <Avatar src="https://images.pexels.com/photos/19294997/pexels-photo-19294997/free-photo-of-animal-granja-hierba-melena.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" />
                    <span>jane</span>
                    <p>como</p>
                </div>
            </div>

            <div className="userChat">
                <div className="userChatInfo">
                <Avatar src="https://images.pexels.com/photos/19294997/pexels-photo-19294997/free-photo-of-animal-granja-hierba-melena.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" />
                    <span>camilo</span>
                    <p>de nuevo este es un mensaje de pruebas pa ver hata donde llega</p>
                </div>
            </div>
        </div>
    );
}

export default Chats;
