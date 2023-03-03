import React from "react";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const Aplikasi = () => {
  return (
    <>
      <div id="aplikasiPage">
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
          id="navbarBlur"
          navbar-scroll="true"
        >
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm">
                  <a className="opacity-5 text-dark" href="/DashBoard">
                    Pages
                  </a>
                </li>
                <li
                  className="breadcrumb-item text-sm text-dark active"
                  aria-current="page"
                >
                  <b>Aplikasi</b>
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
                  <a href="javascript:;" className="nav-link text-body p-0">
                    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* body */}
        <div className="container-fluid" id="aplikasiContainer">
          <h2 id="titledashboard">Aplikasi</h2>
          <div className="col-12" id="aplikasiCollumn">
            <div className="row align-items-center" id="aplikasiRow">
              <div className="col-4 d-flex justify-content-center">
                <img
                  src="../../public/img/smartphone.png"
                  class="img-fluid rounded d-flex"
                  alt="Responsive image"
                  id="smartPhone"
                ></img>
              </div>
              <div className="col-8">
                <h1 id="aplikasiEclinic">Aplikasi E-Clinic telah tersedia</h1>
                <h5 id="aplikasiEclinic2">
                  Sekarang kamu sudah bisa menggunakan E-CLinic <br /> di
                  smartphone kesayangan anda
                </h5>
                <a href="" id="playstore">
                  <img className="mt-5" src="../../public/img/play store.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Aplikasi;
