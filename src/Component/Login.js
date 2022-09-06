import React, { useState } from 'react'
import './Login.css'
import { Link} from "react-router-dom";
import { auth } from '../firebase';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 
'firebase/auth'
import {useNavigate} from 'react-router-dom';



const Login = () => {
    // const history = useHistory();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = (e) => { 
        e.preventDefault();//auth
          signInWithEmailAndPassword(auth,email, password)
          .then((userCredential) => {
            // console.log(auth)
            // history.push("/");
            if(userCredential)
            navigate('/')
          })
          .catch((error) => alert(error.message));
      };
      const register = (e) => {
        e.preventDefault();// auth
          createUserWithEmailAndPassword(auth,email, password)
          .then((userCredential) => {
            // console.log(auth)
            if (userCredential) {
            //   history.push("/");
            navigate('/')
            }
          })
          .catch((error) => console.log(error.message));
      };
    
    // console.log(email)
    return (
        <div className="login">
          <Link to="/">
            <img

              className="login_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            />
          </Link>
          <div className="login_container">
            <h1>Sign-in</h1>
    
            <form>
              <h5>E-mail</h5>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
    
              <h5>Password</h5>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
    
              <button
                type="submit"
                onClick={signIn}
                className="login_signInButton"
              >
                Sign In
              </button>
            </form>
    
            <p>
              By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
              Sale. Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice.
            </p>
    
            <button  className="login_registerButton"
            onClick={register}>
              Create your Amazon Account
            </button>
          </div>
        </div>
      );
    }
    

export default Login