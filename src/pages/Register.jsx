import React from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const Register = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(e.target[0].value);
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].file[0];


        // const auth = getAuth();
        const res = await createUserWithEmailAndPassword(auth, email, password);
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">CHAT</span>
                <span className="title">REGISTER</span>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <AddPhotoAlternateIcon />
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
