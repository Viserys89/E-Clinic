import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useState } from "react";
import tambahObatForm from "../components/tambahObatForm";

const ObatAdmin = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([
    {
      id: 1,
      namaObat: "Mylanta",
      sediaanObat: "tablet",
      stockObat: 30,
      hargaObat: "Rp.30.000",
    },
    {
      id: 2,
      namaObat: "Panadol",
      sediaanObat: "tablet",
      stockObat: 30,
      hargaObat: "Rp.30.000",
    },
    {
      id: 3,
      namaObat: "Paramex",
      sediaanObat: "tablet",
      stockObat: 30,
      hargaObat: "Rp.30.000",
    },
    {
      id: 4,
      namaObat: "Komik",
      sediaanObat: "tablet",
      stockObat: 30,
      hargaObat: "Rp.30.000",
    },
    {
      id: 5,
      namaObat: "Mefamin",
      sediaanObat: "tablet",
      stockObat: 30,
      hargaObat: "Rp.30.000",
    },
    {
      id: 6,
      namaObat: "Xitrol Eye Drop",
      sediaanObat: "tablet",
      stockObat: 30,
      hargaObat: "Rp.30.000",
    },
    {
      id: 7,
      namaObat: "Amexyl",
      sediaanObat: "tablet",
      stockObat: 30,
      hargaObat: "Rp.30.000",
    },
    {
      id: 8,
      namaObat: "Polysylane",
      sediaanObat: "tablet",
      stockObat: 30,
      hargaObat: "Rp.30.000",
    },
    {
      id: 9,
      namaObat: "Migrani",
      sediaanObat: "tablet",
      stockObat: 30,
      hargaObat: "Rp.30.000",
    },
    {
      id: 10,
      namaObat: "tramboline",
      sediaanObat: "tablet",
      stockObat: 30,
      hargaObat: "Rp.30.000",
    },
    {
      id: 11,
      namaObat: "Codaxyne",
      sediaanObat: "tablet",
      stockObat: 30,
      hargaObat: "Rp.30.000",
    },
    {
      id: 12,
      namaObat: "Kim Lee",
      sediaanObat: "tablet",
      stockObat: 30,
      hargaObat: "Rp.30.000",
    },
    {
      id: 13,
      namaObat: "Kim Lee",
      sediaanObat: "tablet",
      stockObat: 30,
      hargaObat: "Rp.30.000",
    },
    {
      id: 14,
      namaObat: "Kim Lee",
      sediaanObat: "tablet",
      stockObat: 30,
      hargaObat: "Rp.30.000",
    },
    {
      id: 15,
      namaObat: "Faisal Muslim",
      sediaanObat: "tablet",
      stockObat: 30,
      hargaObat: "Rp.30.000",
    },
    {
      id: 16,
      namaObat: "Kim Lee",
      sediaanObat: "tablet",
      stockObat: 30,
      hargaObat: "Rp.30.000",
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
    const filteredData = data.filter((obat) =>
      obat.namaObat.toLowerCase().includes(searchTerm.toLowerCase())
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
                  <b>Obat</b>
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
        {/* body */}
        <div className="container-fluid">
          <h2 id="titledashboard">Obat</h2>
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
                    placeholder="Nama Obat"
                  />
                </div>
                <div className="input-field third-wrap">
                  <button id="btnSearch" type="button" onClick={handleSearch}>
                    <img src="../../public/img/search.svg" />
                  </button>
                </div>
                <button
                  id="btnTambahObat"
                  data-bs-toggle="modal"
                  data-bs-target="#tambahObat"
                  type="button"
                  className="btn btn-dark"
                >
                  Tambah Obat
                </button>
              </div>
            </form>
          </div>
          <Table striped bordered hover>
            <thead style={{ backgroundColor: "black", color: "white" }}>
              <tr>
                <th>ID</th>
                <th>Nama Obat</th>
                <th>Sediaan Obat</th>
                <th>Stock Obat</th>
                <th>Harga Obat</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.namaObat}</td>
                  <td>{item.sediaanObat}</td>
                  <td>{item.stockObat}</td>
                  <td>{item.hargaObat}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      style={{ marginRight: "10px" }}
                    >
                      Edit
                    </button>
                    <button className="btn btn-danger">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div
            className="modal fade"
            id="tambahObat"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    <b>Tambah Obat </b>
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div id="form" className="container-fluid">
                    <tambahObatForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default ObatAdmin;
