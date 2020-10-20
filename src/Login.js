import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import {auth, provider} from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () =>{
        //sign in
        auth.signInWithPopup(provider)
        .then(result => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="Login">
            <div className="login__logo">

                <img src = "https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"/>
                <img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19749.png"/>
           
            </div>

            <Button type="submit" onClick={signIn}> Sign In </Button>
            
        </div>
    )
}

export default Login
