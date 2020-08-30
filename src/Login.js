import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = event => {
        event.preventDefault();

        // login and redirect to homepage
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            history.push("/");
        }).catch(event => alert(event.message));
    };

    const register = event => {
        event.preventDefault();

        // register, login and redirect to homepage
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            history.push("/")
        }).catch((e) => alert(e.message));

        // auth.createUserWithEmailAndPassword(email, password).then((auth) => {
        //     return auth.user.updateProfile({
        //         displayName: email
        //     });
        // }).catch((error) => alert(error.message))
    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
                    <button className="login__sign-in" type="submit" onClick={login}>Sign In</button>
                </form>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button className="login__register" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
