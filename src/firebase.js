import {initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCbfSNBbx2mJf4ZQiNyd8GPgx0uoPdtQ8",
    authDomain: "twitter-clone-a9f62.firebaseapp.com",
    projectId: "twitter-clone-a9f62",
    storageBucket: "twitter-clone-a9f62.appspot.com",
    messagingSenderId: "413837250850",
    appId: "1:413837250850:web:d9fb0dd9256f23e916157b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;