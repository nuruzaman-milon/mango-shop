import React, { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "@/firebase/firebase.init";
import Button from "@/components/Button";

const Signin = () => {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        setUser(user);
        console.log(user);
        alert("successfully login");
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        console.log("logout success");
      })
      .catch((error) => {
        console.error("signout error", error);
      });
  };
  return (
    <div>
      <div
        className={
          "flex flex-col justify-center items-center h-screen bg-gradient-to-br gap-1 bg-primary-yellow"
        }
      >
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                placeholder="user name"
                className="input input-bordered"
                type="text"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                placeholder="password"
                className="input input-bordered"
                type="password"
                required
                onChange={(event) => setPassword(event.target.value)}
              />
              <p className="text-xs text-red-700">{passwordError}</p>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <Button desc="login" type="submit" />
            </div>
          </form>
        </div>
        {user.email ? (
          <button className="btn btn-danger" onClick={signOutUser}>
            sign out
          </button>
        ) : (
          <button className="btn btn-primary" onClick={signInWithGoogle}>
            google sign in
          </button>
        )}
        {user.email && (
          <>
            <h1>Email: {user.email}</h1>
            <h1>User Name: {user.displayName}</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Signin;
