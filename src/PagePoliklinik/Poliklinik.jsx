import React from "react";
import { Link } from "react-router-dom";

const Poliklinik = () => {
  const poliLinks = [
    {
      name: "Anak & Ibu Hamil",
      link: "/AnakIbuHamil",
    },
    {
      name: "Penyakit Dalam",
      link: "/PenyakitDalamUmum",
    },
    {
      name: "Bedah Umum",
      link: "/BedahUmum",
    },
    {
      name: "Bedah Saraf",
      link: "/BedahSaraf",
    },
    {
      name: "Kandungan",
      link: "/Kandungan",
    },
    {
      name: "Penyakit Luar",
      link: "/Kandungan",
    },
    {
      name: "Orthopaedi",
      link: "/Kandungan",
    },
    {
      name: "Mata",
      link: "/Kandungan",
    },
    {
      name: "Gigi",
      link: "/Kandungan",
    },
    {
      name: "THT",
      link: "/Kandungan",
    },
  ];

  // Divide poliLinks array into two smaller arrays
  const poliLinks1 = poliLinks.slice(0, 5);
  const poliLinks2 = poliLinks.slice(5, 10);

  return (
    <div id="poliklinikPage">
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
              <li
                className="breadcrumb-item text-sm text-dark active"
                aria-current="page"
              >
                <b>Poliklinik</b>
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
      <div className="container-fluid">
        <h2 id="titledashboard">Poliklinik</h2>
        <div className="container-lg mb-3 mt-3">
          <div className="card mb-3" style={{ border: "2px solid black" }}>
            <div className="row no-gutters">
              <div className="card-body">
                <div className="col-12 p-4">
                  <div id="poliklinikRow" className="row d-flex">
                    <div id="poliklinikCollumn" className="col-6 mt-4">
                      {poliLinks1.map((poli) => (
                        <div
                          key={poli.name}
                          className="d-flex justify-content-center mb-lg-4"
                          style={{ borderBottom: "2px solid black" }}
                        >
                          <Link id="poli" to={poli.link} className="p-0">
                            <h3 id="jenisPoliklinik" className="p-0">
                              Poliklinik <b>{poli.name}</b>{" "}
                              <i id="panah" className="fas p-0">
                                
                              </i>
                            </h3>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div id="poliklinikCollumn" className="col-6 mt-4">
                      {poliLinks2.map((poli) => (
                        <div
                          key={poli.name}
                          className="d-flex justify-content-center mb-lg-4"
                          style={{ borderBottom: "2px solid black" }}
                        >
                          <Link id="poli" to={poli.link} className="p-0">
                            <h3 id="jenisPoliklinik" className="p-0">
                              Poliklinik <b>{poli.name}</b>{" "}
                              <i id="panah" className="fas p-0">
                                
                              </i>
                            </h3>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poliklinik;
