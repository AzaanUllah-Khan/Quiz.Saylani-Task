// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, updatePassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

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

const Btn = document.getElementById("btn")
Btn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            window.location.href = 'quiz.html'
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
})
const fP = document.getElementById("fP")
var one = Math.floor(Math.random() * 9).toString();
var two = Math.floor(Math.random() * 9).toString();
var three = Math.floor(Math.random() * 9).toString();
var four = Math.floor(Math.random() * 9).toString();
var five = Math.floor(Math.random() * 9).toString();
var six = Math.floor(Math.random() * 9).toString();
var seven = Math.floor(Math.random() * 9).toString();
var eight = Math.floor(Math.random() * 9).toString();
const p = one + two + three + four + five + six + seven + eight + six + one
fP.addEventListener("click", () => {
    const user = auth.currentUser;
    const newPassword = p;

    updatePassword(user, newPassword).then(() => {
        // Update successful.
        alert(`Your New Password is ${p}`)
    }).catch((error) => {
        // An error ocurred
        // ...
        console.log(error);
    });
})