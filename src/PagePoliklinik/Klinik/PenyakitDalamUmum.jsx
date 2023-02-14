import React from "react";
import Table from "react-bootstrap/Table";
import Footer from "../../components/footer";

const PenyakitDalamUmum = () => {
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
                <a className="opacity-5 text-dark" href="/DashBoard">
                  Pages
                </a>
              </li>
              <li className="breadcrumb-item text-sm">
                <a className="opacity-5 text-dark" href="/Poliklinik">
                  Poliklinik
                </a>
              </li>
              <li className="breadcrumb-item text-sm">
                <a className="opacity-5 text-dark" href="/KlinikPenyakitDalam">
                  Klinik
                </a>
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
                <a
                  href="./Profile"
                  className="nav-link text-body  font-weight-bold px-0"
                >
                  <span className="d-sm-inline d-none m-lg-2">
                    Mukhammad Vicky
                  </span>
                  <i className="fa fa-user me-sm-1 ml-2" />
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
        <h2 id="titledashboard">Klinik Penyakit Dalam</h2>
        <div className="container">
          <div id="tbl">
            <a href="">
              <button id="tblhariini">Hari ini</button>
            </a>
            <a href="">
              <button id="tblbesok">Besok</button>
            </a>
          </div>
          <div className="col-12 mt-3">
            <div className="row">
              <div className="col-6" id="colambilnomor">
                <div className="row" style={{ border: "2px solid black" }}>
                  <div className="col-6">
                    <div style={{ marginTop: "15px" }}>
                      <h4>
                        <b>Hari ini</b>
                      </h4>
                      <p>
                        Senin, 30 Januari 2023 <br />
                        Pendaftaran 07:00 - 10:00
                      </p>
                      <a href="/Antrian">
                        <button id="tblambilnomor" className="btn btn-dark">
                          Ambil Nomor
                        </button>
                      </a>
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
                      <option
                        style={{ borderBottom: "1px solid black" }}
                        value={1}
                      >
                        Dr. Jessica Pricilla
                      </option>
                      <option
                        style={{ borderBottom: "1px solid black" }}
                        value={2}
                      >
                        Dr. Adipati Laksmana
                      </option>
                      <option
                        style={{ borderBottom: "1px solid black" }}
                        value={3}
                      >
                        Dr. Secillia Pradjiwaksono
                      </option>
                      <option
                        style={{ borderBottom: "1px solid black" }}
                        value={4}
                      >
                        Dr. Erica Carlina
                      </option>
                      <option
                        style={{ borderBottom: "1px solid black" }}
                        value={5}
                      >
                        Dr. Hasan Iskandar
                      </option>
                      <option
                        style={{ borderBottom: "1px solid black" }}
                        value={6}
                      >
                        Dr. Pandji Akmaludin
                      </option>
                      <option
                        style={{ borderBottom: "1px solid black" }}
                        value={7}
                      >
                        Dr. Aflah Rizkyadhafin
                      </option>
                      <option
                        style={{ borderBottom: "1px solid black" }}
                        value={8}
                      >
                        Dr. Faisal Islam
                      </option>
                      <option
                        style={{ borderBottom: "1px solid black" }}
                        value={9}
                      >
                        Dr. Rakhansyah Lubis
                      </option>
                      <option
                        style={{ borderBottom: "1px solid black" }}
                        value={10}
                      >
                        Dr. Harun Kusnaedi
                      </option>
                      <option
                        style={{ borderBottom: "1px solid black" }}
                        value={11}
                      >
                        Dr. Mukhammad Vicky
                      </option>
                      <option
                        style={{ borderBottom: "1px solid black" }}
                        value={12}
                      >
                        Dr. Niko Muslim
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div
                id="kotakhari"
                className="col-6 overflow "
                style={{ border: "2px solid black" }}
              >
                <div className="row">
                  <div className="col-6">
                    <div className="m-3">
                      <h4>
                        <b>Senin</b>
                      </h4>
                      <p>
                        Dr. Jessica Pricilla <br />
                        Dr. Erica Carlina
                      </p>
                    </div>
                  </div>
                  <div className="col-6 p-3">
                    <div>
                      <h4>
                        <b>Senin</b>
                      </h4>
                      <p>
                        Dr. Jessica Pricilla <br />
                        Dr. Erica Carlina
                      </p>
                    </div>
                  </div>
                </div>
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
                    <tr>
                      <td>001</td>
                      <td>Intan Permata Sari</td>
                      <td>16</td>
                      <td>Perempuan</td>
                    </tr>
                    <tr>
                      <td>002</td>
                      <td>Suci Sahmi Asri</td>
                      <td>16</td>
                      <td>Perempuan</td>
                    </tr>
                    <tr>
                      <td>003</td>
                      <td>Astri Nuraini</td>
                      <td>17</td>
                      <td>Perempuan</td>
                    </tr>
                    <tr>
                      <td>004</td>
                      <td>Ilham Alamul Huda</td>
                      <td>17</td>
                      <td>Laki-laki</td>
                    </tr>
                    <tr>
                      <td>005</td>
                      <td>Rayyan Rafkhi Ardiha</td>
                      <td>16</td>
                      <td>Laki-laki</td>
                    </tr>
                    <tr>
                      <td>006</td>
                      <td>Aflah Rizky Adhafin</td>
                      <td>17</td>
                      <td>Laki-laki</td>
                    </tr>
                    <tr>
                      <td>007</td>
                      <td>Faisal Muslim</td>
                      <td>17</td>
                      <td>Laki-laki</td>
                    </tr>
                    <tr>
                      <td>008</td>
                      <td>Fina Nur Rahmat</td>
                      <td>16</td>
                      <td>Perempuan</td>
                    </tr>
                    <tr>
                      <td>009</td>
                      <td>Rakhansyah Lubis</td>
                      <td>18</td>
                      <td>Laki-laki</td>
                    </tr>
                  </tbody>
                </Table>
                <div id="tbldatanomor">
                  <a href="">
                    <button id="arrowleft">
                      <i class="fas fa-arrow-left"></i>
                    </button>
                  </a>
                  <a href="">
                    <button id="currentnumber">1</button>
                  </a>
                  <a href="">
                    <button id="arrowright">
                      <i class="fas fa-arrow-right"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PenyakitDalamUmum;
