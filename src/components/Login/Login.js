import React, { useContext, useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}


const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [newLogin, setNewLogin] = useContext(UserContext)
    
    const provider = new firebase.auth.GoogleAuthProvider();

    const hendleGoogleSingIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                console.log(token);
                var user = result.user;
                console.log(user);
                history.replace(from);
                if (user) {
                    alert("login success")
                    const { displayName, email } = user;
                    const newUser = {
                        user: displayName,
                        email: email
                    }
                   setNewLogin(newUser);
                    
                }
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }
    return (
        <div className="container">
            <h3>{newLogin.user}</h3>
            <div className="login-box d-flex justify-content-center">
                <div className="login-feild">
                    <h2>Login with</h2>
                    <button onClick={hendleGoogleSingIn} className="btn btn-warning">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;