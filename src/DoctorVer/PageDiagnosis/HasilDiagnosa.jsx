import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const HasilDiagnosa = () => {
  const contohNama = "Rakansyah Lubis";
  return (
    <div id="hasilDiagnosa">
      <nav
        className="navbar navbar-main navbar-expand-lg px-4 shadow-none border-radius-xl"
        id="navbarBlur"
        navbar-scroll="true"
      >
        <div className="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li className="breadcrumb-item text-sm">
                <Link className="opacity-5 text-dark" to="/DashBoard">
                  Pages
                </Link>
              </li>
              <li className="breadcrumb-item text-sm">
                <Link className="opacity-5 text-dark" to="/Diagnosa">
                  Diagnosa
                </Link>
              </li>
              <li className="breadcrumb-item text-sm">
                <Link className="opacity-5 text-dark" to="/SesiDiagnosa">
                  Sesi Diagnosa
                </Link>
              </li>
              <li
                className="breadcrumb-item text-sm text-dark active"
                aria-current="page"
              >
                <b>Hasil Diagnosa</b>
              </li>
            </ol>
          </nav>
          <div
            className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
            id="navbar"
          >
            <div className="ms-md-auto pe-md-3 d-flex align-items-center"></div>
            <ul className="navbar-nav  justify-content-end">
              <li className="nav-item d-flex align-items-center">
                <i className="fa fa-bell cursor-pointer mx-lg-2 " />
                <a
                  href="./Profile"
                  className="nav-link text-body  font-weight-bold px-0"
                >
                  <span className="d-sm-inline d-none m-lg-2">Admin</span>
                </a>
              </li>
              <li className="nav-item px-1 d-flex align-items-center">
                <a className="nav-link text-body p-0">
                  <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <h2 id="titledashboard">Hasil Diagnosa</h2>
        <div className="d-flex justify-content-center">
          <div
            className="card"
            style={{
              width: "50rem",
              border: "2px solid black",
              marginTop: "160px",
              marginBottom: "160px",
            }}
          >
            <div className="card-body text-center">
              <h4>
                Anda telah mendiagnosa <b>{contohNama}</b>
                <br />
                tekan tombol dibawah untuk mendiagnosis <br />
                pasien selanjutnya
              </h4>
              <Link to="/SesiDiagnosa">
                <Button
                  type="button"
                  className="btn text-white my-3"
                  id="btnBerikanHasilDiagnosis"
                  style={{ width: "300px" }}
                >
                  Kembali
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HasilDiagnosa;
