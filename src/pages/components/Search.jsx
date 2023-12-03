import { Avatar } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <div className="Search">
            <div className="searchForm">
                <SearchIcon/>
                <input type="text" 
                name="" 
                id="" 
                placeholder="buscar en el chat"
                />
            </div>
            <div className="userChat">
                <Avatar src="https://images.pexels.com/photos/19294997/pexels-photo-19294997/free-photo-of-animal-granja-hierba-melena.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" />
                <div className="userChatInfo">
                    <span>jane</span>
                </div>
            </div>
        </div>
    );
}

export default Search;
