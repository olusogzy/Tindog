import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD0RzNVD7pZP8Lwj4o0nUwzfpuLm_kTPFQ",
    authDomain: "woven-hangar-354615.firebaseapp.com",
    databaseURL: "https://woven-hangar-354615-default-rtdb.firebaseio.com",
    projectId: "woven-hangar-354615",
    storageBucket: "woven-hangar-354615.appspot.com",
    messagingSenderId: "1090254657016",
    appId: "1:1090254657016:web:847e442ed0666e25ddb20d",
    measurementId: "G-PYK4RZV7T5"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth};