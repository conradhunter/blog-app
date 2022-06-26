import React from 'react';
import { auth, provider } from '../firebase.js';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignIn = ({setIsAuth}) => {

    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('isAuth', true);
            setIsAuth(true);
            navigate('/');
        })
    };

    return (
        <div id='signIn__page'>
            <p>Sign In with Google</p>
            <button onClick={signInWithGoogle} id='google__btn'>Sign In with Google</button>
        </div>
    );
}

export default SignIn;
