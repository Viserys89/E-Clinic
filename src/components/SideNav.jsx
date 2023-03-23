import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/SideNav.css";

const SideNav = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const menuItems = [
    { label: "Dashboard", to: "/DashBoard", iconClass: "fa fa-home" },
    { label: "Doctor", to: "/Doctor", iconClass: "fa fa-user-md" },
    { label: "Aplikasi", to: "/Aplikasi", iconClass: "fa fa-briefcase" },
    { label: "Obat", to: "/Obat", iconClass: "fa fa-plus-square" },
    { label: "Riwayat", to: "/Riwayat", iconClass: "far fa-clock" },
  ];

  return (
    <>
      <nav id="sidebar">
        <div className="p-4">
          <h1>
            <img src="../../public/img/nama&logo.png" id="logo1" />
            <Link to="/DashBoard" id="juduleclinic" className="logo">
              E-Clinic
              <span id="bytikomdik" className="mt-3">
                Klinik Digital by TIKomDik
              </span>
            </Link>
          </h1>
          <Link to="/Poliklinik">
            <button className="btn btn-primary mb-3" id="btnpendaftaran">
              Pendaftaran
            </button>
          </Link>
          <ul className="list-unstyled components mb-5">
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className={index === activeIndex ? "active" : ""}
                onClick={() => handleItemClick(index)}
              >
                <Link to={menuItem.to}>
                  <span
                    id="sideBarIcon"
                    className={`${menuItem.iconClass} mr-3`}
                  />
                  {menuItem.label}
                </Link>
              </li>
            ))}
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
