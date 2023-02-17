import React from "react";

const Register = () => {
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
                    id="input1"
                    type="text"
                    className="inputText"
                    required
                  />
                  <span className="floating-label">Nama Lengkap</span>
                </div>
                <div className="user2">
                  <input
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
                    id="input2"
                    type="text"
                    className="inputText2"
                    required
                  />
                  <span className="floating-label2">Email</span>
                </div>
                <div className="user2">
                  <input
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
