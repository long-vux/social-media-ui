import "./register.css";

export default function Register() {
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
            <input className="loginInput" placeholder="Username" type="text" />
            <input className="loginInput" placeholder="Email" type="email" />
            <input
              className="loginInput"
              placeholder="Password"
              type="password"
            />
            <input
              className="loginInput"
              placeholder="Password"
              type="password"
            />
            <button className="loginButton">Register</button>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
