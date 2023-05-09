import Button from "@/components/Button";
import app from "@/firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");

  const auth = getAuth(app);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 9) {
      setPasswordError("password must be 8 charater long");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        e.target.reset();
        setPasswordError("");
      })
      .catch((error) => {
        console.error(error);
        setPasswordError(error.message);
      });
  };

  return (
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
            <Button desc="Register" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
