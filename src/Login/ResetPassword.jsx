import React, { useContext, useState } from "react";
import { API_URL } from "../App";
import { makeContext } from "../UseContext";

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const {userdata} = useContext(makeContext)
  const {id} = userdata.id;

  function CheckPass() {
    const payload = {
      id: id,
      password, 
    };
    if (password === confirm) {
      fetch(`${API_URL}/data/setPassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then(async (res) => {
          const dataRes = await res.json();
          if (res.status === 200) {
            alert(dataRes.alert);
            window.location.href = '/';
          } else {
            alert(dataRes.alert);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      alert('Cek password anda');
    }
  }
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              id="kartureset"
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5">
                <img id="logo" src="../../public/img/nama&logo.png" alt="Logo" />
                <h2 id="clinic" className="fw-bold">
                  E-Clinic
                </h2>
                <p id="backlogin">
                  <a href="/" id="backlogin">
                    Back to Login
                  </a>
                </p>
                <h1 id="titlereset">Reset Password</h1>
                <div className="user">
                  <br />
                  <input
                    id="input1"
                    type="password"
                    className="inputText"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="floating-label">New Password</span>
                  <input
                    id="input2"
                    type="password"
                    className="inputText"
                    required
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                  />
                  <span className="floating-label">Confirm Password</span>
                  <button
                    id="resetbutton"
                    type="button"
                    className="btn btn-dark"
                    onClick={() => CheckPass()}
                  >
                    Reset Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
