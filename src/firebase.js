import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBpDcCAD2lxxzPKHCJViL8NHr6K6Hh0Ls8",
    authDomain: "sp-4-dev-united-final.firebaseapp.com",
    projectId: "sp-4-dev-united-final",
    storageBucket: "sp-4-dev-united-final.appspot.com",
    messagingSenderId: "777555410429",
    appId: "1:777555410429:web:9f3adda3e4a078916d2d94"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const loginGoogle = () => auth.signInWithPopup(provider);
export const logout = () => auth.signOut();
export default firebase;