import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfilePasien = () => {
  // const [clinicData, setClinicData] = useState({
  //   name: "",
  // });
  const contohNama = "Mukhammad Vicky";
  const inputFields = [
    { name: "Nama", placeholder: "Masukan Nama", type: "text" },
    { name: "NIK", placeholder: "Masukan Nik", type: "text" },
    { name: "Nomor Telfon", placeholder: "Masukan Nomor Telfon", type: "text" },
    {
      name: "Email",
      placeholder: "Masukan Email",
      type: "number",
    },
    { name: "Perkerjaan ", placeholder: "Masukan Perkerjaan", type: "text" },
    {
      name: "Tempat Lahir ",
      placeholder: "Masukan Tempat Lahir",
      type: "text",
    },
    {
      name: "Tanggal Lahir ",
      placeholder: "Masukan Tanggal Lahir",
      type: "text",
    },
    {
      name: "Golongan Darah",
      placeholder: "Masukan Golongan Darah",
      type: "text",
    },
    { name: "Alamat", placeholder: "Masukan Alamat", type: "text" },
    { name: "RT/RW", placeholder: "Masukan RW/RT", type: "text" },
    {
      name: "Jenis Kelamin",
      placeholder: "Masukan Jenis Kelamin",
      type: "text",
    },
    { name: "Kode Wilayah", placeholder: "Masukan Kode Wilayah", type: "text" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClinicData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(clinicData);
  //   // Add logic to save clinic data
  // };

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
                <Link className="opacity-5 text-dark" to="/Dashboardadmin">
                  Pages
                </Link>
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
                  to="/ProfileAdmin"
                  className="nav-link text-body  font-weight-bold px-0"
                >
                  <span className="d-sm-inline d-none m-lg-2">Admin</span>
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
        <h2 id="titledashboard">
          Profile <i>{contohNama}</i>
        </h2>
      </div>
      <div
        id="profilecontainer"
        className="container-lg mt-3"
        style={{ width: "100%" }}
      >
        <div className="row">
          <div className="col12">
            <div className="card" id="profilecard">
              <div className="card-content">
                <img
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  id="profilepicture"
                  src="../../public/img/profile.jpg"
                  style={{ cursor: "pointer" }}
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
                      <Form>
                        <div className="row">
                          {inputFields.map((input) => (
                            <div className="col-lg-6 pl-3 m-0 pb-3">
                              <h4>{input.name}</h4>
                              <input
                                id="kotakinput"
                                type={input.type}
                                style={{ width: "100%" }}
                                placeholder={input.placeholder}
                                // value={clinicData[input.name]}
                                onChange={handleInputChange}
                              />
                            </div>
                          ))}
                        </div>
                      </Form>
                      <Link to="/RiwayatPasien">
                        <button
                          id="tombolsimpan"
                          className="btn btn-dark mb-3"
                          // onClick={handleSubmit}
                        >
                          Riwayat
                        </button>
                      </Link>
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

export default ProfilePasien;
