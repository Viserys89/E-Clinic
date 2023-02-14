import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Footer from "../components/footer";
import "../css/DashBoard.css";

const DashBoard = () => {
  var jumlahPasien = 1039;
  var covid = 700;
  var demam = 750;
  var batuk = 650;
  var sakitgigi = 600;
  var sakitmata = 550;
  var sakittenggorokan = 450;
  return (
    <>
      <div id="content">
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
                  <a href="" className="nav-link text-body p-0">
                    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* body */}
        <div className="container-fluid">
          <h2 id="titledashboard">Dashboard</h2>
          {/* firstrow */}
          <div className="row">
            <div className="col-12">
              <div className="card" style={{ border: "2px solid black" }}>
                <div className="card-content">
                  <div className="row">
                    <div className="col-lg-4 col-sm-12">
                      <div className="card-body text-center">
                        <img id="borderimage" src="../public/img/orang.svg" />
                        <h1 id="number" className="display-4 white">
                          36
                        </h1>
                        <span id="descnumber" className="white">
                          Jumlah orang yang telah registrasi
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                      <div className="card-body text-center">
                        <img
                          id="borderimagesuhu"
                          src="../public/img/suhuu.svg"
                        />
                        <h1 id="number" className="display-4 white">
                          36,2-37,5
                        </h1>
                        <span id="descnumber" className="white">
                          Rata-rata suhu tubuh normal manusia
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                      <div className="card-body text-center">
                        <img id="borderimage" src="../public/img/detakk.svg" />
                        <h1 id="number" className="display-4 white">
                          50-100
                        </h1>
                        <span id="descnumber" className="white">
                          Rata-rata detak jantung normal manusia
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* secondrow */}
          <div id="row2" className="row">
            <div className="col-12">
              <div className="card" style={{ border: "2px solid black" }}>
                <div className="card-content">
                  <div className="row">
                    <div id="topbar">
                      <h2 id="titlestatistik">Statistik Penyakit Pasien</h2>
                      <div id="statbutton">
                        <a href="">
                          <button id="yearbutton">Year</button>
                        </a>
                        <a href="">
                          <button id="monthbutton">Month</button>
                        </a>
                        <a href="">
                          <button id="weekbutton">Week</button>
                        </a>
                      </div>
                      <div id="progressbar">
                        <p>
                          {demam} of {jumlahPasien} / <b>Demam</b>
                        </p>
                        <ProgressBar
                          id="progress"
                          variant="success"
                          now={(demam / jumlahPasien) * 100}
                        />
                        <p>
                          {covid} of {jumlahPasien} / <b>Covid</b>
                        </p>
                        <ProgressBar
                          id="progress"
                          variant="info"
                          now={(covid / jumlahPasien) * 100}
                        />
                        <p>
                          {batuk} of {jumlahPasien} / <b>Batuk</b>
                        </p>
                        <ProgressBar
                          id="progress"
                          variant="warning"
                          now={(batuk / jumlahPasien) * 100}
                        />
                        <p>
                          {sakitgigi} of {jumlahPasien} / <b>Sakit Gigi</b>
                        </p>
                        <ProgressBar
                          id="progress"
                          variant="danger"
                          now={(sakitgigi / jumlahPasien) * 100}
                        />
                        <p>
                          {sakitmata} of {jumlahPasien} / <b>Sakit Mata</b>
                        </p>
                        <ProgressBar
                          id="progress"
                          variant="danger"
                          now={(sakitmata / jumlahPasien) * 100}
                        />
                        <p>
                          {sakittenggorokan} of {jumlahPasien} /{" "}
                          <b>Sakit Tenggorokan</b>
                        </p>
                        <ProgressBar
                          id="progress"
                          variant="success"
                          now={(sakittenggorokan / jumlahPasien) * 100}
                        />
                        <p>
                          {demam} of {jumlahPasien} / <b>Demam</b>
                        </p>
                        <ProgressBar
                          id="progress"
                          variant="success"
                          now={(demam / jumlahPasien) * 100}
                        />
                        <p>
                          {covid} of {jumlahPasien} / <b>Covid</b>
                        </p>
                        <ProgressBar
                          id="progress"
                          variant="info"
                          now={(covid / jumlahPasien) * 100}
                        />
                        <p>
                          {batuk} of {jumlahPasien} / <b>Batuk</b>
                        </p>
                        <ProgressBar
                          id="progress"
                          variant="warning"
                          now={(batuk / jumlahPasien) * 100}
                        />
                        <p>
                          {sakitgigi} of {jumlahPasien} / <b>Sakit Gigi</b>
                        </p>
                        <ProgressBar
                          id="progress"
                          variant="danger"
                          now={(sakitgigi / jumlahPasien) * 100}
                        />
                        <p>
                          {sakitmata} of {jumlahPasien} / <b>Sakit Mata</b>
                        </p>
                        <ProgressBar
                          id="progress"
                          variant="danger"
                          now={(sakitmata / jumlahPasien) * 100}
                        />
                        <p>
                          {sakittenggorokan} of {jumlahPasien} /{" "}
                          <b>Sakit Tenggorokan</b>
                        </p>
                        <ProgressBar
                          id="progress"
                          variant="success"
                          now={(sakittenggorokan / jumlahPasien) * 100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* thirdrow */}
              <div id="row3" className="row mt-4">
                <div className="col">
                  <div className="card" style={{ border: "2px solid black" }}>
                    <div className="card-content">
                      <div className="row">
                        <div id="statperkerjaanpasien">
                          <h3 id="titlestatistik">
                            Statistik Perkerjaan Pasien
                          </h3>
                          <div id="statbutton">
                            <a href="">
                              <button id="yearbutton">Year</button>
                            </a>
                            <a href="">
                              <button id="monthbutton">Month</button>
                            </a>
                            <a href="">
                              <button id="weekbutton">Week</button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="progressbar2">
                      <p>
                        {demam} of {jumlahPasien} / <b>Pengusaha</b>
                      </p>
                      <ProgressBar
                        id="progress"
                        variant="success"
                        now={(demam / jumlahPasien) * 100}
                      />
                      <p>
                        {covid} of {jumlahPasien} / <b>Petani</b>
                      </p>
                      <ProgressBar
                        id="progress"
                        variant="info"
                        now={(covid / jumlahPasien) * 100}
                      />
                      <p>
                        {batuk} of {jumlahPasien} / <b>Tentara</b>
                      </p>
                      <ProgressBar
                        id="progress"
                        variant="warning"
                        now={(batuk / jumlahPasien) * 100}
                      />
                      <p>
                        {sakitgigi} of {jumlahPasien} / <b>Guru</b>
                      </p>
                      <ProgressBar
                        id="progress"
                        variant="danger"
                        now={(sakitgigi / jumlahPasien) * 100}
                      />
                      <p>
                        {sakitmata} of {jumlahPasien} / <b>Polisi</b>
                      </p>
                      <ProgressBar
                        id="progress"
                        variant="danger"
                        now={(sakitmata / jumlahPasien) * 100}
                      />
                      <p>
                        {sakittenggorokan} of {jumlahPasien} / <b>Wiraswasta</b>
                      </p>
                      <ProgressBar
                        id="progress"
                        variant="success"
                        now={(sakittenggorokan / jumlahPasien) * 100}
                      />
                      <p>
                        {demam} of {jumlahPasien} / <b>Pengusaha</b>
                      </p>
                      <ProgressBar
                        id="progress"
                        variant="success"
                        now={(demam / jumlahPasien) * 100}
                      />
                      <p>
                        {covid} of {jumlahPasien} / <b>Petani</b>
                      </p>
                      <ProgressBar
                        id="progress"
                        variant="info"
                        now={(covid / jumlahPasien) * 100}
                      />
                      <p>
                        {batuk} of {jumlahPasien} / <b>Tentara</b>
                      </p>
                      <ProgressBar
                        id="progress"
                        variant="warning"
                        now={(batuk / jumlahPasien) * 100}
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card" style={{ border: "2px solid black" }}>
                    <div className="card-content">
                      <div className="row">
                        <div id="statperkerjaanpasien">
                          <h3 id="titlestatistik">Statistik Golongan Darah</h3>
                          <div id="statbutton">
                            <a href="">
                              <button id="yearbutton">Year</button>
                            </a>
                            <a href="">
                              <button id="monthbutton">Month</button>
                            </a>
                            <a href="">
                              <button id="weekbutton">Week</button>
                            </a>
                          </div>
                        </div>
                        <div id="progressbar3">
                          <p>
                            {covid} of {jumlahPasien} / <b>AB+</b>
                          </p>
                          <ProgressBar
                            id="progress"
                            variant="info"
                            now={(covid / jumlahPasien) * 100}
                          />
                          <p>
                            {batuk} of {jumlahPasien} / <b>A+</b>
                          </p>
                          <ProgressBar
                            id="progress"
                            variant="warning"
                            now={(batuk / jumlahPasien) * 100}
                          />
                          <p>
                            {sakitgigi} of {jumlahPasien} / <b>O-</b>
                          </p>
                          <ProgressBar
                            id="progress"
                            variant="danger"
                            now={(sakitgigi / jumlahPasien) * 100}
                          />
                          <p>
                            {sakitmata} of {jumlahPasien} / <b>B-</b>
                          </p>
                          <ProgressBar
                            id="progress"
                            variant="warning"
                            now={(sakitmata / jumlahPasien) * 100}
                          />
                          <p>
                            {sakittenggorokan} of {jumlahPasien} / <b>0+</b>
                          </p>
                          <ProgressBar
                            id="progress"
                            variant="info"
                            now={(sakittenggorokan / jumlahPasien) * 100}
                          />
                          <p>
                            {350} of {jumlahPasien} / <b>A-</b>
                          </p>
                          <ProgressBar
                            id="progress"
                            variant="danger"
                            now={(350 / jumlahPasien) * 100}
                          />
                          <p>
                            {300} of {jumlahPasien} / <b>B+</b>
                          </p>
                          <ProgressBar
                            id="progress"
                            variant="success"
                            now={(300 / jumlahPasien) * 100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DashBoard;
