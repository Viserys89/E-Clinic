import React,{ useContext, useState, useEffect } from "react";
import { loginContext, remembermelogin } from "../App";
import { makeContext } from "../UseContext";
import { useNavigate } from "react-router-dom";

const Logins = () => {
  const [token, setToken] = useState('');
  const [rememberlogin, setRememberLogin] = useState('');
  const [rememberloggedin, setRememberLoggedIn] = useState(false);
  const [nik, setNIK] = useState('');
  const [pass, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [isLogin, setIsLogin] = useContext(loginContext);
  const {setUserData} = useContext(makeContext);
  const navigate = useNavigate();

  const retrieveJwt = async () => {
    try {
      const jwt = await localStorage.getItem('remember');
      if (jwt) {
        setToken(jwt.password);
        setRememberLogin(jwt.username);
      }
      return jwt;
    } catch (err) {
      console.log(err);
      }
  };

  useEffect(() => {
    retrieveJwt();
  }, [retrieveJwt]);

  async function setLogin(nik, pass) {
    const payload = { 
        nik,
        pass, 
        remember 
      };

    const res = await fetch("http://localhost:5000/login/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload),
    }).then(async (res) => {
    try {
        const jsonRest = await res.json();
        if (res.status === 200) {
        remember
          ? await localStorage.setItem('remember', jsonRest.token)
          : await localStorage.setItem('forgot', jsonRest.token)
          setUserData(jsonRest);
          console.log(jsonRest);
          if (jsonRest.level === 1) {
            window.alert("Login Berhasil");
            setIsLogin(2);
            navigate('/DashBoard');
            setUserData();
          } else if (jsonRest.level === 2) {
            setIsLogin(4);
            navigate('/Diagnosa');
          } else if (jsonRest.level === 3) {
            setIsLogin(3);
            navigate('/DashBoardAdmin');
          }
        } else {
          alert(jsonRest.alert);
        }
      } catch (err) {
        console.log(err);
      }
    });
    return res;
  }

  useEffect(() => {
    if (rememberlogin === 'remember' && !rememberloggedin) {
      remembermelogin(token).then(async res => {
        try {
          const userdata = await res.json();
          if (res.status === 200) {
            setRememberLoggedIn(true);
            setUserData(userdata);
          if (userdata.level === 1) {
            setIsLogin(2);
            alert("Selamat datang kembali");
            }
          } else {
            alert(userdata.alert);
            setLoading(false);
          }
        } catch (err) {
          console.log(err);
        }
      });
    }
  }, [token, rememberlogin]);

      // useEffect(() => {
      //   if (rememberlogin === 'remember' && !rememberLoggedIn) {
      //     remembermelogin(token)
      //       .then(async (res) => {
      //         const userdata = await res.json();
      //         if (res.status === 200) {
      //           setRememberLoggedIn(true);
      //           setUserData(userdata);
      //         if (userdata.level === 1) {
      //           setIsLogin(2);
      //           alert("Selamat datang kembali");
      //           }
      //         } else {
      //           alert(userdata.alert);
      //           setLoading(false);
      //         }
      //       });
      //     }
      // }, [token, rememberlogin]);

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
                  type="number"
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
                  <label className="form-check-label" htmlFor="form2Example3" onClick={() => setRemember(!remember)}>
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