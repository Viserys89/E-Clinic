import React from "react";

const ResetPassword = () => {
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
                <h1 id="titleforgot">Reset Password</h1>
                <p id="p1">Please choose your new password</p>
                <div class="user">
                  <br />
                  <input
                    id="input1"
                    type="password"
                    class="inputText"
                    required
                  />
                  <span class="floating-label">New Password</span>
                </div>
                <div class="user2">
                  <input
                    id="input2"
                    type="password"
                    class="inputText2"
                    required
                  />
                  <span class="floating-label2">Confirm Password</span>
                </div>
                <button id="resetbutton" type="button" class="btn btn-dark ">
                  Save New Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
