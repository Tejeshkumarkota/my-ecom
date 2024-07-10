import React from "react";
import { toast, ToastContainer } from "react-toastify";
import MasterLayout from "../../shared/_components/MasterLayout";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onSubmit = () => {
    toast.success("Authentication successfull!");
  };

  return (
    <MasterLayout>
      <h1>Login</h1>
      <div className="con-box">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email ID"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              required
            />
            <div>
              <button onClick={onSubmit}> Login </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer theme="colored" />
    </MasterLayout>
  );
}
