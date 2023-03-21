import React from "react";
import "../css/globalAdmin.css";
import { Link } from "react-router-dom";

const DoctorAdmin = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Jessica Pricilla",
      specialization: "Spesialis Mata",
      image: "../../public/img/dokterf.jpg",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 2,
      name: "Dr. Adipati Laksmana",
      specialization: "Spesialis Umum",
      image: "../../public/img/dokter.jpg",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 3,
      name: "Dr. Secillia Pradjiwaksono",
      specialization: "Spesialis Kulit",
      image: "../../public/img/dokterf.jpg",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    // {
    //   id: 4,
    //   name: "Dr. Gilang Martin",
    //   specialization: "Spesialis Kandungan",
    //   image: "../../public/img/dokter.jpg",
    //   description:
    //     "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    // },
    // {
    //   id: 5,
    //   name: "Dr. Vania Ramdhani",
    //   specialization: "Spesialis THT",
    //   image: "../../public/img/dokterf.jpg",
    //   description:
    //     "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    // },
    // {
    //   id: 6,
    //   name: "Dr. Steven Vanatham",
    //   specialization: "Spesialis Jantung",
    //   image: "../../public/img/dokter.jpg",
    //   description:
    //     "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    // },
  ];

  const [searchInput, setSearchInput] = React.useState("");
  const [selectedSpecialization, setSelectedSpecialization] =
    React.useState("");
  const [filteredDoctors, setFilteredDoctors] = React.useState(doctors);
  const filterDoctors = (searchInput, specialization) => {
    const filtered = doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(searchInput.toLowerCase()) &&
        (specialization === "" || doctor.specialization === specialization)
    );
    setFilteredDoctors(filtered);
  };

  return (
    <div id="doctorPage">
      <nav
        className="navbar navbar-main navbar-expand-lg px-4 shadow-none border-radius-xl"
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
      {/* body */}
      <div className="container-fluid">
        <h2 id="titledashboard">Doctor</h2>
        {/* searchbar */}
        <div className="container-lg">
          <div className="s131">
            <form>
              <div className="inner-form">
                <div className="input-field first-wrap">
                  <input
                    id="search"
                    type="text"
                    placeholder="Nama dokter"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                </div>
                <div>
                  <div className="input-field second-wrap">
                    <select
                      id="dropdownn"
                      value={selectedSpecialization}
                      onChange={(e) =>
                        setSelectedSpecialization(e.target.value)
                      }
                    >
                      <option value="">Keahlian</option>
                      <option value="Spesialis Umum">Spesialis Umum</option>
                      <option value="Spesialis Mata">Spesialis Mata</option>
                      <option value="Spesialis Kulit">Spesialis Kulit</option>
                      <option value="Spesialis Kandungan">
                        Spesialis Kandungan
                      </option>
                      <option value="Spesialis THT">Spesialis THT</option>
                      <option value="Spesialis Jantung">
                        Spesialis Jantung
                      </option>
                    </select>
                  </div>
                </div>
                <div className="input-field third-wrap">
                  <button
                    id="btnSearch"
                    type="button"
                    onClick={() =>
                      filterDoctors(searchInput, selectedSpecialization)
                    }
                  >
                    <img src="../../public/img/search.svg" />
                  </button>
                </div>
                <button
                  id="tombolTambah"
                  type="button"
                  class="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Tambah Dokter
                </button>
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
                          <b>Tambah Dokter</b>
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <h4>Nama Dokter</h4>
                        <input
                          id="kotakinput"
                          type="text"
                          style={{ width: "100%" }}
                          placeholder="Masukan Nama Dokter"
                        />
                        <h4>Keahlian</h4>
                        <div class="input-group">
                          <select
                            id="dropdowninput"
                            style={{ paddingLeft: "10px" }}
                            value={selectedSpecialization}
                            onChange={(e) =>
                              setSelectedSpecialization(e.target.value)
                            }
                          >
                            <option value="">Keahlian</option>
                            <option value="Spesialis Umum">
                              Spesialis Umum
                            </option>
                            <option value="Spesialis Mata">
                              Spesialis Mata
                            </option>
                            <option value="Spesialis Kulit">
                              Spesialis Kulit
                            </option>
                            <option value="Spesialis Kandungan">
                              Spesialis Kandungan
                            </option>
                            <option value="Spesialis THT">Spesialis THT</option>
                            <option value="Spesialis Jantung">
                              Spesialis Jantung
                            </option>
                          </select>
                        </div>
                        <h4>Jenis Kelamin</h4>
                        <div class="input-group">
                          <select
                            id="dropdowninput"
                            style={{ paddingLeft: "10px" }}
                          >
                            <option selected>Pilih Jenis Kelamin</option>
                            <option value="1">Pria</option>
                            <option value="2">Wanita</option>
                          </select>
                        </div>
                        <h4>NIK</h4>
                        <input
                          id="kotakinput"
                          type="number"
                          style={{ width: "100%" }}
                          placeholder="Masukan NIK"
                        />
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
            </form>
          </div>
        </div>
        {/* cards */}
        <div className="container-lg mt-4 mb-4">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="col">
                <div className="card" style={{ border: "2px solid black" }}>
                  <img src={doctor.image} className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      <b>{doctor.name}</b>
                    </h5>
                    <p className="card-text">{doctor.description}</p>
                    <p className="card-text">
                      <b>{doctor.specialization}</b>
                    </p>
                  </div>
                  <button
                    type="button"
                    class="btn btn-dark"
                    style={{ borderRadius: "0" }}
                    data-bs-toggle="modal"
                    data-bs-target="#removeDoctor"
                    aria-pressed="false"
                    autocomplete="off"
                  >
                    Hapus Dokter
                  </button>
                  <div
                    className="modal fade"
                    id="removeDoctor"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalLongTitle"
                          >
                            Hapus Dokter?
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body text-center">
                          <button type="button" className="btn btn-danger mx-2">
                            Hapus
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary mx-2"
                            data-bs-dismiss="modal"
                          >
                            Batal
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAdmin;
