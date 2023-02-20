import React from "react";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const Riwayat = () => {
  return (
    <>
      <div id="riwayatPage">
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
                  <b>Riwayat</b>
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
        <div className="container-fluid">
          <h2 id="titledashboard">Riwayat</h2>
          <div
            className="container-lg mt-4"
            style={{ border: "2px solid black", borderRadius: "8px" }}
          >
            <h5 style={{ borderBottom: "1px solid black" }}>
              <b>Januari 2023</b>
            </h5>
            <Link to="/Hasil" style={{ color: "black" }}>
              <div
                className="container-lg mb-3"
                style={{ border: "2px solid black", borderRadius: "8px" }}
              >
                <h4>1 Januari 2023 </h4>
                <p>
                  Kamu mengidap penyakit <b>Diabetes</b>
                </p>
              </div>
            </Link>
            <Link to="/Hasil" style={{ color: "black" }}>
              <div
                className="container-lg mb-3"
                style={{
                  border: "2px solid black",
                  borderRadius: "8px",
                  backgroundColor: "#cdcdcd",
                }}
              >
                <h4>30 Januari 2023 </h4>
                <p>
                  Kamu mengidap penyakit <b>Diabetes</b>
                </p>
              </div>
            </Link>
          </div>
          <div
            className="container-lg mt-4"
            style={{ border: "2px solid black", borderRadius: "8px" }}
          >
            <h5 style={{ borderBottom: "1px solid black" }}>
              <b>Ferbuari 2023</b>
            </h5>
            <Link to="/Hasil" style={{ color: "black" }}>
              <div
                className="container-lg mb-3"
                style={{ border: "2px solid black", borderRadius: "8px" }}
              >
                <h4>1 Ferbuari 2023 </h4>
                <p>
                  Kamu mengidap penyakit <b>Diabetes</b>
                </p>
              </div>
            </Link>
          </div>
          <div
            className="container-lg mt-4"
            style={{ border: "2px solid black", borderRadius: "8px" }}
          >
            <h5 style={{ borderBottom: "1px solid black" }}>
              <b>Maret 2023</b>
            </h5>
            <Link to="/Hasil" style={{ color: "black" }}>
              <div
                className="container-fluid mb-3"
                style={{ border: "2px solid black", borderRadius: "8px" }}
              >
                <h4>1 Maret 2023 </h4>
                <p>
                  Kamu mengidap penyakit <b>Diabetes</b>
                </p>
              </div>
            </Link>
            <Link to="/Hasil" style={{ color: "black" }}>
              <div
                className="container-lg mb-3"
                style={{
                  border: "2px solid black",
                  borderRadius: "8px",
                  backgroundColor: "#cdcdcd",
                }}
              >
                <h4>30 Maret 2023 </h4>
                <p>
                  Kamu mengidap penyakit <b>Diabetes</b>
                </p>
              </div>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Riwayat;
