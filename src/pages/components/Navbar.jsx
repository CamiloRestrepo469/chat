import { Avatar } from "@mui/material";
import React from "react";

const Navbar = () => {
    return (
        <div className="Navbar">
            <span className="logo">lama chat</span>
            <div className="user">
                <Avatar src="https://images.pexels.com/photos/19294997/pexels-photo-19294997/free-photo-of-animal-granja-hierba-melena.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" />
                <span>john</span>
                <button id="Ibutton">logout</button>
            </div>
        </div>
    );
}

export default Navbar;
