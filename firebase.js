import firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp(
{
    apiKey: "AIzaSyBc3ALrx8gkSudxUtwx6mQHYpW7iwGB-8o",
    authDomain: "portfolioapp-1ad5b.firebaseapp.com",
    projectId: "portfolioapp-1ad5b",
    storageBucket: "portfolioapp-1ad5b.appspot.com",
    messagingSenderId: "1082816335264",
    appId: "1:1082816335264:web:ff6f6c3be15299575e28c5"
});

const db = firebase.firestore();

export {db};