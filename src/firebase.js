// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBp0XxcrWt5aemXiynCgFLxNYJoz8Exswk",
  authDomain: "chat-6cfd4.firebaseapp.com",
  projectId: "chat-6cfd4",
  storageBucket: "chat-6cfd4.appspot.com",
  messagingSenderId: "148106766641",
  appId: "1:148106766641:web:d763858fd38bc23dd9e810",
  measurementId: "G-VWNN67E68G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()