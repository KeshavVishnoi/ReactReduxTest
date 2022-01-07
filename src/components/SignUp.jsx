import { signUpRequest } from "../api";
import { useRef } from "react";
const SignUp = () => {
  const signUp = (e) => {
    e.preventDefault();
    signUpRequest({
      first_name: fnameRef.current.value,
      last_name: lnameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  const fnameRef = useRef();
  const lnameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  return (
    <>
      <form onSubmit={signUp} className="form">
        <span className="invalid">All fields are mandatory</span>
        <h2> Sign Up</h2>
        <label className="labels" htmlFor="first_name">
          First Name:
        </label>
        <input type="text" ref={fnameRef} id="first_name" required />
        <label htmlFor="last_name">Last Name:</label>
        <input type="text" ref={lnameRef} id="last_name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" ref={emailRef} id="email" required />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          ref={passwordRef}
          id="password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUp;
