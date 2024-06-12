import logo from "../logo2.jpg";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/init";

function Nav() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "test123")
      .then(({ user }) => {
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    signOut(auth);
    setUser(null);
  }

  const getUserInitial = (user) => {
    if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return '';
  };

  return (
    <div className="container">
      <div className="row">
        <figure className="logo">
          <img className="logo__pic" src={logo} height="50" width="50" />
          <h1>
            Frontend <span className="not__bold">Simplified</span>
          </h1>
        </figure>
        <div className="nav__links">
          {loading ? (
            "loading..."
          ) : user ? (
            <div className="user__profile">
              <button
                type="button"
                className="btn user__btn"
                onClick={logout}
              >
                {getUserInitial(user)}
              </button>
            </div>
          ) : (
            <>
              <button type="button" className="btn login__btn" onClick={login}>
                Login
              </button>
              <button className="btn register__btn" onClick={register}>
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
