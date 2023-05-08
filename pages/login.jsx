import Button from "@/components/Button";
import Layout from "@/components/Layout";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      username: userName,
      password: password,
      redirect: true,
      callbackUrl: "/",
    });
  };
  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     // console.log(userName, password);
  //   }
  //   console.log(userName, password);
  return (
    <Layout>
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
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <Button desc="Login" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
