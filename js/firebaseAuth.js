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

var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const signInButton = document.getElementById("signIn");
const signUpButton = document.getElementById("signUp");
const errorMessage = document.getElementById("errorMessage");
// const signOutButton = document.querySelector("");

console.log("asds");
signInButton.addEventListener("click", () => {
    const email = document.getElementById("signin-email").value;
    const pass = document.getElementById("signin-password").value;
    if(pass.length > 6 && (reg.test(email))){
            errorMessage.style.display = "none";
        firebaseAuth.signInWithEmailAndPassword(email, pass)
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error);
            alert(errorMessage);
          });
    }
    else console.log("some error");
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
        alert(errorMessage);
      });
});

// signOutButton.addEventListener("click", () => {
//     firebaseAuth.signOut()
//     .catch(() => {
//         console.log(error);
//     });
// });
