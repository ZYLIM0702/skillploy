import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";


// firebase-config.js
// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjFLQAyM1F_KCG1Bl2eMJ1zu-h7g5gL8U",
    authDomain: "skillploy.firebaseapp.com",
    projectId: "skillploy",
    storageBucket: "skillploy.firebasestorage.app",
    messagingSenderId: "234537234700",
    appId: "1:234537234700:web:450eb6389910ca782d5929"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Authentication Helper Functions
const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Login failed:", error.message);
        throw error;
    }
};

const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Logout failed:", error.message);
    }
};

const onAuthChange = (callback) => {
    onAuthStateChanged(auth, callback);
};

// Export everything
export { db, auth, login, logout, onAuthChange,collection };
