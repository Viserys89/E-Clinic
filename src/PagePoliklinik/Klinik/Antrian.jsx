import React from "react";
import { Link } from "react-router-dom";

const Antrian = () => {
  return (
    <>
      <div id="antrianPage">
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
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
                  <Link className="opacity-5 text-dark" to="/Poliklinik">
                    Poliklinik
                  </Link>
                </li>
                <li className="breadcrumb-item text-sm">
                  <Link className="opacity-5 text-dark" to="/PenyakitDalamUmum">
                    Penyakit Dalam
                  </Link>
                </li>
                <li
                  className="breadcrumb-item text-sm text-dark active"
                  aria-current="page"
                >
                  <b>Antrian</b>
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
                  <Link
                    to="/Profile"
                    className="nav-link text-body  font-weight-bold px-0"
                  >
                    <span className="d-sm-inline d-none m-lg-2">
                      Mukhammad Vicky
                    </span>
                    <i className="fa fa-user me-sm-1 ml-2" />
                  </Link>
                </li>
                <li className="nav-item px-3 d-flex align-items-center">
                  <a to="javascript:;" className="nav-link text-body p-0">
                    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* body */}
        <div className="container-fluid">
          <h2 id="titledashboard">Nomor Pendaftaran</h2>
          <div class="container mt-5">
            <div className="row ">
              <div className="col-12 d-flex justify-content-center">
                <div className="card text-center" id="cardantrian">
                  <h1 style={{ color: "white" }} id="nomorantrian">
                    001
                  </h1>
                  <h2 id="haiuser">Hai Mukhammad Vicky</h2>
                  <h5 id="mendaftarpada">
                    Kamu mendaftar pada <br /> 30 Januari 2023
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center mb-4">
                <div className="card text-center mt-4" id="cardantrian">
                  <Link to="/Hasil">
                    <h5 id="mendaftarpada" className="p-3">
                      Untuk ke page selanjutnya kamu harus menyelesaikan sesi
                      diagnosis bersama dokter
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Antrian;
