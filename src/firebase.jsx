// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAekEGJ0mj0J6O9Ay94QttzEBFSpW0Kf7g",
  authDomain: "linkmail-b92a0.firebaseapp.com",
  projectId: "linkmail-b92a0",
  storageBucket: "linkmail-b92a0.firebasestorage.app",
  messagingSenderId: "182950533113",
  appId: "1:182950533113:web:a2109e87d003c828b3cf28"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
