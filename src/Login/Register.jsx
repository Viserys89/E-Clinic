import React, {useState,} from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [sNamaLengkap, setNamaLengkap] = useState("");
  const [sNik, setNik] = useState("");
  const [email, setEmail] = useState("");
  const [sPassword, setPassword] = useState("");
  const [sConfirm, setConfirm] = useState("");
  async function setRegister(sNamaLengkap, sNik, email, sPassword, sConfirm) {
    const payload = {sNamaLengkap, sNik, email, sPassword, sConfirm};
    const res = await fetch("http://localhost:5000/data/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json", 
      },
      body: JSON.stringify(payload),
    }).then(async (res) => {
      try {
        const jsonRest = await res.json();
        console.log(jsonRest);
        if (email && sNik && sNamaLengkap == null) {
          alert('Lengkapi data anda');
        } else if (sNamaLengkap === undefined || null) {
          alert("Mohon Isi Nama Lengkap Anda");
        } else if (sNik === undefined || null) {
          alert("NIK Tidak Valid");
        } else if (sPassword !== sConfirm) {
          alert("Password Dan Confirm Password Tidak Sesuai");
        } else if (res.status == 200) {
          alert("Register Successfully!");
          navigate('/');
        }
        else {
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
                    onChange={(e) => setConfirm(e.target.value)}
                    value={sConfirm}
                    id="input2"
                    type="text"
                    className="inputText2"
                    required
                  />
                  <span className="floating-label2">Confirm Password</span>
                </div>
                <button
                  id="resetButtonRegister"
                  onClick={() => setRegister(sNamaLengkap, sNik, email, sPassword, sConfirm)} 
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