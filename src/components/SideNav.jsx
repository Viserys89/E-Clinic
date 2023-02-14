import React from "react";
import "../css/SideNav.css";
// import DashBoard from "../DashBoard";

const SideNav = (props) => {
  return (
    <>
      <nav id="sidebar">
        <div className="p-4">
          <h1>
            <img src="../../public/img/nama&logo.png" id="logo1" />
            <a href="/DashBoard" id="juduleclinic" className="logo">
              E-Clinic{" "}
              <span id="bytikomdik" className="mt-3">
                Klinik Digital by TIKomDik
              </span>
            </a>
          </h1>
          <a href="/Poliklinik">
            <button className="btn btn-primary mb-3" id="btnpendaftaran">
              Pendaftaran
            </button>
          </a>
          <ul className="list-unstyled components mb-5">
            <li className="active">
              <a href="/DashBoard">
                <span id="sideBarIcon" className="fa fa-home mr-3" />
                Dashboard
              </a>
            </li>
            <li>
              <a href="/Doctor">
                <span id="sideBarIcon" className="fa fa-user-md mr-3" /> Doctor
              </a>
            </li>
            <li>
              <a href="/Aplikasi">
                <span id="sideBarIcon" className="fa fa-briefcase mr-3" />{" "}
                Aplikasi
              </a>
            </li>
            <li>
              <a href="/Obat">
                <span id="sideBarIcon" className="fa fa-plus-square mr-3" />{" "}
                Obat
              </a>
            </li>
            <li>
              <a href="/MainPasien">
                <span id="sideBarIcon" className="fa fa-stethoscope mr-3" />{" "}
                Daftar Pasien
              </a>
            </li>
            <li>
              <a href="/Riwayat">
                <span
                  id="sideBarIcon"
                  className="far fa-clock"
                  style={{ marginRight: "22px" }}
                />
                Riwayat
              </a>
            </li>
            <li id="logout">
              <a href="#">
                <span id="sideBarIcon" className="fa fa-sign-out mr-3" /> Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="content">{props.children}</div>
    </>
  );
};

export default SideNav;
