import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/SideNav.css";

const SideNavAdmin = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const menuItems = [
    { label: "Dashboard", to: "/DashBoardAdmin", iconClass: "fa fa-home" },
    { label: "Doctor", to: "/DoctorAdmin", iconClass: "fa fa-user-md" },
    { label: "Obat", to: "/ObatAdmin", iconClass: "fa fa-plus-square" },
    {
      label: "Poliklinik",
      to: "/PoliklinikAdmin",
      iconClass: "fas fa-hospital",
    },
    {
      label: "Pasien",
      to: "/PasienAdmin",
      iconClass: "fa fa-stethoscope",
    },
    {
      label: "Jadwal Dokter",
      to: "/PoliklinikDokter",
      iconClass: "fa fa-calendar",
    },
    { label: "Announcement", to: "/Announcement", iconClass: "fas fa-bell" },
    { label: "Antrian", to: "/PoliklinikAntrian", iconClass: "fas fa-tasks" },
  ];

  return (
    <>
      <nav id="sidebar">
        <div className="p-4">
          <h1>
            <img src="../../public/img/nama&logo.png" id="logo1" />
            <Link to="/DashBoardAdmin" id="juduleclinic" className="logo">
              E-Clinic
              <span id="bytikomdik" className="mt-3">
                Klinik Digital by TIKomDik
              </span>
            </Link>
          </h1>
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

export default SideNavAdmin;
