import { Link, Navigate } from "react-router-dom";
import "./register.css";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { registerCall } from "../../apiCalls";

export default function Register() {
  const { dispatch } = useContext(AuthContext);
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password.current.value !== confirmPassword.current.value){
      confirmPassword.current.setCustomValidity("Passwords don't match!");
    } else {
      try{
        const user = {
          username: username.current.value, 
          email: email.current.value, 
          password: password.current.value, 
          confirmPassword: confirmPassword.current.value 
        }
        await registerCall(user, dispatch);
        Navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
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
            <input className="loginInput" placeholder="Username" type="text" ref={username} required  />
            <input className="loginInput" placeholder="Email" type="email" ref={email} required />
            <input
              className="loginInput"
              placeholder="Password"
              type="password"
              ref={password}
              required
              minLength={6}
            />
            <input
              className="loginInput"
              placeholder="confirmPassword"
              type="password"
              ref={confirmPassword}
              required    
              minLength={6}
            />
            <button className="loginButton" onClick={handleSubmit}>Register</button>
            <Link to="/login" style={{ textDecoration: 'none', textAlign: 'center' }}>
              <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
