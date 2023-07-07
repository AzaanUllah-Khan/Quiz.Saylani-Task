// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth, sendEmailVerification, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCffMLklX8YT6Ns-Wz9_8ajTr4jp55pRf8",
    authDomain: "login-signup-18385.firebaseapp.com",
    projectId: "login-signup-18385",
    storageBucket: "login-signup-18385.appspot.com",
    messagingSenderId: "1050432810765",
    appId: "1:1050432810765:web:05d85129e90cbc67374a44",
    measurementId: "G-S15D2WVHH9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const Btn = document.getElementById("strtBtn")
Btn.addEventListener("click", () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (!user.emailVerified) {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        // Email verification sent!
                        alert("Verify Your Email First, Make Sure to reload the page after verifying your email");
                        // ...
                    });
            }
            else {
                Btn.style.display = "none";
                document.getElementById('main').style.display = "block";
            }
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
})