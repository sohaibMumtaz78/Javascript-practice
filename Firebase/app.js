// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAYQ2HhkSlilKll2PMNB5edvmfq3eMcuZk",
  authDomain: "todo-project-b56cf.firebaseapp.com",
  projectId: "todo-project-b56cf",
  storageBucket: "todo-project-b56cf.firebasestorage.app",
  messagingSenderId: "988552048266",
  appId: "1:988552048266:web:4ff64a913032915e854773",
  measurementId: "G-H6BSQ7W1EV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signup_email = document.getElementById("signup_email")
const signup_password = document.getElementById("signup_password")
const signup_btn = document.getElementById("signup_btn")


const signin_email = document.getElementById("signin_email")
const signin_password = document.getElementById("signin_password")
const signin_btn = document.getElementById("signin_btn")

const user_email = document.getElementById("user_email")
const btn_logout = document.getElementById("btn_logout")

const auth_container = document.getElementById("auth_container")
const user_container = document.getElementById("user_container")


// console.log(signup_email,signup_password,signup_btn)
signup_btn.addEventListener('click', createUseraccount);
signin_btn.addEventListener('click', signIn);
btn_logout.addEventListener('click', logOut);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is login")
    const uid = user.uid;
    auth_container.style.display = "none"
    user_container.style.display = "block"
    user_email.innerText = user.email;
  } else {
    console.log("User is not login")
    auth_container.style.display = "block"
    user_container.style.display = "none"
  }
});

function createUseraccount() {
  // console.log("email" ,  signup_email.value);
  // console.log("password" ,  signup_password.value);
  createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User=>", user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });

}

function signIn() {
  signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
    .then((userCredential) => {
      // Signed in 
      console.log("user ")
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)

    });


}

function logOut(){
  signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}
