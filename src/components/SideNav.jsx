import React from "react";
import { Link } from "react-router-dom";
import "../css/SideNav.css";

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
          <Link to="/Poliklinik">
            <button className="btn btn-primary mb-3" id="btnpendaftaran">
              Pendaftaran
            </button>
          </Link>
          <ul className="list-unstyled components mb-5">
            <li className="active">
              <Link to="/DashBoard">
                <span id="sideBarIcon" className="fa fa-home mr-3" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/Doctor">
                <span id="sideBarIcon" className="fa fa-user-md mr-3" /> Doctor
              </Link>
            </li>
            <li>
              <Link to="/Aplikasi">
                <span id="sideBarIcon" className="fa fa-briefcase mr-3" />{" "}
                Aplikasi
              </Link>
            </li>
            <li>
              <Link to="/Obat">
                <span id="sideBarIcon" className="fa fa-plus-square mr-3" />{" "}
                Obat
              </Link>
            </li>
            <li>
              <Link to="/MainPasien">
                <span id="sideBarIcon" className="fa fa-stethoscope mr-3" />{" "}
                Daftar Pasien
              </Link>
            </li>
            <li>
              <Link to="/Riwayat">
                <span
                  id="sideBarIcon"
                  className="far fa-clock"
                  style={{ marginRight: "22px" }}
                />
                Riwayat
              </Link>
            </li>
            <li id="logout">
              <a href="/">
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
