import React, { useState } from "react";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  async function ResetPassword(password) {
    const payload = {password};
    const res = await fetch("http://localhost:5000/data/setPassword", {
      method: "POST",
      headers: {
        "Content-Type": "applicatio/json",
      },
      body: JSON.stringify(payload),
    }).then(async (res) => {
      try {
        const jsonRest = await res.json();
        console.log(jsonRest);
        if (res.status == 200) {
          console.log("Password sudah diperbarui")
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
                <h1 id="titleforgot">Reset Password</h1>
                <p id="p1">Please choose your new password</p>
                <div class="user">
                  <br />
                  <input
                    id="input1"
                    type="password"
                    class="inputText"
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                <button id="resetbutton" type="button" class="btn btn-dark" onClick={() => ResetPassword(password)}>
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
