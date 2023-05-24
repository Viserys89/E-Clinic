import React, { useState } from "react";
import { API_URL } from "../App";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  function forgotPassword () {
    const payload = {email}
    fetch(`${API_URL}/data/forgotPassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload)
    }).then(async (res) => {
      const dataRes = await res.json();
      alert(dataRes.alert);
    })
  }

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              id="kartuforgot"
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5">
                <img id="logo" src="../../public/img/nama&logo.png" alt="Logo" />{" "}
                <h2 id="clinic" className="fw-bold">
                  E-Clinic
                </h2>
                <p id="backlogin">
                  <a href="/" id="backlogin">
                    Back to Login
                  </a>
                </p>
                <h1 id="titleforgot">Forgot Password</h1>
                <p id="p1">Send a link to your email to reset your password</p>
                <div className="user">
                  <br />
                  <input 
                  id="input1" 
                  type="text" 
                  className="inputText" 
                  required 
                  onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="floating-label">Your email address</span>
                  <a>
                    <button
                      id="resetbutton"
                      type="button"
                      className="btn btn-dark"
                      onClick={() => forgotPassword()}>
                      Send Reset Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;