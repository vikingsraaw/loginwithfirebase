import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDKokVd0rU9SLo5Jr7T4sokjp-nPqbffOk",
    authDomain: "loginwith-a3e3c.firebaseapp.com",
    projectId: "loginwith-a3e3c",
    storageBucket: "loginwith-a3e3c.appspot.com",
    messagingSenderId: "845030703237",
    appId: "1:845030703237:web:2c98eac7dc9ac06d67e9ec"
  };
  
 const fire=  firebase.initializeApp(firebaseConfig);
  export default fire;
