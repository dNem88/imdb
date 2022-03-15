import React, {useState, useEffect} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Import the functions you need from the SDKs you need
// import {
//     initializeApp
// } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import FirebaseAuth and firebase.

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC65oA4icDOMwyLVr2QYCDkrkau_y6pB98",
    authDomain: "imdb-1fe01.firebaseapp.com",
    projectId: "imdb-1fe01",
    storageBucket: "imdb-1fe01.appspot.com",
    messagingSenderId: "20494990544",
    appId: "1:20494990544:web:f593b3bcbbb25d042af2d5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/auth/login',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID
  ],
};

function SignInScreen({dispatch}) {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
        console.log(user)
      dispatch({type: 'user', payload: user})
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  console.log(isSignedIn)
  if (!isSignedIn) {
    return (
      <div style={{display: 'flex', alignItems: "center", flexWrap: 'wrap'}}>
        <h3 style={{width: '100%', display: 'flex', justifyContent :'center'}}>SIGN IN</h3>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  return (
    <div>
      <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
      <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    </div>
  );
}

export default SignInScreen;