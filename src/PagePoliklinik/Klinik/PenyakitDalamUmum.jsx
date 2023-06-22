import React, { useContext } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { makeContext } from "../../UseContext";

const PenyakitDalamUmum = () => {
  const {userdata} = useContext(makeContext);
  const [currentDay, setCurrentDay] = useState("Hari ini");
  const handleClick = (day) => {
    setCurrentDay(day);
  };
  const options = [
    { value: 1, label: "Dr. Jessica Pricilla" },
    { value: 2, label: "Dr. Adipati Laksmana" },
    { value: 3, label: "Dr. Secillia Pradjiwaksono" },
    { value: 4, label: "Dr. Erica Carlina" },
    { value: 5, label: "Dr. Hasan Iskandar" },
    { value: 6, label: "Dr. Pandji Akmaludin" },
  ];

  const items = [
    { day: "Senin", doctors: ["Dr. Jessica Pricilla", "Dr. Erica Carlina"] },
    { day: "Selasa", doctors: ["Dr. Jessica Pricilla", "Dr. Erica Carlina"] },
    { day: "Rabu", doctors: ["Dr. Jessica Pricilla", "Dr. Erica Carlina"] },
    { day: "Kamis", doctors: ["Dr. Jessica Pricilla", "Dr. Erica Carlina"] },
    { day: "Jum'at", doctors: ["Dr. Jessica Pricilla", "Dr. Erica Carlina"] },
    { day: "Sabtu", doctors: ["Dr. Jessica Pricilla", "Dr. Erica Carlina"] },
  ];
  const renderedItems = items.map((item) => (
    <div className="col-6 mt-2 text-center" key={item.day}>
      <div>
        <h4>
          <b>{item.day}</b>
        </h4>
        {item.doctors.map((doctor) => (
          <p key={doctor}>{doctor}</p>
        ))}
      </div>
    </div>
  ));
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([
    {
      id: 1,
      nama: "John Doe",
      umur: 19,
      jeniskelamin: " pria",
    },
    {
      id: 2,
      nama: "Jack Amstrong",
      umur: 21,
      jeniskelamin: " pria",
    },
    {
      id: 3,
      nama: "Gloria Smith",
      umur: 23,
      jeniskelamin: "wanita",
    },
    {
      id: 4,
      nama: "Sara Johnson",
      umur: 31,
      jeniskelamin: "wanita",
    },
    {
      id: 5,
      nama: "Tom Wilson",
      umur: 17,
      jeniskelamin: "pria",
    },
    {
      id: 6,
      nama: "Corry Simpsons",
      umur: 19,
      jeniskelamin: "wanita",
    },
    {
      id: 7,
      nama: "Bobby Anderson",
      umur: 29,
      jeniskelamin: " pria",
    },
    {
      id: 8,
      nama: "Chris Stewart",
      umur: 26,
      jeniskelamin: " pria",
    },
    {
      id: 9,
      nama: "Veronica Lodge",
      umur: 32,
      jeniskelamin: "wanita",
    },
  ]);
  const itemsPerPage = 10;
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
  return (
    <div id="penyakitDalamUmumPage">
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
              <li className="breadcrumb-item text-sm">
                <Link className="opacity-5 text-dark" to="/Poliklinik">
                  Poliklinik
                </Link>
              </li>
              <li
                className="breadcrumb-item text-sm text-dark active"
                aria-current="page"
              >
                <b>Penyakit Dalam</b>
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
                    {userdata.namalengkap}
                  </span>
                  <i className="fa fa-user me-sm-1 ml-2" />
                </Link>
              </li>
              <li className="nav-item px-3 d-flex align-items-center">
                <a to="javascript:;" className="nav-link text-body p-0">
                  <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* body */}
      <div className="container-fluid">
        <h2 id="titledashboard">Klinik Penyakit Dalam</h2>
        <div className="container">
          <div id="tbl">
            <button id="tblhariini" onClick={() => handleClick("Hari ini")}>
              {currentDay === "Hari ini" ? <b>Hari ini</b> : "Hari ini"}
            </button>
            <button id="tblbesok" onClick={() => handleClick("Besok")}>
              {currentDay === "Besok" ? <b>Besok</b> : "Besok"}
            </button>
          </div>
          <div className="col-lg-12 mt-3">
            <div className="row">
              <div className="col-md-6">
                <div className="row" style={{ border: "2px solid black" }}>
                  <div className="col-6">
                    <div style={{ marginTop: "15px" }}>
                      <h4>
                        <b>{currentDay}</b>
                      </h4>
                      <p>
                        Senin, 30 Januari 2023 <br />
                        Pendaftaran 07:00 - 10:00
                      </p>
                      <Link to="/Antrian">
                        <button id="tblambilnomor" className="btn btn-dark">
                          Ambil Nomor
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-6 p-0"
                    style={{ borderLeft: "2px solid black" }}
                  >
                    <select
                      className="form-select p-0"
                      size={7}
                      aria-label="size 12 select example"
                    >
                      <option
                        style={{ borderBottom: "1px solid black" }}
                        selected
                      >
                        Pilih dokter
                      </option>
                      {options.map((option) => (
                        <option
                          style={{ borderBottom: "1px solid black" }}
                          value={option.value}
                          key={option.value}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div
                id="kotakhari"
                className="col-md-6 overflow"
                style={{ border: "2px solid black" }}
              >
                <div className="row">{renderedItems}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 mt-3" style={{ border: "2px solid black" }}>
              <div className="p-1">
                <h5>
                  <b>9/10</b>
                </h5>
              </div>
              <div>
                <Table striped bordered hover>
                  <thead style={{ backgroundColor: "black", color: "white" }}>
                    <tr>
                      <th>No Antrian</th>
                      <th>Nama</th>
                      <th>Umur</th>
                      <th>Jenis Kelamin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nama}</td>
                        <td>{item.umur}</td>
                        <td>{item.jeniskelamin}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PenyakitDalamUmum;
