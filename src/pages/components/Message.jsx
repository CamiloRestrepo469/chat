import { Avatar } from "@mui/material";
import React from "react";

const Message = () => {
    return (
    <div className="Message owner">
        <div className="messageInfo">
            <Avatar/>
            <span>now</span>
        </div>
        <div className="messageContent">
            <p>hello, como va que mas pues que haces donde esta casio que no llegas oelo que mas pues</p>
            <img src="https://images.pexels.com/photos/19185664/pexels-photo-19185664/free-photo-of-carretera-paisaje-naturaleza-francia.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" 
            alt="" 
            srcset=""
             />
        </div>
    </div>
    );
  }
  
  export default Message;
  