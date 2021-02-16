import firebase from 'firebase/app'
import 'firebase/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyAvMA1GlKEH7W2BH9Uy-HrpKXR0esYITrA",
    authDomain: "crud-a580b.firebaseapp.com",
    projectId: "crud-a580b",
    storageBucket: "crud-a580b.appspot.com",
    messagingSenderId: "944881769819",
    appId: "1:944881769819:web:b76412b54abae12c3b4e7e"
  }

export const firebaseApp = firebase.initializeApp(firebaseConfig)