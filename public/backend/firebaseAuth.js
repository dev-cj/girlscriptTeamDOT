const firebase = require("firebase/app");
const firebaseAuth = require("firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyCVSvbkIcoIOY9MgfM0hANclEK86QpvTnw",
    authDomain: "girlscriptdot.firebaseapp.com",
    databaseURL: "https://girlscriptdot.firebaseio.com",
    projectId: "girlscriptdot",
    storageBucket: "girlscriptdot.appspot.com",
    messagingSenderId: "167593291635",
    appId: "1:167593291635:web:b0e65df92994dc278fdf06",
    measurementId: "G-28QPGDQS0X"
};

firebase.initializeApp(firebaseConfig);

firebaseAuth.onAuthStateChanged((user) => {
    if(user != null){
        //sign in
        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        const photoUrl = user.photoUrl;


    }
    else{
        //sign out
    }
    console.log(user)
});

const signInButton = document.getElementById("signIn");
const signUpButton = document.getElementById("signUp");
// const signOutButton = document.querySelector("");

console.log("asds");
signInButton.addEventListener("click", () => {
    firebaseAuth.signInWithEmailAndPassword("asd", "asd")
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
      });
});

signUpButton.addEventListener("click", () => {
    firebaseAuth.createUserWithEmailAndPassword(email, pass)
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
      });
});

// signOutButton.addEventListener("click", () => {
//     firebaseAuth.signOut()
//     .catch(() => {

//     });
// });
