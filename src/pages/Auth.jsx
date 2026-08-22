import { useState } from "react";

const Auth = () => {
  const [mode, setMode] = useState("signup");
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">
            {mode === "signup" ? "SignUp" : "Login"}
          </h1>
          <form className="auth-form">
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-input" type="email" id="email"></input>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                id="password"
              ></input>
            </div>
            <button type="submit" className="btn btn-primary btn-large">
              {mode === "signup" ? "SignUp" : "Login"}
            </button>
          </form>
          <div className="auth-switch">
            {mode === "signup" ? (
              <p>
                Already have an account?{" "}
                <span className="auth-link" onClick={() => setMode("login")}>
                  Login
                </span>
              </p>
            ) : (
              <p>
                Dont have an account?{" "}
                <span className="auth-link" onClick={() => setMode("signup")}>
                  Signup
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
