import React, { useContext } from "react";
import { useState } from "react";
import { loginContext } from "../App";

const Logins = () => {
  const [nik, setNIK] = useState("");
  const [pass, setPassword] = useState("");
  const [isLogin, setIsLogin] = useContext(loginContext);
  async function setLogin(nik, pass) {
    const payload = { nik, pass };
    const res = await fetch("http://10.10.10.91:5000/login", {
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
          setIsLogin(2);
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
    <div id="containersatu">
      <div className="container-fluid h-custom">
        <img id="logo" src="../../public/img/nama&logo.png" />{" "}
        <h2 id="clinic" className="fw-bold">
          E-Clinic
        </h2>
        <div
          id="containerLogin"
          className="row d-flex justify-content-center align-items-center h-100"
        >
          <div id="gambar1" className="col-md-9 col-xl-5">
            <img
              src="../../public/img/klinik.png"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div id="apa" className="col-md-8 col-xl-4 offset-xl-1">
            <form action="POST">
              <h1 id="eclinic" className="text-center fw-bold mx-3 mb-0">
                E-Clinic
              </h1>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"></div>
              <div className="divider d-flex align-items-center my-4">
                <h3 id="welcome" className="text-center fw-bold mx-3 mb-0">
                  Welcome to E-Clinic
                </h3>
              </div>
              {/* NIK input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">
                  NIK
                </label>
                <input
                  onChange={(e) => setNIK(e.target.value)}
                  value={nik}
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Masukan NIK anda"
                />
              </div>
              {/* Password input */}
              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={pass}
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Masukan Password"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="/ForgotPassword" className="text-body">
                  Forgot password?
                </a>
              </div>
              <div id="tombol" className="text-center text-lg-start mt-4 pt-2">
                <button
                  id="btnLogin"
                  onClick={() => setLogin(nik, pass)}
                  type="button"
                  className="btn btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <a href="/Register">
                  <button
                    id="register"
                    type="button"
                    className="btn btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Register
                  </button>
                </a>
              </div>
              <h4 id="app" className="text-center fw-bold mx-3 mb-0">
                Get the app
              </h4>
              <a id="aplaystore" href="">
                <img id="playstore" src="../../public/img/play store.png" />
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logins;
