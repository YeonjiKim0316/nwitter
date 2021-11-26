import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCMMc_tWBmBmkC3vFrx_o_o0w4OHq_vu08",
    authDomain: "nwitter-4f7b5.firebaseapp.com",
    projectId: "nwitter-4f7b5",
    storageBucket: "nwitter-4f7b5.appspot.com",
    messagingSenderId: "40333288991",
    appId: "1:40333288991:web:52f2a837c93d6bb808972a"
  };

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();