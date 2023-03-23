import React from "react";
import { Link } from "react-router-dom";

const Hasil = () => {
  return (
    <div id="hasilPage">
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
              <li className="breadcrumb-item text-sm">
                <Link className="opacity-5 text-dark" to="/PenyakitDalamUmum">
                  Penyakit Dalam
                </Link>
              </li>
              <li
                className="breadcrumb-item text-sm text-dark active"
                aria-current="page"
              >
                <b>Hasil & Pembayaran</b>
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
        <h2 id="titledashboard" className="mt-3">
          Hasil & Pembayaran
        </h2>
        <div className="container">
          <div className="col-12 mb-3">
            <div className="row mt-5">
              <div
                style={{
                  border: "2px solid black",
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                }}
                className="col-6 text-center"
              >
                <h3 id="namaPasienDokter">
                  Nama Pasien : <b> Mukhammad Vicky </b> <br />
                  Nama Dokter : <b> Dr.Cecilla Precilla </b>
                </h3>
              </div>
              <div
                style={{
                  border: "2px solid black",
                  borderTopRightRadius: "8px",
                  borderBottomRightRadius: "8px",
                  borderLeft: "0px",
                }}
                className="col-6 text-center"
              >
                <h3 id="namaPasienDokter">
                  {" "}
                  Kamu di diagnosa mengidap penyakit : <br />{" "}
                  <b>Diabetes Tingkat 3</b>{" "}
                </h3>
              </div>
              <table
                class="table table-striped mt-5 table-responsive"
                style={{ border: "1px solid black" }}
              >
                <thead id="theadObat">
                  <tr className="bg-white text-black">
                    <th>30 / Januari / 2023</th>
                  </tr>
                  <tr>
                    <th>Nama Obat</th>
                    <th>Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cendo Xitrol Eyedrop</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>De Nature</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Multi A3 Vitamin</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Sido Muncul</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Blackmores Sugar Balance 90</td>
                    <td>2</td>
                  </tr>
                  <tr className="bg-black text-white">
                    <td>Total Pembayaran :</td>
                    <td>Rp. 30.000</td>
                  </tr>
                </tbody>
              </table>
              <div className="card">
                <div className="card-body">
                  <h4 id="titledashboard" className="mx-0">
                    Catatan Dokter
                  </h4>
                  <p className="text-secondary">
                    Kamu di rekomendasikan untuk ke klinik lagi setelah obatmu
                    habis jika sakit kamu tidak kunjung sembuh Saran saya kamu
                    harus mengurangi mengkonsumsi mie instant <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis sequi nisi soluta cum voluptatum temporibus
                    distinctio! Dolorum deleniti suscipit illum nam dignissimos
                    soluta, impedit vitae quasi, hic, adipisci sunt commodi?
                  </p>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-body text-center">
                  <h5>
                    <b>
                      Silahkan lakukan pembayaran obat di apoteker lalu klik{" "}
                      <br />
                      <Link to="/BuktiPembayaran">link ini </Link> untuk membuka
                      bukti pembayaran
                    </b>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hasil;
