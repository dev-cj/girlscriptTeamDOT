var firebaseAuth = firebase.auth();

firebaseAuth.onAuthStateChanged((user) => {
    if(user != null){
        //sign in
        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        const photoUrl = user.photoUrl;
        window.location.href = "/dashboard.html"
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
    const email = document.getElementById("signin-email").value;
    const pass = document.getElementById("signin-password").value;
    firebaseAuth.signInWithEmailAndPassword(email, pass)
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
      });
});

signUpButton.addEventListener("click", () => {
    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const pass = document.getElementById("signup-password").value;
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
//         console.log(error);
//     });
// });
