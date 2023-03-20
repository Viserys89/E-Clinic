import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useState } from "react";

const DaftarPasien = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([
    {
      no: 1,
      nama: "Mukhammad Vicky",
      umur: "17",
      gender: "Laki-laki",
      notelp: "087821010989",
      email: "fistvicky@gmail.com",
    },
    {
      no: 2,
      nama: "Aflah Rizkyadhafin Nurfikri",
      umur: "17",
      gender: "Laki-laki",
      notelp: "087821010989",
      email: "fistvicky@gmail.com",
    },
    {
      no: 3,
      nama: "Faisal Muslim",
      umur: "17",
      gender: "Laki-laki",
      notelp: "087821010989",
      email: "fistvicky@gmail.com",
    },
    {
      no: 4,
      nama: "Rakhansyah Lubis",
      umur: "17",
      gender: "Laki-laki",
      notelp: "087821010989",
      email: "fistvicky@gmail.com",
    },
    {
      no: 5,
      nama: "Harun Kusnaedi",
      umur: "17",
      gender: "Laki-laki",
      notelp: "087821010989",
      email: "fistvicky@gmail.com",
    },
    {
      no: 6,
      nama: "Fina Nurrahmat",
      umur: "17",
      gender: "Laki-laki",
      notelp: "087821010989",
      email: "fistvicky@gmail.com",
    },
    {
      no: 7,
      nama: "Raygie Putra",
      umur: "17",
      gender: "Laki-laki",
      notelp: "087821010989",
      email: "fistvicky@gmail.com",
    },
  ]);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClickPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const filteredData = data.filter((pasien) =>
      pasien.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <>
      <div id="obatPage">
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
                  <b>Pasien</b>
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
          <h2 id="titledashboard">Pasien</h2>
        </div>
        <div className="container-lg mt-3">
          <div className="s131 mb-5">
            <form>
              <div className="inner-form">
                <div className="input-field first-wrap">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    id="search"
                    placeholder="Nama Pasien"
                  />
                </div>
                <div className="input-field third-wrap">
                  <button
                    className="btn-search"
                    type="button"
                    onClick={handleSearch}
                  >
                    <img src="../../public/img/search.svg" />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <Table striped bordered hover>
            <thead style={{ backgroundColor: "black", color: "white" }}>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Umur</th>
                <th>Gender</th>
                <th>No. Telp</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr key={item.id}>
                  <td>{item.no}</td>
                  <td>{item.nama}</td>
                  <td>{item.umur}</td>
                  <td>{item.gender}</td>
                  <td>{item.notelp}</td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      style={{ marginRight: "10px" }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div id="tbldatanomor" className="pagination">
          <button
            id="arrowleft"
            onClick={handleClickPrev}
            disabled={currentPage === 1}
          >
            <i class="fas fa-arrow-left"></i>
          </button>
          <span id="currentnumber">
            {currentPage} / {totalPages}
          </span>
          <button
            id="arrowright"
            onClick={handleClickNext}
            disabled={currentPage === totalPages}
          >
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default DaftarPasien;
