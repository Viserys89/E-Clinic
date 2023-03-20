import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/PoliklinikAdmin.css";

const PoliklinikAdmin = () => {
  const [poliLinks, setPolilinks] = useState([
    {
      name: "Anak & Ibu Hamil",
      link: "",
    },
  ]);

  const [poliklinik, setPoliklinik] = useState([]);
  const handleChange = (event) => {
    setPoliklinik([...poliklinik, event.target.value]);
    console.log(poliklinik);
  };
  const handleSubmit = () => {
    const tess = poliklinik.map((item, index) => {
      const tes = {
        name: item,
        link: "",
      };
      return tes;
    });
    setPolilinks(tess);
    console.log([...poliLinks, [tess[0]]]);
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
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  {/* form tambah poliklinik */}
                  <div className="col-lg-12">
                    <div className="row mt-3">
                      <div className="col-sm-3">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue="Orthopaedi"
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox1"
                          >
                            Orthopaedi
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue="THT"
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox2"
                          >
                            THT
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue="option4"
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox2"
                          >
                            Gigi dan Mulut
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end */}
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
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
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
          <div className="card" style={{ border: "2px solid black" }}>
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
