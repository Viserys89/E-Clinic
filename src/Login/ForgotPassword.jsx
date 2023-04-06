import React, { useContext } from "react";
import { useState } from "react";
import { loginContext } from "../App";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  async function setForgotPassword(email) {
    const payload = { email };
    const res = await fetch("http://localhost:5000/data/forgotPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then(async (res) => {
      try {
        const jsonRest = await res.json();
        console.log(jsonRest);
        if (res.status == 200) {
          console.log("Link Sudah dikirim Ke Email Anda")
        } else {
          alert(jsonRest.alert);
        }
      } catch (error) {
        console.error(error);
      }
    });
    return res;
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
                <img id="logo" src="../../public/img/nama&logo.png" />{" "}
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
                <div class="user">
                  <br />
                  <input id="input1" type="text" class="inputText" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <span class="floating-label">Your email address</span>
                  <a href="/ResetPassword">
                    <button
                      id="resetbutton"
                      type="button"
                      class="btn btn-dark"
                      onClick={() => setForgotPassword(email)}
                    >
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
