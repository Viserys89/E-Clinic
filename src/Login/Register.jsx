import React from "react";

const Register = () => {
  return (
    <Container-fluid id="containerdua" className="vh-100">
      <div className="container-fluid h-custom">
        <img id="logo" src="../../public/img/nama&logo.png" />{" "}
        <h2 id="clinic" className="fw-bold">
          E-Clinic
        </h2>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div id="apa2" className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <p id="backlogin2">
              <a href="/" id="backlogin2">
                Back to Login
              </a>
            </p>

            <div class="user3">
              <br />
              <input id="input3" type="text" class="inputText3" required />
              <span class="floating-label3">Fullname</span>
            </div>
            <div class="user4">
              <br />
              <input id="input4" type="number" class="inputText4" required />
              <span class="floating-label4">NIK</span>
            </div>
            <div class="user5">
              <br />
              <input id="input5" type="number" class="inputText5" required />
              <span class="floating-label5">Mobile Number</span>
            </div>
            <div class="user6">
              <br />
              <input id="input6" type="email" class="inputText6" required />
              <span class="floating-label6">Email</span>
            </div>
            <div class="user7">
              <br />
              <input id="input7" type="password" class="inputText7" required />
              <span class="floating-label7">Password</span>
            </div>
            <div class="user8">
              <br />
              <input id="input8" type="password" class="inputText8" required />
              <span class="floating-label8">Confirm Password</span>
            </div>
            <a href="/">
              <button id="resetbutton2" type="button" class="btn btn-dark ">
                Register
              </button>
            </a>
          </div>
          <div id="gambar2" className="col-md-5 col-rg-1 col-xl-5">
            <img src="../../public/img/register.png" className="img-fluid" />
          </div>
        </div>
      </div>
    </Container-fluid>
  );
};

export default Register;
