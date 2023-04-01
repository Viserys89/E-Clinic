import React, { useState, useContext } from "react";
import { loginContext } from "../App";

const Register = () => {
  const [email, setEmail] = useState("");
  const [sPassword, setPassword] = useState("");
  const [sNamaLengkap, setNamaLengkap] = useState("");
  const [sNik, setNik] = useState("");
  const [isLogin, setIsLogin] = useContext(loginContext);

  async function setRegister(email, sPassword, sNamaLengkap, sNik) {
    const payload = {email, sPassword, sNamaLengkap, sNik};
    const res = await fetch("http://localhost:5000/data/signup", {
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
          setIsLogin(1)
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
    <Container-fluid id="containerdua" className="vh-100">
      <div id="containerRegister" className="container-fluid h-custom">
        <img id="logo" src="../../public/img/nama&logo.png" />{" "}
        <h2 id="clinic" className="fw-bold">
          E-Clinic
        </h2>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div id="gambarRegister" className="col-lg-5 my-3">
            <img
              src="../../public/img/register.png"
              className="img-fluid"
              id="imgRegister"
              alt="Sample image"
            />
          </div>
          <div id="apa" className="col-lg-7">
            <div className="container mt-5">
              <div>
                <div className="user">
                  <br />
                  <input
                    onChange={(e) => setNamaLengkap(e.target.value)}
                    value={sNamaLengkap}
                    id="input1"
                    type="text"
                    className="inputText"
                    required
                  />
                  <span className="floating-label">Nama Lengkap</span>
                </div>
                <div className="user2">
                  <input
                  onChange={(e) => setNik(e.target.value)}
                  value={sNik}
                    id="input2"
                    type="number"
                    className="inputText2"
                    required
                  />
                  <span className="floating-label2">NIK</span>
                </div>
                <div className="user2">
                  <input
                    id="input2"
                    type="number"
                    className="inputText2"
                    required
                  />
                  <span className="floating-label2">Nomor Telpon</span>
                </div>
                <div className="user2">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="input2"
                    type="text"
                    className="inputText2"
                    required
                  />
                  <span className="floating-label2">Email</span>
                </div>
                <div className="user2">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={sPassword}
                    id="input2"
                    type="text"
                    className="inputText2"
                    required
                  />
                  <span className="floating-label2">Password</span>
                </div>
                <div className="user2">
                  <input
                    id="input2"
                    type="text"
                    className="inputText2"
                    required
                  />
                  <span className="floating-label2">Confirm Password</span>
                </div>
                <button
                  id="resetButtonRegister"
                  onClick={() => setRegister(email, sPassword, sNamaLengkap, sNik)}
                  type="button"
                  className="btn btn-dark "
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container-fluid>
  );
};

export default Register;