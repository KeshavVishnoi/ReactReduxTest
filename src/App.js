import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state);

  return (
    <>
      <span id="login_info"> {isLoggedIn ? "Hi you are logged in!" : ""}</span>

      <div className="App">
        <SignUp />
        <Login />
      </div>
    </>
  );
}

export default App;
