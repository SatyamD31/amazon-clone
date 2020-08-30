import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCTKuZRG9pa41NwuITl5dWptziBwYFv5yk",
    authDomain: "clone-17807.firebaseapp.com",
    databaseURL: "https://clone-17807.firebaseio.com",
    projectId: "clone-17807",
    storageBucket: "clone-17807.appspot.com",
    messagingSenderId: "133750519893",
    appId: "1:133750519893:web:593d5e74a2dec9854afcdc",
    measurementId: "G-7YEKNW6RL7",
});

const auth = firebase.auth();

export { auth };