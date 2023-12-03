import React from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">CHAT</span>
                <span className="title">REGISTER</span>
                <form action="">
                    <input type="text" placeholder="display name"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file"> 
                        <AddPhotoAlternateIcon/>
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    );
}

export default Register;
