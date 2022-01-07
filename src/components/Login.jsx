import { useRef } from "react";
import { logInRequest } from "../api";
import { useDispatch } from "react-redux";
import { logIn } from "../actions/logIn";
import { resetState } from "../actions/logIn";
import { useState } from "react";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const [checkLogin, setCheckLogin] = useState(null);
  const login = async (e) => {
    e.preventDefault();
    const bool = await logInRequest({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    if (bool) {
      dispatch(logIn());
      setCheckLogin(null);
    } else if (bool === false) {
      setCheckLogin("Invalid Login Details!");
      dispatch(resetState());
    }
  };

  return (
    <>
      <form onSubmit={login} className="form">
        <span className="invalid">{checkLogin != null ? checkLogin : ""}</span>
        <span className="invalid">All fields are mandatory</span>
        <h2>Login</h2>
        <label htmlFor="emailLogin">Email:</label>
        <input
          type="email"
          name="emailLogin"
          ref={emailRef}
          id="emailLogin"
          required
        />
        <label htmlFor="passwordLogin">Password:</label>
        <input
          type="password"
          name="passwordLogin"
          ref={passwordRef}
          id="passwordLogin"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
