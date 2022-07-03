import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import CreatePost from "./pages/CreatePost";
import { useState } from "react";
import "./components/components.css";
import logo from "./assets/shred-logo.png";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/sign-in";
    });
  };

  return (
    <Router>
      <nav>
        <div id="img__container">
          <img id="nav__logo" src={logo} alt="" />
        </div>
        <div id="links__container">
          <ul id="nav__bar--links">
            <li>
              <Link className="nav__bar--link" to="/">
                Home
              </Link>
            </li>            
            <li>
              {!isAuth ? (
                <Link className="nav__bar--link" to="/sign-in">
                  Sign In
                </Link>
              ) : (
                <>
                  <Link className="nav__bar--link" to="/create-post">
                    Create
                  </Link>
                  <button id="nav__signOut--btn" onClick={signUserOut}>Sign Out</button>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/create-post" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/sign-in" element={<SignIn setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}
export default App;
