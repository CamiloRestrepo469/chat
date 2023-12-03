import React from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Input = () => {
    return (
        <div className="Input">
            <input type="text" placeholder="Type someting ....." />
            <div className="send">
                {/* incono */}
                <AttachFileIcon/>
                <input type="text" style={{ display: "none" }} id="file" />
                <label htmlFor="file">
                    {/* incono */}
                    <AddPhotoAlternateIcon/>

                </label>
                <button id="Ibutton">Send</button>
            </div>
        </div>
    );
}

export default Input;
