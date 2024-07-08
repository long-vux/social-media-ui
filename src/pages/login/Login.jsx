import "./login.css";
import {loginCall} from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext';
import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const { dispatch} = useContext(AuthContext);
  const email = useRef();
  const password = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginCall({
        email: email.current.value, 
        password: password.current.value
    }, dispatch);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Vusocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Vusocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input className="loginInput" placeholder="Email" type="email" ref={email} required />
            <input
              className="loginInput"
              placeholder="Password"
              type="password"
              ref={password}
              required
              minLength={6}
            />
            <button className="loginButton" onClick={handleLogin}>Log In</button>
            <span className="loginForgot">Forgot Password</span>
            <div className="loginRegister" style={{ textAlign: 'center' }}>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <button className="loginRegisterButton">
                  Create a New Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
