import React from "react";
import Footer from "../components/footer";
import "../css/global.css";

const Doctor = () => {
  return (
    <div id="doctorPage">
      <nav
        className="navbar navbar-main navbar-expand-lg px-4 shadow-none border-radius-xl"
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
                <b>Dashboard</b>
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
                  <span className="d-sm-inline d-none m-lg-2">
                    Mukhammad Vicky
                  </span>
                  <i className="fa fa-user me-sm-1 ml-2" />
                </a>
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
        <h2 id="titledashboard">Doctor</h2>
        {/* searchbar */}
        <div className="container-lg">
          <div className="s131">
            <form>
              <div className="inner-form">
                <div className="input-field first-wrap">
                  <input id="search" type="text" placeholder="Nama dokter" />
                </div>
                <div>
                  <div className="input-field second-wrap">
                    <select id="dropdownn">
                      <option placeholder>Keahlian</option>
                      <option>Spesialis Umum</option>
                      <option>Spesialis Mata</option>
                      <option>Spesialis THT</option>
                      <option>Spesialis Jantung</option>
                      <option>Spesialis Kulit</option>
                      <option>Spesialis Kandungan</option>
                    </select>
                  </div>
                </div>
                <div className="input-field third-wrap">
                  <button className="btn-search" type="button">
                    <img src="../../public/img/search.svg" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* cards */}
        <div className="container-lg mt-4 mb-4">
          <div className="card-group text-center gap-5">
            <div className="card" style={{ border: "2px solid black" }}>
              <img
                src="../../public/img/doctor.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Dr. Jessica Pricilla</b>
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <b>Spesialis Mata</b>
                </p>
              </div>
            </div>
            <div className="card" style={{ border: "2px solid black" }}>
              <img
                src="../../public/img/doctor.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Dr. Adipati Laksmana</b>
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <b>Spesialis Umum</b>
                </p>
              </div>
            </div>
            <div className="card" style={{ border: "2px solid black" }}>
              <img
                src="../../public/img/doctor.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Dr. Secillia Pradjiwaksono</b>
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <b>Spesialis THT</b>
                </p>
              </div>
            </div>
          </div>
          <div className="card-group text-center gap-5 mt-4">
            <div className="card" style={{ border: "2px solid black" }}>
              <img
                src="../../public/img/doctor.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Dr. Erica Carlina</b>
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <b>Spesialis Jantung</b>
                </p>
              </div>
            </div>
            <div className="card" style={{ border: "2px solid black" }}>
              <img
                src="../../public/img/doctor.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Dr. Hasan Iskandar</b>
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <b>Spesialis Kulit</b>
                </p>
              </div>
            </div>
            <div className="card" style={{ border: "2px solid black" }}>
              <img
                src="../../public/img/doctor.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Pandji Akmaludin</b>
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <b>Spesialis Kandungan</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Doctor;
