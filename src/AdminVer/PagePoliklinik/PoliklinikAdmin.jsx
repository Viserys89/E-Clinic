import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/PoliklinikAdmin.css";

const PoliklinikAdmin = () => {
  const [poliLinks, setPolilinks] = useState([]);

  const option = [
    {
      name: "Bedah Umum",
      value: "bedahUmum",
      link: "",
    },
    {
      name: "Bedah Saraf",
      value: "bedahSaraf",
      link: "",
    },
    {
      name: "Penyakit Luar",
      value: "penyakitLuar",
      link: "",
    },
    {
      name: "Mata",
      value: "mata",
      link: "",
    },
    {
      name: "Gigi",
      value: "gigi",
      link: "",
    },
    {
      name: "THT",
      value: "tht",
      link: "",
    },
  ];

  const [pilihan, setPilihan] = useState([]);
  const handleChangePilihan = (item) => {
    const pilih = option.filter((data) => data.value === item.target.value);
    pilihan.push(pilih[0]);
    console.log(pilihan);
  };
  const handleSubmit = () => {
    setPolilinks(pilihan);
    setPilihan([]);
    console.log(poliLinks);
  };

  // Divide poliLinks array into two smaller arrays
  const poliLinks2 = poliLinks.slice(0, poliLinks.length / 2);
  const poliLinks1 = poliLinks.slice(poliLinks.length / 2, poliLinks.length);

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
                <Link className="opacity-5 text-dark" to="/DashBoardAdmin">
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
                  to="/ProfileAdmin"
                  className="nav-link text-body  font-weight-bold px-0"
                >
                  <span className="d-sm-inline d-none m-lg-2">Admin</span>
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
        <div id="linePoliklinik">
          <h2 id="titlePoliklinik">Poliklinik</h2>
          <div id="btnTambahPoliklinik" className="container-lg">
            <button
              type="button"
              className="btn btn-dark"
              data-bs-toggle="modal"
              data-bs-target="#tambahPoliklinik"
            >
              <i
                className="fa-solid fa-plus"
                style={{ marginRight: "8px" }}
              ></i>
              Poliklinik
            </button>
          </div>
        </div>
        <div
          className="modal fade"
          id="tambahPoliklinik"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <b>Tambah Poliklinik</b>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="col-lg-12">
                  <div className="row mt-3">
                    {option.map((item, index) => {
                      return (
                        <div className="col-sm-3" key={index}>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={index}
                              defaultValue={item.value}
                              onChange={handleChangePilihan}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineCheckbox1"
                            >
                              {item.name}
                            </label>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="row mt-3"></div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg mb-3 mt-5">
          <div className="card mb-3" style={{ border: "2px solid black" }}>
            <div className="row no-gutters">
              <div className="card-body">
                <div className="col-12 p-4">
                  <div id="poliklinikRow" className="row d-flex">
                    <div id="poliklinikCollumn" className="col-6 mt-4">
                      <div
                        className="d-flex justify-content-center mb-lg-4"
                        style={{ borderBottom: "2px solid black" }}
                      >
                        <Link id="poli" to="/" className="p-0">
                          <h3 id="jenisPoliklinik" className="p-0">
                            Poliklinik <b>Penyakit Dalam</b>{" "}
                            <i id="panah" className="fas p-0">
                              
                            </i>
                          </h3>
                        </Link>
                      </div>
                      <div
                        className="d-flex justify-content-center mb-lg-4"
                        style={{ borderBottom: "2px solid black" }}
                      >
                        <Link id="poli" to="/" className="p-0">
                          <h3 id="jenisPoliklinik" className="p-0">
                            Poliklinik <b>Kandungan</b>{" "}
                            <i id="panah" className="fas p-0">
                              
                            </i>
                          </h3>
                        </Link>
                      </div>
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
                      <div
                        className="d-flex justify-content-center mb-lg-4"
                        style={{ borderBottom: "2px solid black" }}
                      >
                        <Link id="poli" to="/" className="p-0">
                          <h3 id="jenisPoliklinik" className="p-0">
                            Poliklinik <b>Ibu dan Anak</b>{" "}
                            <i id="panah" className="fas p-0">
                              
                            </i>
                          </h3>
                        </Link>
                      </div>
                      <div
                        className="d-flex justify-content-center mb-lg-4"
                        style={{ borderBottom: "2px solid black" }}
                      >
                        <Link id="poli" to="/" className="p-0">
                          <h3 id="jenisPoliklinik" className="p-0">
                            Poliklinik <b>Orthopaedi</b>{" "}
                            <i id="panah" className="fas p-0">
                              
                            </i>
                          </h3>
                        </Link>
                      </div>
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
          <div className="card mt-5 mb-5" style={{ border: "2px solid black" }}>
            <div className="card-body text-center">
              <h4>
                <b>
                  Untuk menambahkan klinik kamu harus <br />
                  menekan poliklinik yang ingin ditambahkan klinik
                </b>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliklinikAdmin;
