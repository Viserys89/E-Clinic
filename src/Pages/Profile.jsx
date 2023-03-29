import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div id="profilePage">
      <nav
        className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
        id="navbarBlur"
        navbar-scroll="true"
      >
        <div className="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li className="breadcrumb-item text-sm">
                <a className="opacity-5 text-dark" href="javascript:;">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-sm text-dark active"
                aria-current="page"
              >
                <b>Profile</b>
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
              <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                <a
                  href="./Profile"
                  className="nav-link text-body p-3"
                  id="iconNavbarSidenav"
                >
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line" />
                    <i className="sidenav-toggler-line" />
                    <i className="sidenav-toggler-line" />
                  </div>
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
        <h2 id="titledashboard">Profile</h2>
      </div>
      <div
        id="profilecontainer"
        className="container-lg"
        style={{ width: "100%" }}
      >
        <div className="row">
          <div className="col12">
            <div className="card" id="profilecard">
              <div className="card-content">
                <img
                  id="profilepicture"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  src="../../public/img/profile.jpg"
                />
                <div>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Edit Profile
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body justify-content-center d-flex">
                          <button
                            type="button"
                            className="btn btn-dark mx-lg-2"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary mx-lg-2"
                          >
                            Upload
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger mx-lg-2"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container-lg">
                  <div className="row">
                    <div className="col12">
                      <div className="row">
                        <div className="col-lg-6 pl-3 m-0 pb-3">
                          <h4>Nama</h4>
                          <input
                            id="kotakinput"
                            type="text"
                            style={{ width: "100%" }}
                            placeholder="Masukan Nama"
                          />
                          <h4> Nomor Telpon</h4>
                          <input
                            id="kotakinput"
                            type="number"
                            style={{ width: "100%" }}
                            placeholder="Masukan Nomor Telfon"
                          />
                          <h4> Perkerjaan</h4>
                          <div class="input-group">
                            <select
                              id="dropdowninput"
                              style={{ paddingLeft: "10px" }}
                            >
                              <option selected>Pekerjaan</option>
                              <option value="1">Pengusaha</option>
                              <option value="2">Petani</option>
                              <option value="3">Tentara</option>
                              <option value="4">Guru</option>
                              <option value="5">Polisi</option>
                              <option value="6">Pelajar</option>
                              <option value="7">Pegawai Negara</option>
                              <option value="8">Pegawai Swasta</option>
                            </select>
                          </div>
                          <h4>Tanggal Lahir</h4>
                          <input
                            id="kotakinput"
                            type="date"
                            style={{ width: "100%" }}
                            placeholder="Masukan Tanggal Lahir"
                          />
                          <h4> Alamat</h4>
                          <input
                            id="kotakinput"
                            type="text"
                            style={{ width: "100%" }}
                            placeholder="Masukan Alamat"
                          />
                          <h4>Jenis Kelamin</h4>
                          <div className="card" id="kotakinput">
                            <div className="card-content">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  defaultValue="option1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox1"
                                >
                                  Pria
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox2"
                                  defaultValue="option2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox2"
                                >
                                  Wanita
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 m-0 pb-3">
                          <h4>NIK</h4>
                          <input
                            id="kotakinput"
                            type="number"
                            style={{ width: "100%" }}
                            placeholder="Masukan NIK"
                          />
                          <h4> Email</h4>
                          <input
                            id="kotakinput"
                            type="email"
                            style={{ width: "100%" }}
                            placeholder="Masukan Email"
                          />
                          <h4> Tempat Lahir</h4>
                          <input
                            id="kotakinput"
                            type="text"
                            style={{ width: "100%" }}
                            placeholder="Masukan Tempat Lahir"
                          />
                          <h4> Golongan Darah</h4>
                          <div class="input-group">
                            <select
                              id="dropdowninput"
                              style={{ paddingLeft: "10px" }}
                            >
                              <option selected>Golongan Darah</option>
                              <option value="1">A</option>
                              <option value="2">B</option>
                              <option value="3">AB</option>
                              <option value="4">O</option>
                              <option value="5">A-</option>
                              <option value="6">B-</option>
                              <option value="7">AB-</option>
                              <option value="8">O-</option>
                            </select>
                          </div>
                          <h4> RW RT</h4>
                          <input
                            id="kotakinput"
                            type="text"
                            style={{ width: "100%" }}
                            placeholder="Masukan RT dan RW"
                          />
                          <h4> Kode Wilayah</h4>
                          <input
                            id="kotakinput"
                            type="number"
                            style={{ width: "100%" }}
                            placeholder="Masukan Kode Wilayah"
                          />
                        </div>
                        <a href="">
                          <button
                            id="tombolsimpan"
                            className="btn btn-dark mb-3"
                          >
                            Simpan
                          </button>
                        </a>
                      </div>
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

export default Profile;
